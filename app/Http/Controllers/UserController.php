<?php
namespace Sinapsi\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

use Sinapsi\Post;
use Sinapsi\PostComment;
use Sinapsi\Sinapsi;
use Illuminate\Support\Facades\DB;
use Sinapsi\User;
use Sinapsi\Repositories\PostRepository;

class UserController extends Controller
{
    public function __construct(PostRepository $PostRepository)
    {
        $this->postRepository = $PostRepository;
    }

    /**
     *
     * Show a user view
     *
     * @param $user_id
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index($user_id)
    {
        $user = User::select(
            'users.*',
            'entities.name AS entity_name',
            'entities.municipi AS entity_location')
            ->leftJoin('entities', 'users.entity_id', '=', 'entities.id')
            ->where('users.id', $user_id)
            ->first();

        if (!$user) {
            return view('errors.user_not_found');
        }

        $posts_favorites = $user->favorites();
        $posts_liked = $user->liked();
        $posts_comments = $user->comments();

        return view('user/index', compact(['user', 'posts_favorites', 'posts_liked', 'posts_comments']));
    }

    /**
     *
     * Show edit user form
     *
     * @param $user_id
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function edit($user_id)
    {
        $user = User::select('users.*',
            'entities.id AS entity_id',
            'entities.name AS entity_name',
            'entities.municipi AS entity_location')
            ->leftJoin('entities', 'users.entity_id', '=', 'entities.id')
            ->where('users.id', $user_id)
            ->first();

        if ($user->sinapsi_dst) {
            $sinapsi = Sinapsi::where('sinapsis.id', $user->sinapsi_dst)->first();
        } else {
            $sinapsi=new Sinapsi();
        }

        if (!$user) {
            return view('errors.user_not_found');
        }

        $entity_options = DB::table('entities')->where('type',"!=",'Projecte')->get();

        $entities = $entity_options->map(
            function ($entity_option) {
                return [
                    "ID" => $entity_option->id,
                    "text" => $entity_option->name. " (". $entity_option->municipi . ")"
                ];
            }
        );
        
        /*$sinapsi_options = Sinapsi::select('sinapsis.id AS ID',
                                'sinapsis.name AS text')
                                ->leftJoin('user_abilities', 'user_abilities.scope_id', '=', 'sinapsis.id')
                                ->where('user_abilities.user_id', $user_id)
                                ->where('user_abilities.ability', 'posts_manage')
                                ->where('user_abilities.scope', 'sinapsi')->get();
        */
        
        // TODO: user_abilities                        
        $sinapsi_options = Sinapsi::select('sinapsis.id AS ID','sinapsis.name AS text')
                                ->where('type', 'manual')->get();

        $sinapsis = $sinapsi_options->map(
            function ($sinapsi_option) {
                return [
                    "ID" => $sinapsi_option->ID,
                    "text" => $sinapsi_option->text
                ];
            }
        );

        return view('user/edit', compact(['user','entities','sinapsi','sinapsis']));
    }

    /**
     * Update user's information
     *
     * @param $user_id
     * @param Request $request
     * @return mixed
     *
     */
    public function update($user_id, Request $request)
    {
        $user = User::find($user_id);

        if (!$user) {
            return view('errors.user_not_found');
        }

        //TODO: check not null
        $user->name = $request->name;
        $user->description = $request->description;
        $user->sinapsi_dst = $request->sinapsi_dst;
        $user->wp_dst = $request->wp_dst;

        $user->entity_id = ($request->entity_id) ? $request->entity_id : '';

        if ($request->file('avatar')) {
            $user->avatar = url('/') . '/' . $user->saveAvatar($request->file('avatar'));
        }

        $user->save();

        return Redirect::to('user/' . $user_id);
    }

    /**
     * User do a commnet
     *
     * @param Request $request
     * @return array
     */
    public function doComment(Request $request)
    {
        $user = \Auth::user();

        $data = $request->only(['text', 'post_id', 'user_id']);
        $comment = $user->__comments()->create($data);
        $comment_id = $comment->id;

        //TODO: check comment insert
        $comment = $this->postRepository->getComment($comment_id);
        $comment['id'] = $comment_id;

        return ['success' => true,
            'comment' => $comment->toArray()
        ];
    }

    /**
     *
     * Delete a comment from database
     *
     * @param $post_id
     * @param $comment_id
     * @return array
     */
    public function destroyComment($comment_id)
    {
        $user = \Auth::user();
        $comment = PostComment::findOrFail($comment_id);

        if (($comment->user_id == $user->id) || $user->isAdmin()) {
            $result = $comment->delete();
        }
        return ['success' => $result];
    }

    /**
     *
     * Mark post as favorite (star)
     *
     * @param $id
     * @return array
     */
    //TODO: Make repository
    public function favorite($id)
    {
        $user = \Auth::user();
        $post = Post::findOrFail($id);

        $result = $user->favorite($post);
        if (!$result) {
            return ['success' => false];
        }

        $query = '(SELECT COUNT(*) FROM post_favorites WHERE post_favorites.post_id =' . $id . ') as num_favorites,
        (SELECT COUNT(*) FROM post_favorites WHERE post_favorites.post_id =' . $id . ' AND post_favorites.user_id =' . $user->id . ') as favorited';

        $post = Post::selectRaw($query)->where('id', $id)->first();

        return [
            'success' => $result,
            'post' => $post,
        ];
    }
    /**
     *
     * Unmark post as favorite (star)
     *
     * @param $id
     * @return array
     */
    public function unfavorite($id)
    {
        $user = \Auth::user();
        $post = Post::findOrFail($id);
        $result = $user->unfavorite($post);

        if (!$result) {
            return ['success' => false];
        }

        $query = '(SELECT COUNT(*) FROM post_favorites WHERE post_favorites.post_id =' . $id . ') as num_favorites,
        (SELECT COUNT(*) FROM post_favorites WHERE post_favorites.post_id =' . $id . ' AND post_favorites.user_id =' . $user->id . ') as favorited';

        $post = Post::selectRaw($query)->where('id', $id)->first();

        return [
            'success' => $result,
            'post' => $post,
        ];
    }

    /**
     *
     * Like post (heart)
     *
     * @param $id
     * @return array
     */
    public function like($id)
    {
        $user = \Auth::user();
        $post = Post::findOrFail($id);
        $result = $user->like($post);

        if (!$result) {
            return ['success' => false];
        }

        return [
            'success' => true,
            'post' => $result,
        ];
    }

    /**
     * Unvote post (heart)
     *
     * @param $id
     * @return array
     */
    public function unlike($id)
    {
        $user = \Auth::user();
        $post = Post::findOrFail($id);

        $result = $user->unlike($post);

        if (!$result) {
            return ['success' => false];
        }

        return [
            'success' => true,
            'post' => $result,
        ];
    }
}
