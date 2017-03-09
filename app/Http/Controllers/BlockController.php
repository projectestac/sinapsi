<?php

namespace Sinapsi\Http\Controllers;

use Illuminate\Http\Request;
use Sinapsi\Post;
use Sinapsi\Block;

class BlockController extends Controller
{

    /**
     * index
     * Get Blocks (used by some views and block builder)
     *
     * return mixed
     */
    //TODO:Refactor
    public function index(Request $request)
    {
        $blocks = Block::where('scope', $request->scope);

        if ($request->scope=='post') {
            $post = Post::findOrFail($request->scope_id);
            $parent_id = $post->root_parent();
            $blocks = $blocks->whereIn('scope_id', [$request->scope_id,$parent_id]);
        } elseif ($request->scope!='home') {
            $blocks = $blocks->where('scope_id', $request->scope_id);
        }

        $blocks = $blocks->orderBy('order', 'ASC')->get();

        return $blocks;
    }

    public function store(Request $request)
    {
        return Block::create([
            'title'   => $request->title,
            'content' => $request->content,
            'type'    => $request->type,
            'options' => $request->options,
            'scope'   => $request->scope,
            'scope_id'=> $request->scope_id,
            'order'   => $request->order
        ]);
    }

    public function update(Request $request)
    {
        $block = Block::findOrFail($request->id);
        $block->order = $request->order;
        $block->save();
        return ["success"=>true];
    }

    public function destroy(Request $request)
    {
        Block::findOrFail($request->id)->delete();
        return ["success"=>true];
    }
}
