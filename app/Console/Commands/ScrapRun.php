<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

use App\Models\Feed;
use App\Jobs\ScrapFeed;


/**
 * Scraps the feeds on the database for new content.
 */
class ScrapRun extends Command {

    /** Feeds to fetch at once */
    const CHUNK_SIZE = 100;


    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'scrap:run
        {--force :      Force the update of posts}
        {feeds?* :      Restrict to this author IDs or feed URLs}
    ';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Atom and RSS feed extraction';


    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct() {
        parent::__construct();
    }


    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle() {
        $args = $this->argument('feeds');
        $force = $this->option('force');
        $query = Feed::query();

        // Filter the query by the requested feeds if any, otherwise,
        // all the active feeds will be scraped

        $authors = [];
        $urls = [];

        foreach ($args as $arg) {
            preg_match('/^[0-9]+/', $arg) ?
                $authors[] = $arg :
                $urls[] = $arg;
        }

        if (count($authors) > 0) {
            $query->whereIn('author_id', $authors);
        }

        if (count($urls) > 0) {
            $query->orWhereIn('url', $urls);
        }

        // Parse all the requested feeds

        $query->orderBy('id', 'desc');

        $query->chunk(static::CHUNK_SIZE, function ($feeds) use ($force) {
            foreach ($feeds as $feed) {
                ScrapFeed::dispatch($feed, $force);
            }
        });

        // Remove lock file
        unlink('../storage/scrap_lock.txt');
    }

}
