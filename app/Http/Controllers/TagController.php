<?php

namespace Sinapsi\Http\Controllers;

use Illuminate\Http\Request;

use Sinapsi\Tag;
use Sinapsi\Repositories\PostRepository;
use Sinapsi\TagAlias;

class TagController extends Controller
{
    public function __construct(PostRepository $PostRepository)
    {
        $this->postRepository = $PostRepository;
    }

    public function index(Request $request, $tag='')
    {
        $params = $request->all();

        $tag = Tag::where('slug', $tag)->firstOrFail();
        $search_options = ['city','tags','se','st','order','school_types','schools'];
        $selected = $this->buildUrlFilters($params);

        return view('tag/index', compact([
            'tag',
            'search_options',
            'selected'
        ]));
    }

    public function posts(Request $request, $id)
    {
        $params= $request->all();
        $params['t'] = empty($params['t']) ? $id : $params['t'] .",".$id;
        $posts = $this->postRepository->getPosts($params);

        return $posts;
    }

    public function postsCount(Request $request, $id)
    {
        $params= $request->all();
        $params['t'] = empty($params['t']) ? $id : $params['t'] .",".$id;
        $posts = $this->postRepository->getPostsCount($params);

        return $posts;
    }

    public function add($tag, $post_id='')
    {
        $__tag = Tag::firstOrCreate(
            ['slug' => $tag['tag']],
            ['name' => $tag['name']]
        );

        if (!empty($post_id)) {
            PostTag::firstOrCreate([
                "post_id" => $post_id,
                "tag_id" => $__tag->id
            ]);
        }

        return true;
    }

    public function update(Request $request)
    {
        $tag = Tag::findOrFail($request->id);
        $tag->name = $request->name;
        $tag->description = $request->description;
        $tag ->save();

        return redirect()->to('tag/'.$tag->slug);
    }

    public function edit($tag)
    {
        //TODO
    }

    public function getAlias()
    {
        return TagAlias::orderBy('updated_at', 'DESC')->get();
    }

    public function addAlias(Request $request)
    {
        TagAlias::firstOrCreate([
                'slug' =>trim($request->slug),
                'slug_alias' => trim($request->slug_alias),
                'name_alias' => trim($request->name_alias)
            ]
        );

        return ['success'=>true];
    }

    public function destroyAlias(Request $request)
    {
        TagAlias::findOrFail($request->id)->delete();
        return ['success'=>true];
    }
}
