<?php
namespace Sinapsi\Http\Controllers;

use File;
use DB;
use Illuminate\Http\Request;
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

    public function index (){    
        $start = Channel::min('id'); 
        $end =  Channel::max('id'); 
        return view('admin/reader', compact('start','end'));
    }

    /**
     * savePost
     * Try to save post into database. If post already exists,
     * @param $post
     * @return array
     **/

    public function savePost($post){

        $tags = $post['tags'];
        unset($post['tags']);

        // Post already exists if permalink is in the database
        $__post = Post::firstOrCreate(
            ["permalink" => $post['permalink']],
            $post
        );

        $isNew = $__post->wasRecentlyCreated ? true : false;

        foreach ($tags as $tag) {
            $__tag = $this->tagRepository->newOrAlias($tag);

            PostTag::firstOrCreate([
                "post_id" => $__post->id,
                "tag_id" => $__tag->id
            ]);
        }

        $log_post= [
            "title" => $__post->title,
            "link" => $__post->link,
            "new" => $isNew
        ];

        return $log_post;

    }


    public function getPostByUrl($url){

        try {

            $codename = explode("/", $url)[3];
            $entity = Entity::where('codename', $codename)->first();
            $channel = Channel::where('obj_id', $entity->id)->where('type', 'Entity')->first();

            $post = $channel->fetchPost($url);
            $post_info = $this->savePost($post);

            $log_fetch = [
                "entity"=>[
                    "nom"=>$entity->name,
                    "url"=>$entity->url
                ],
                "post"=>$post_info
            ];

            return $log_fetch;

        } catch (Exception $e) {
            return $e->getMessage();
        }

    }

    public function getPostsByUrlsList(Request $request){

        $log_posts = collect([]);

        $urlList = explode(PHP_EOL, $request->list);

        foreach ($urlList as $url) {
            $post = $this->getPostByUrl($url);
            $log_posts->push($post);
        }

        return $log_posts;

    }

    //getPostsByChannel
    public function getPostsByChannel($channel_id){

        $separator = [
            "entity"=>["nom"=>"","url"=>""],
            "post"=>["title" =>"", "link" => "","new" => false]
        ];

        try {
            $log_posts = collect([]);

            $channel = Channel::findOrFail($channel_id);
            $entity = Entity::findOrFail($channel->obj_id);

            // Get posts and tags
            $posts = $channel->fetchPosts();

            // Save new posts and associated tags into database
            foreach ($posts as $post) {

                $post_info = $this->savePost($post);

                $log_fetch = [
                    "entity"=>[
                        "nom"=>$entity->name,
                        "url"=>$entity->url
                    ],
                    "post"=>$post_info
                ];
                $log_posts->push($log_fetch);
            }

            $log_posts->push($separator);
            return $log_posts;

        } catch (Exception $e) {
            return $e->getMessage();
        }


    }

    //getPostByEntity
    public function getPostByEntity($codename){
    //TODO
    }

    //getPostsListByEntities
    public function getPostByEntitiesList($request){
    //TODO
    }

    public function getLogos()
    {
        $schools = Entity::where('web', 'like', '%agora.xtec.cat%')
            ->get();

        $logos = collect([]);


        foreach ($schools as $school) {
            $name = $school->name;

            if (!$school->image) {
                try {
                    $dom = HtmlDomParser::str_get_html(file_get_contents('http://agora.xtec.cat/' . $school->slug));

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
