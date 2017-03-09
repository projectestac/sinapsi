<?php

namespace Sinapsi\Http\Controllers;

use Illuminate\Http\Request;
use Sinapsi\Http\Requests;
use DB;
use Gate;
use Storage;
use Cache;
use Session;

use Sinapsi\Post;
use Sinapsi\SinapsiPostsSticky;
use Sinapsi\PostSticky;
use Sinapsi\PostVote;
use Sinapsi\PostFavorite;
use Sinapsi\Tag;
use Sinapsi\PostTag;
use Sinapsi\Block;
use Sinapsi\Channel;
use Sinapsi\Repositories\PostRepository;
use Sinapsi\Repositories\TagRepository;

/**
 * Class PostController
 *
 * @package Sinapsi\Http\Controllers
 */

class PostController extends Controller
{
    public function __construct(PostRepository $PostRepository, TagRepository $TagRepository)
    {
        $this->postRepository = $PostRepository;
        $this->tagRepository = $TagRepository;
    }

    /**
     * index
     * Show a post and related info (blocks and other posts sharing hierarchy)
     *
     * return view
     */
    public function index($id)
    {
        //$post = Post::findOrFail($id);
        $post = $this->postRepository->getPost($id);
        //$sns_tree = $post->getPostTree();
        //$blocks = Block::where('scope','post')->where('scope_id',$id)->get();
        //return view('post/index', compact('post','id','sns_tree','blocks'));
        return view('post/index', compact('post'));
    }

    /**
     * post
     * Get a post by id
     *
     * return mixed
     */
    public function post(Request $request)
    {
        $post = $this->postRepository->getPost($request->id);

        return $post;
    }

    /**
     * create
     * Show a new post form
     *
     * return mixed
     */
    public function create()
    {
        $tags = Tag::select('id AS ID', 'name AS text')->get();
        return view('post/create', compact('tags'));
    }

    /**
     * store
     * Save post content to database
     *
     */
    public function store(Request $request)
    {

        // Get channel from user
        // TODO: control if not exists
        //$channel = Channel::where('type', 'User')->where('obj_id', auth()->user()->id)->first();

        $channel = Channel::firstOrCreate(
            ['type' => 'User',
             'obj_id' => auth()->user()->id,
             'active' => 0
            ]
        );
        
        $parent_id = !empty($request->parent_id) ? $request->parent_id : null;

        $post = Post::create([
            'title'      =>$request->title,
            'description'=>$request->description,
            'content'    =>$request->content."<br>",
            'fullcontent'=>$request->fullcontent,
            'channel_id' =>$channel->id,
            'pub_date'   =>date('Y-m-d H:i:s'),
            'parent_id'  =>$parent_id,
            'order' => $request->order
        ]);

        $post->link = url('/post/'.$post->id);
        $post->save();

        //TODO: Refactor
        if (!empty($request->thumb)) {
            $thumb = saveFile($request->file('thumb'), $post->id);
            $post->thumb = $thumb;
            //$post->content = $new_content;
        } else {
            // Get thumb from description
            //$thumb = thumb($new_content);
            $post->thumb = '';
        }
        $post->save();

        $tags = json_decode($request->t);

         // Create all associated tags
        if (count($tags)>0) {
            foreach ($tags as $tag) {
                $__tag = $this->tagRepository->newOrAlias($tag->text);

                PostTag::firstOrCreate([
                    "post_id" => $post->id,
                    "tag_id" => $__tag->id
                ]);
            }
        }

        // Build str_tags to simplify query search
        $tags = PostTag::select('tags.name')
                ->join('tags', 'tags.id', '=', 'post_tags.tag_id')
                ->where('post_id', $post->id)
                ->get();

        $str_tags = $tags->implode('name', ',');
        $post->str_tags = $str_tags;
        $post->save();

        Cache::pull('posts');

        return redirect()->to('/');
    }

    public function edit($id)
    {
        // TODO: Flash message
        if (!Auth()->user()->isAdmin() and !Auth()->user()->isAuthor($id)) {
            return "No tens permissos per modificar aquest article";
        }

        $post = $this->postRepository->getPost($id);

        $all_tags = Tag::select('id AS ID', 'name AS text')->get();

        $selected_tags = PostTag::select("tags.id AS ID", "tags.name AS text")
                        ->join('tags', 'tags.id', '=', 'post_tags.tag_id')
                        ->where('post_id', $id)->get();
       
        return view('post/edit', compact(['post','all_tags','selected_tags']));
    }

    public function update(Request $request)
    {
        if (!Auth()->user()->isAdmin() and !Auth()->user()->isAuthor($request->id)) {
            return "No tens permissos per modificar aquest article";
        }

        // TODO: try .. catch
        $post = Post::findOrFail($request->id);
        $post->title        = $request->title;
        $post->description  = $request->description;
        $post->content      = $request->content;
        $post->fullcontent  = $request->fullcontent;
        $post->parent_id = !empty($request->parent_id) ? $request->parent_id : null;
        $post->order = $request->order;

        if (isset($request->thumb)) {
            if ($post->thumb) {
                $filename = str_replace('storage/public/', '', $post->thumb);
                Storage::delete('public/'.$filename);
            }
            $post->thumb = saveFile($request->file('thumb'), $post->id);
        }

        $post->save();

        // Delete all associated tags
        PostTag::where('post_id', $request->id)->delete();

        $tags = json_decode($request->t);

         // Create all associated tags
        if ($tags) {
            foreach ($tags as $tag) {
                $__tag = $this->tagRepository->newOrAlias($tag->text);

                PostTag::firstOrCreate([
                    "post_id" => $post->id,
                    "tag_id" => $__tag->id
                ]);
            }
        }

        $tags = PostTag::select('tags.name')
                    ->join('tags', 'tags.id', '=', 'post_tags.tag_id')
                    ->where('post_id', $post->id)
                    ->get();

        $str_tags = $tags->implode('name', ',');

        $post->str_tags = $str_tags;
        $post->save();

        Cache::pull('posts');

        return redirect()->to('post/'.$post->id);
    }

    public function destroy($id)
    {
        if (!Auth()->user()->isAdmin() and !Auth()->user()->isAuthor($id)) {
            return "No tens permissos per esborrar aquest article";
        }

        // TODO: control errors
        // TODO: only delete by user within 30 minutes
        $post = Post::findOrFail($id);
        $channel = Channel::findOrFail($post->channel_id);

        if (auth()->user()->isAdmin()
             || ($channel->type == 'User' && $channel->obj_id == auth()->user()->id)) {
            $post->delete();
            Storage::deleteDirectory('public/'.$post->id);
            Cache::pull('posts');
            //TODO: Flash message
             return back();
        } else {
            //TODO: Flash message
            return "No tens permissos per esborrar l'article";
        }
    }

    public function likes($id)
    {
        $likes = PostVote::where('post_id', $id)->get();
        return view('likes', compact('likes'));
    }

    public function favorites($id)
    {
        $favorites = PostFavorite::where('post_id', $id)->get();
        return view('favorites', compact('favorites'));
    }

    public function comments($id)
    {
        return [
            'success' => true,
            'comments' => $this->postRepository->comments($id)
        ];
    }

    public function refresh($id)
    {
        $post = Post::findOrFail($id);
        $channel = Channel::findOrFail($post->channel_id);
        $post = $channel->fetchPost($post->link);

        dd($post);

        return back();
    }

    public function hide($id)
    {
        $post = Post::findOrFail($id);
        $post->hidden = 1;
        $post->save();
        return back();
    }

    public function unhide($id)
    {
        $post = Post::findOrFail($id);
        $post->hidden = 0;
        $post->save();
        return back();
    }

    public function stick($id, $sinapsi_id='')
    {
        $post = Post::findOrFail($id);

        if (empty($sinapsi_id)) {
            $post->sticky = date('Y-m-d H:i:s');
            $post->save();
            Cache::pull('posts');
            Session::flash('message', "Article \"$post->title\" fixat a dalt");
        } else { // It's a Sinapsi

            if (Gate::denies('sinapsi-admin', $sinapsi_id)) {
                Session::flash('message', "No tens permissos per fixar aquest article");
            } else {
                SinapsiPostsSticky::firstOrCreate([
                'post_id' => $id,
                'sinapsi_id' => $sinapsi_id,
                'sticky' =>  date('Y-m-d H:i:s')
                ]);
                Session::flash('message', "Article \"$post->title\" fixat a dalt");
            }
        }

        return back();
    }

    public function unstick($id, $sinapsi_id='')
    {
        $post = Post::findOrFail($id);

        if (empty($sinapsi_id)) {
            $post->sticky = null;
            $post->save();
            Cache::pull('posts');
            Session::flash('message', "Article \"$post->title\" desfixat");
        } else {
            if (Gate::denies('sinapsi-manage', $sinapsi_id)) {
                Session::flash('message', "No tens permissos per desfixar aquest article");
            } else {
                SinapsiPostsSticky::where('post_id', '=', $id)
                    ->where('sinapsi_id', '=', $sinapsi_id)
                    ->first()->delete();
                Session::flash('message', "Article \"$post->title\" desfixat");
            }
        }
        return back();
    }

    /**
     * preview
     * Show a preview of post uploaded by url
     *
     * return view

    // TODO: Implement
    public function preview (Request $request)
    {
    $elements = parse_webpage($request->get('url'));
    return view('post/new', compact($elements));
    }


    //TODO: Necessary? Refactor?
    public function hidden (Request $request)
    {

    $params = $request->all();

    $posts = $this->postRepository
    ->getPosts($params)
    ->where('hidden','1');

    $url_query_string = getQueryString($request);

    return view('list', compact(['posts','url_query_string']));
    }
     */
}
