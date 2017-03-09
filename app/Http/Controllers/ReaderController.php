<?php
namespace Sinapsi\Http\Controllers;

use File;
use DB;
use Request;
use Cache;
use Session;
use Sunra\PhpSimple\HtmlDomParser;

use Sinapsi\Post;
use Sinapsi\Entity;
use Sinapsi\Channel;
use Sinapsi\PostTag;
use Sinapsi\Repositories\TagRepository;

class ReaderController extends Controller
{
    public function __construct(TagRepository $TagRepository)
    {
        $this->tagRepository = $TagRepository;
    }


    public function getLogos()
    {
        $schools = Entity::where('url', 'like', '%agora.xtec.cat%')
            ->get();

        $logos = collect([]);

        
        foreach ($schools as $school) {
            $name = $school->name;

            if (!$school->image) {
                try {
                    $dom = HtmlDomParser::str_get_html(file_get_contents('http://agora.xtec.cat/' . $school->codename));

                    if ($dom) {
                        $src = ($dom->find('#logo_entity')[0]->src);
                    } else {
                        $src = "";
                    }
                            
                    $e = Entity::find($school->id);
                    $e->image = $src;
                    $e->save();
                } catch (\Exception $e) {
                    $src = '';
                }
            } else {
                $src = $school->image;
            }


            $logos->push(array('name'=>$name,'src'=>$src));
        }



        echo "<table>";

        foreach ($logos as $logo) {
            echo "<tr>";
            echo "<td>";
            echo $logo['name'];
            echo "</td>";
            echo "<td>";
            echo "<img width='200px' src='".$logo['src']."'>";
            echo "</td>";
            echo "<tr>";
        }
        echo "</table>";

        //return $logos;
    }


    /**
     * getPostByUrl
     * Get post from url
     *
     * @return array
     */
    public function getPostByUrl(Request $request)
    {
        try {
            $log_posts = collect([]);

            $codename = explode("/", $request->url)[3];
            $entity = Entity::where('codename', $codename)->first();
            $channel = Channel::where('obj_id', $entity->id)->where('type', 'Entity')->first();

            $post = $channel->fetchPost($request->url);

            $log_posts->push(["entity"=>["nom"=>$request->url,"url"=>$request->url],"post"=>[],"tag"=>""]);
            $log_posts->push($this->savePost($post));

            Cache::pull('posts');
            return $log_posts->toArray();
        } catch (Exception $e) {
            return $e->getMessage();
        }
    }


    // TODO: Not working
    public function getPostsByUrlList(Request $request)
    {
        try {
            $log_posts = collect([]);
            //$pList = explode(',', $request->list);
            preg_match_all('~(["\'])([^"\']+)\1~', $request->list, $pList);

            foreach ($pList[2] as $p) {
                $codename = explode("/", $p)[3];

                $entity = Entity::where('codename', $codename)->first();
                $channel = Channel::where('obj_id', $entity->id)->where('type', 'School')->first();

                $posts = $channel->fetchPost($p);

                $log_posts->push(["entity" => ["nom" => $entity->name, "url" => $entity->url], "post" => [], "tag" => ""]);

                foreach ($posts as $post) {
                    $__post = Post::firstOrCreate($post['post']);
                    if ($__post->wasRecentlyCreated) {
                        $log_posts->push(["entity" => [], "post" => ["title" => $__post->title, "link" => $__post->link, "bgcolor" => 'green'], "tag" => ""]);
                    } else {
                        $log_posts->push(["entity" => [], "post" => ["title" => $__post->title, "link" => $__post->link, "bgcolor" => ''], "tag" => ""]);
                    }

                    foreach ($post['tags'] as $tag) {
                        $__tag = $this->tagRepository->addOrReturn($tag);

                        PostTag::firstOrCreate([
                            "post_id" => $__post->id,
                            "tag_id" => $__tag->id
                        ]);
                    }
                }
            }
            Cache::pull('posts');
            return $log_posts->toArray();
        } catch (Exception $e) {
            return $e->getMessage();
        }
    }


    /**
     * getPostByRss
     * Get posts from rss sources
     *
     * @return array
     */
    public function getPostsByRss($channel_id)
    {
        try {
            $log_posts = collect([]);

            $channel = Channel::findOrFail($channel_id);
            $entity = Entity::findOrFail($channel->obj_id);

            $log_posts->push([
                "entity"=>[
                    "nom"=>$entity->name,
                    "url"=>$entity->url
                ],
                "post"=>[]
            ]);

            // Get posts and tags
            $posts = $channel->fetchPosts();

            // Save new posts and associated tags into database
            foreach ($posts as $post) {
                $log_posts->push($this->savePost($post));
            }

            Cache::pull('posts');
            return $log_posts->toArray();
        } catch (Exception $e) {
            return $e->getMessage();
        }
    }

    public function savePost($post)
    {
        $tags = $post['tags'];
        unset($post['tags']);

        // Post already exists if permalink is in the database
        $__post = Post::firstOrCreate(
            ["permalink" => $post['permalink']],
            $post
        );

        if ($__post->wasRecentlyCreated) {
            $bgcolor = 'green';
        } else {
            $bgcolor = '';
        }

        $log_post= [
            "entity"=>[],
            "post"=>[
                "title" => $__post->title,
                "link" => $__post->link,
                "bgcolor" => $bgcolor
            ]
        ];

        foreach ($tags as $tag) {
            $__tag = $this->tagRepository->newOrAlias($tag);

            PostTag::firstOrCreate([
                "post_id" => $__post->id,
                "tag_id" => $__tag->id
            ]);
        }

        return $log_post;
    }

    /**
     * refreshPost
     * Get post and update database if changes
     *
     * @return redirect
     */
    public function refreshPost($id)
    {
        try {
            $post = Post::findOrFail($id);

            $updated_at_before = $post->updated_at;

            $channel = Channel::findOrFail($post->channel_id);
            $post = $channel->fetchPost($post->link);

            $tags = $post['tags'];
            unset($post['tags']);

            $__post = Post::updateOrCreate(
                ["permalink" => $post['permalink']],
                $post
            );

            $updated_at_after = $__post->updated_at;

            foreach ($tags as $tag) {
                $__tag = $this->tagRepository->newOrAlias($tag);

                PostTag::firstOrCreate([
                    "post_id" => $__post->id,
                    "tag_id" => $__tag->id
                ]);
            }

            Cache::pull('posts');

            if ($updated_at_before != $updated_at_after) {
                Session::flash('message', "Article  \"$__post->title\" actualitzat");
            } else {
                Session::flash('message', "No hi ha canvis a l'article \"$__post->title\"");
            }
            return back();
        } catch (Exception $e) {
            return $e->getMessage();
        }
    }
}
