<?php

namespace Sinapsi;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    protected $fillable = [
        'name', 'nickname', 'avatar', 'role', 'email', 'entity_id', 'reputation', 'sinapsi_dst','wp_dst'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function isAdmin()
    {
        return $this->role == "admin";
    }

    public function isAuthor($post_id)
    {
        $post = Post::findOrFail($post_id);
        $channel = Channel::where('type', 'User')
            ->where('id', $post->channel_id)
            ->first();
        return count($channel) ? true : false;
    }

    public function getAbilities()
    {
        return UserAbility::where('user_id', $this->id)->get();
    }

    public function hasAbility($ability, $scope="global", $scope_id=0)
    {
        if (UserAbility::where('scope', $scope)
            ->where('user_id', $this->id)
            ->where('scope_id', $scope_id)
            ->where('ability', $ability)
            ->first()) {
            return true;
        }

        return false;
    }

    /**
     * Posts created by user
     */
    public function posts()
    {
        $posts = collect([]);

        $channel = Channel::where('type', 'User')
            ->where('obj_id', $this->id)
            ->first();

        if (count($channel)) {
            $posts = Post::where('channel_id', $channel->id)->get();
        }
        return $posts;
    }


    public function school()
    {
        return $this->belongsTo(School::class);
    }

    public function __comments()
    {
        return $this->hasMany(PostComment::class);
    }

    private function __liked()
    {
        return $this->belongsToMany(Post::class, 'post_likes')->withTimestamps();
    }

    private function __favorites()
    {
        return $this->belongsToMany(Post::class, 'post_favorites')->withTimestamps();
    }


    public function hasLiked(Post $post)
    {
        return $this->__liked()->where('post_id', $post->id)->count();
    }

    public function hasFavorited(Post $post)
    {
        return $this->__favorites()->where('post_id', $post->id)->count();
    }

    public function like(Post $post)
    {
        if ($this->hasLiked($post)) {
            return false;
        }

        $score = $this->reputation;
        $this->__liked()->attach($post, ['score' => $score]);

        return $this->getLikesShortInfo($post->id);
    }

    public function unlike(Post $post)
    {
        if (!$this->hasLiked($post)) {
            return false;
        }

        $this->__liked()->detach($post);

        return $this->getLikesShortInfo($post->id);
    }

    // TODO: UserRepository
    public function favorites()
    {
        $query = '  posts.*,
                    post_favorites.created_at AS post_favorite_created_at,
                    CASE WHEN channels.type = "School" THEN entities.name
                        WHEN channels.type = "User" THEN users.name
                    END as source_name,
                    CASE WHEN channels.type = "School" THEN entities.location
                         WHEN channels.type = "User" THEN entities.name
                    END as source_location,
                    CASE WHEN channels.type = "School" THEN CONCAT("s/",entities.codename)
                         WHEN channels.type = "User" THEN CONCAT("user/",users.id)
                    END as source_url';

        return Post::selectRaw($query)
            ->join('post_favorites', 'posts.id', '=', 'post_favorites.post_id')
            ->join('channels', 'posts.channel_id', '=', 'channels.id')
            ->leftJoin('entities', 'entities.id', '=', 'channels.obj_id')
            ->leftJoin('users', 'users.id', '=', 'channels.obj_id')
            ->where('post_favorites.user_id', $this->id)
            ->get();
    }

    // TODO: UserRepository
    public function liked()
    {
        $query = ' posts.*,
                    post_likes.created_at AS post_like_created_at,
                    CASE WHEN channels.type = "School" THEN entities.name
                        WHEN channels.type = "User" THEN entities.name
                    END as source_name,
                    CASE WHEN channels.type = "School" THEN entities.location
                         WHEN channels.type = "User" THEN entities.name
                    END as source_location,
                    CASE WHEN channels.type = "School" THEN CONCAT("s/",entities.codename)
                         WHEN channels.type = "User" THEN CONCAT("user/",users.id)
                    END as source_url';

        return Post::selectRaw($query)
            ->join('post_likes', 'posts.id', '=', 'post_likes.post_id')
            ->join('channels', 'posts.channel_id', '=', 'channels.id')
            ->leftJoin('entities', 'entities.id', '=', 'channels.id')
            ->leftJoin('users', 'users.id', '=', 'channels.obj_id')
            ->where('post_likes.user_id', $this->id)
            ->get();
    }

    // TODO: UserRepository
    public function comments()
    {
        $query = '  posts.*,
                    post_comments.text AS comment, post_comments.created_at AS comment_created_at,
                    CASE WHEN channels.type = "School" THEN entities.name
                        WHEN channels.type = "User" THEN users.name
                    END as source_name,
                    CASE WHEN channels.type = "School" THEN entities.location
                         WHEN channels.type = "User" THEN entities.name
                    END as source_location,
                    CASE WHEN channels.type = "School" THEN CONCAT("s/",entities.codename)
                         WHEN channels.type = "User" THEN CONCAT("user/",users.id)
                    END as source_url';

        return Post::selectRaw($query)
            ->join('post_comments', 'posts.id', '=', 'post_comments.post_id')
            ->join('channels', 'posts.channel_id', '=', 'channels.id')
            ->leftJoin('entities', 'entities.id', '=', 'channels.id')
            ->leftJoin('users', 'users.id', '=', 'channels.obj_id')
            ->where('post_comments.user_id', $this->id)
            ->get();
    }

    public function favorite(Post $post)
    {
        if ($this->hasFavorited($post)) {
            return false;
        }
        $this->__favorites()->attach($post);

        return $this->getFavoritesShortInfo($post->id);
    }

    public function unfavorite(Post $post)
    {
        if (!$this->hasFavorited($post)) {
            return false;
        }

        $this->__favorites()->detach($post);

        return $this->getFavoritesShortInfo($post->id);
    }

    public function saveAvatar($file)
    {
        //TODO: control extension and size
        $folder = 'storage/public';
        $filename = 'avatar_' . $this->id . "." . $file->getClientOriginalExtension();
        $file->move($folder, $filename);

        return $folder . "/" . $filename;
    }

    private function getLikesShortInfo($post_id)
    {
        $query = '(SELECT COUNT(*) FROM post_likes WHERE post_likes.post_id =' . $post_id . ') as num_likes,
        (SELECT COUNT(*) FROM post_likes WHERE post_likes.post_id =' . $post_id . ' AND post_likes.user_id =' . $this->id . ') as liked';

        $likesShortInfo = Post::selectRaw($query)->where('id', $post_id)->first();
        return $likesShortInfo;
    }

    private function getFavoritesShortInfo($post_id)
    {
        $query = '(SELECT COUNT(*) FROM post_favorites WHERE post_favorites.post_id =' . $post_id . ') as num_favorites,
        (SELECT COUNT(*) FROM post_favorites WHERE post_favorites.post_id =' . $post_id . ' AND post_favorites.user_id =' . $this->id . ') as favorited';

        $favoritesShortInfo = Post::selectRaw($query)->where('id', $post_id)->first();

        return $favoritesShortInfo;
    }

    public function getDstSinapsi()
    {
        $sinapsi = Sinapsi::findOrFail($this->sinapsi_dst);
        return $sinapsi->name;
    }

    public function getDstWeb()
    {
        if (!empty($this->wp_dst)) {
            return $this->wp_dst . '/wp-admin/press-this.php';
        } else {
            return false;
        }
    }
}
