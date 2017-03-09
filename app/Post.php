<?php

namespace Sinapsi;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $fillable = ['title', 'link', 'permalink', 'description', 'parent_id', 'order',
        'content', 'author', 'str_tags', 'sticky', 'thumb', 'channel_id', 'pub_date'];
    
    protected $dates = ['created_at', 'updated_at', 'pub_date'];

    public function likes()
    {
        return $this->belongsToMany(User::class, 'post_likes');
    }

    public function markedAsFavorite($user_id)
    {
        return PostFavorite::where('user_id', $user_id)
            ->where('post_id', $this->id)
            ->first();
    }

    public function channel()
    {
        return $this->belongsTo(Channel::class);
    }

    public function comments()
    {
        return $this->hasMany(PostComment::class);
    }

    public function school()
    {
        //TODO control if not school
        return School::findOrFail($this->channel->obj_id);
    }


    // TODO: Refactor to Hierarchy query
    public function getPostTree()
    {
        $sns_tree = [];

        $post = Post::findOrFail($this->id);

        while ($post->parent_id) {
            $post = Post::findOrFail($post->parent_id);
        }

        $a['text'] = $post->title;
        $a['href'] = $post->link;
        $a['id'] = $post->id;

        if ($this->title == $post->title) {
            $a['state']['selected'] = true;
            $a['state']['expanded'] = true;
        }

        if (count($post->childs)) {
            $a['nodes'] = $this->child($post, $this->title);
        }
        $sns_tree[] = $a;
        $a = [];

        return json_encode($sns_tree);
    }

    public function child($post, $title)
    {
        foreach ($post->childs as $child) {
            $a['text'] = $child->title;
            $a['href'] = $child->link;
            $a['id'] = $child->id;

            if ($title == $child->title) {
                $a['state']['selected'] = true;
                $a['state']['expanded'] = true;
            }

            if (count($child->childs)) {
                $a['nodes'] = $this->child($child, $title);
            }
            $sns_tree[] = $a;
            $a = [];
        }

        return $sns_tree;
    }

    public function childs()
    {
        return $this->hasMany('Sinapsi\Post', 'parent_id', 'id')->orderBy('order', 'ASC');
    }

    public function root_parent()
    {
        $post = $this;

        while ($post->parent_id) {
            $post = Post::where('id', $post->parent_id)->first();
        }
        return $post->id;
    }
}
