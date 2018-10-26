<?php

namespace App\Jobs;

use Carbon\Carbon;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;

use App\Models\Post;


/**
 * Updates the reputations of feeds.
 */
class RankPosts implements ShouldQueue {
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /** Records to process at once */
    const CHUNK_SIZE = 100;

    /** Maximum reputation */
    const MAX_REPUTATION = 100;

    /** Do not update posts older than this days */
    const UPDATE_DAYS = 15;

    /** Force the update of all reputations */
    private $force = false;


    /**
     * Instantiate a new post ranker.
     *
     * @param $force        Update all posts
     */
    public function __construct($force = false) {
        $this->force = $force;
    }


    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle() {
        $dateRange = [
            Carbon::now()->subDays(static::UPDATE_DAYS),
            Carbon::now()
        ];

        // Obtain the maximum counts for the defined date range

        $query = Post::whereBetween('created_at', $dateRange);
        $query->selectRaw('max(like_count) as `likes`');
        $query->selectRaw('max(favourite_count) as `favourites`');
        $query->selectRaw('max(comment_count) as `comments`');

        $max = $query->first();

        // Update the posts published on the defined date range

        $query = Post::with('feed');

        if ($this->force == false) {
            $query->whereBetween('created_at', $dateRange);
        }

        $query->chunk(static::CHUNK_SIZE, function ($posts) use ($max) {
            foreach ($posts as $post) {
                $F = $post->favourite_count / max($max->favourites, 1);
                $L = $post->like_count / max($max->likes, 1);
                $C = $post->comment_count / max($max->comments, 1);
                $D = $post->created_at->diffInDays() / static::UPDATE_DAYS;

                $W = static::MAX_REPUTATION * (
                    (0.4 * $F) + (0.3 * $L) + (0.3 * $C)
                );

                if ($W > 0.0) {
                    $W -= (min($D, 0.9) * $W);
                }

                $post->reputation = $W;
                $post->save();
            }
        });
    }

}
