<?php

namespace App\Jobs;

use DB;
use DOMDocument;
use Carbon\Carbon;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\RequestException;
use SimplePie;
use Illuminate\Bus\Queueable;
use Illuminate\Database\QueryException;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;

use App\Models\Feed;
use App\Models\Post;
use App\Models\Tag;


/**
 * Scraps feeds for new articles.
 */
class ScrapFeed implements ShouldQueue {
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    
    /** RFC7231 date format */
    const RFC7231 = 'D, d M Y H:i:s \G\M\T';
    
    /** Maximum seconds HTTP requests are allowed to take */
    const TIMEOUT = 20;
    
    /** Maximum feed KBytes to read */
    const FEED_SIZE = 1024;
    
    /** Do not update posts created before */
    const UPDATE_DAYS = 5;
    
    /** Accepted content types HTTP header */
    const ACCEPT_HEADER = [
        'application/atom+xml',
        'application/rss+xml',
        'application/rdf+xml;q=0.9',
        'application/xml;q=0.8',
        'text/xml;q=0.8',
        'text/html;q=0.7',
        'unknown/unknown;q=0.1',
        'application/unknown;q=0.1',
        '*/*;q=0.1'
    ];
    
    /** Feed model to scrap */
    protected $feed;
    
    /** SimplePie parser */
    protected $parser;
    
    /** Current datetime */
    protected $scrapDate;
    
    /** HTTP User Agent */
    protected $userAgent;
    
    
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(Feed $feed) {
        $this->feed = $feed;
        $this->scrapDate = Carbon::now();
        $this->userAgent = config('scraper.user-agent');
        
        $this->parser = new SimplePie();
        $this->parser->enable_cache(false);
        $this->parser->strip_comments(true);
        $this->parser->strip_htmltags($this->parser->strip_htmltags);
        $this->parser->strip_attributes($this->parser->strip_attributes);
    }
    
    
    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle() {
        error_reporting(E_STRICT);
        
        // Create and configure a new HTTP client
        
        $http = new Client([
            'stream' => true,
            'timeout' => static::TIMEOUT,
            'headers' => [
                'Accept' => join(', ', static::ACCEPT_HEADER),
                'User-Agent' => $this->userAgent
            ]
        ]);
        
        // Request the feed to the external server, scrap its contents
        // and save the data in the database
        
        try {
            $feed = $this->feed;
            $parser = $this->parser;
            
            $headers = $this->getRequestHeaders($feed);
            $response = $http->get($feed->url, $headers);
            
            if ($response->getStatusCode() === 200) {
                $body = $this->readBody($response);
                $parser->set_raw_data($body);
                $parser->init();
                
                foreach ($parser->get_items() as $item) {
                    try {
                        DB::transaction(function() use ($feed, $item) {
                            $post = $this->updatePost($feed, $item);
                            
                            if (is_null($post) === false) {
                                $this->updateTags($post, $item);
                            }
                        }, 3);
                    } catch (QueryException $e) {
                        echo "Warning: " . substr($e->getMessage(), 0, 200);
                        echo "\n";
                    }
                }
            }
            
            $this->updateFeed($feed, $response);
            
            echo "{$feed->id}: {$feed->url} ";
            echo $response->getStatusCode() . "\n";
        } catch (RequestException $e) {
            echo "Cannot scrap feed: {$this->feed->url}\n";
            echo "{$e->getMessage()}\n";
        } catch (\Exception $e) {
            echo "Error: {$feed->id}: {$this->feed->url}\n";
            echo "{$e->getMessage()}\n";
        }
    }
    
    
    /**
     * Returns if the URL is valid. This method checks that the URL is no
     * longer than 512 characters and starts with 'http(s)://'.
     *
     * @param string $url       URL
     * @return boolean          true if valid
     */
    private function isValidURL($url) {
        return mb_strlen($url) <= 512 &&
               preg_match('/^https?:\/\//', $url);
    }
    
    
    /**
     * Returns if the URL is valid. This method checks that the URL is no
     * longer than 1024 characters and starts with 'http(s)://'.
     *
     * @param string $url       URL
     * @return boolean          true if valid
     */
    private function isValidImageURL($url) {
        return mb_strlen($url) <= 1024 &&
               preg_match('/^https?:\/\//', $url);
    }
    
    
    /**
     * Sanitize a string by removing HTML entities, tags and
     * superfluous spaces.
     *
     * @param string $string        Input string
     * @return string               Sanitized string
     */
    private function removeHTML($string) {
        return trim(strip_tags(html_entity_decode($string)));
    }
    
    
    /**
     * Limits the length of a string to the given length. This method
     * takes into account word boundaries and HTML tags, keeping words
     * and tags intact. May return empty strings.
     *
     * @param string $string        String to limit
     * @param int $length           Maximum length
     *
     * @return string               Substring
     */
    private function truncate($string, $length) {
        if (mb_strlen($string) <= $length)
            return $string;
        
        $matches = [];
        $string = trim($string);
        
        preg_match_all('/<[^>]*>|[^\s<]+/', $string, $matches);
        
        // Remove words and tags till the length is valid
        
        $words = $matches[0];
        $strlen = mb_strlen(join(' ', $words));
        
        while ($strlen > $length - 1 && count($words)) {
            $m = array_pop($words);
            $strlen -= (1 + mb_strlen($m));
        }
        
        // Join words and tags with spaces, then remove extra spaces
        
        $output = join(' ', $words);
        $output = preg_replace('/>\s+/', '>', $output);
        
        return $output;
    }
    
    
    /**
     * Return the content for the feed item.
     *
     * @param SimplePie_Item $item      Parsed feed item
     * @return string                   Post content
     */
    private function getContent($item) {
        $content = $item->get_content();
        $length = 65535;
        
        while (mb_strlen($content) > $length) {
            $length -= 100;
            $content = $this->truncate($content, $length);
            $content = $item->sanitize($content, SIMPLEPIE_CONSTRUCT_HTML);
        }
        
        return trim($content);
    }
    
    
    /**
     * Returns an excerpt for the feed item.
     *
     * @param SimplePie_Item $item      Parsed feed item
     * @return string                   Post excerpt
     */
    private function getExcerpt($item) {
        $allowedTags = '<a><b><del><em><i><kbd><p><s>'
                     . '<sup><sub><strong><strike><br>';
        
        // Get the description and remove all non allowed tags
        
        $excerpt = $item->get_description(true);
        $excerpt = strip_tags($excerpt, $allowedTags);
        
        // Truncate the excerpt to less than 1000 characters while
        // still keeping it valid HTML
        
        $length = 1000;
        
        while (mb_strlen($excerpt) > $length) {
            $length -= 10;
            $excerpt = $this->truncate($excerpt, $length);
            $excerpt = $item->sanitize($excerpt, SIMPLEPIE_CONSTRUCT_HTML);
        }
        
        return trim($excerpt);
    }
    
    
    /**
     * Return the title for the feed item.
     *
     * Sanitizes the title by stripping HTML tags and decoding entities
     * before returning it. If the feed item has no title it is extracted
     * from the item contents.
     *
     * @param SimplePie_Item $item      Parsed feed item
     * @return string                   Post title
     */
    private function getTitle($item) {
        $title = $this->removeHTML($item->get_title());
        
        // If no title is provided, try to use the description instead
        
        if (empty($title)) {
            $description = $item->get_description();
            $title = $this->removeHTML($description);
        }
        
        // Truncate the title to a maximum of 255 characters

        if (mb_strlen($title) <= 255)
            return $title;

        $truncated = $this->truncate($title, 254);
        
        if (!empty($truncated)) {
            $title = "{$truncated}…";
        } else if (!empty($title)) {
            $title = trim(substr($title, 0, 254));
            $title = "{$title}…";
        }
        
        return $title;
    }
    
    
    /**
     * Return the category labels for the feed item.
     *
     * This method normailzes the category labels by stripping any HTML
     * codes and superfluous space, and then transforming the label to
     * lowe case characters. A maximum of twenty labels will be returned.
     *
     * @param SimplePie_Item $item      Parsed feed item
     * @return Collection               Labels collection
     */
    private function getLabels($item) {
        $categories = $item->get_categories();
        $labels = [];
        
        foreach ($categories as $category) {
            // Normalize the category label
            
            $label = $this->removeHTML($category->get_label());
            $label = preg_replace('/\s+/', ' ', $label);
            $label = mb_strtolower($label);
            
            // The category can be a list of tags, if that is the case
            // split it into multiple labels
            
            if (preg_match('/(#[^#\s]+)(\s#[^#\s]+)+/', $label)) {
                $labels = array_merge($labels, explode(' ', $label));
            } else {
                $labels[] = $label;
            }
        }
        
        // Remove any hashtag characters from the label
        
        $labels = array_map(function($label) {
            return ltrim($label, '#');
        }, $labels);
        
        // Remove labels with less than 2 characters
        
        $labels = array_filter($labels, function($label) {
            return isset($label) && strlen($label) > 1;
        });
        
        // Return only up to 20 unique labels
        
        $labels = array_unique($labels);
        $labels = array_slice($labels, 0, 20);
        
        return collect($labels);
    }
    
    
    /**
     * Return a preview image URL for the feed item.
     *
     * @param SimplePie_Item $item      Parsed feed item
     * @return string                   Image URL or null
     */
    private function getImageURL($item) {
        $mimeRexEx = '/^image\/(gif|jpeg|png|svg+xml)$/';
        
        // Get the first image on the enclosures, if any
        
        foreach ($item->get_enclosures() as $enclos) {
            if (preg_match($mimeRexEx, $enclos->get_type())) {
                $url = trim($enclos->get_link());
                
                if ($this->isValidImageURL($url))
                    return $url;
            }
        }
        
        // If there wasn't a valid image on the enclosures, then
        // get the first image on the item contents
        
        try {
            $dom = new DOMDocument();
            $dom->loadHTML($item->get_content());
            $elems = $dom->getElementsByTagName('img');
            
            foreach ($elems as $elem) {
                if ($elem->hasAttribute('src')) {
                    $url = trim($elem->getAttribute('src'));
                    
                    if ($this->isValidImageURL($url))
                        return $url;
                }
            }
        } catch (\Exception $e) {
            // pass
        }
        
        return null;
    }
    
    
    /**
     * Returns the request headers for a feed object. This method
     * extracts the ETag and Modified Time from the feed and returns
     * the relevant HTTP headers to request the feed.
     *
     * @param Feed $feed        Feed object
     * @return array            Headers array
     */
    private function getRequestHeaders(Feed $feed) {
        $headers = [];
        
        if (!is_null($feed->etag)) {
            $headers['If-None-Match'] = $feed->etag;
        }
        
        if (!is_null($feed->modified_at)) {
            $date = $feed->modified_at->setTimezone('GMT');
            $headers['If-Modified-Since'] = $date->format(static::RFC7231);
        }
        
        return ['headers' => $headers];
    }
    
    
    /**
     * Obtain the published datetime from a feed items. Defaults to the
     * current date if the item date could not be parsed or the item
     * date is in the future.
     *
     * @param SimplePie_Item $item      Parsed feed item
     * @return Carbon                   Publish date
     */
    private function getPublishDate($item) {
        $date = $this->scrapDate;
        
        try {
            $gmdate = $item->get_gmdate();
            
            if (empty($gmdate) === false) {
                $date = Carbon::parse($gmdate);
            }
        } catch (\Exception $e) {
            // pass
        }
        
        if ($date > $this->scrapDate)
            $date = $this->scrapDate;
        
        return $date;
    }
    
    
    /**
     * Update the post for the given item or create a new one.
     *
     * @param Feed $feed                Feed the item belongs to
     * @param SimplePie_Item $item      Parsed feed item
     * @return Post $post               Updated post model or null
     */
    private function updatePost(Feed $feed, $item) {
        $post = null;
        $guid = trim($item->get_id());
        $hash = md5(serialize($item->data));
        $date = $this->getPublishDate($item);
        
        // Obtain the post if it is already published
        
        $query = Post::where('feed_id', $feed->id)->where('guid', $guid);
        $post = $query->withTrashed()->first();
        
        // Do not update the post if it did not change
        
        if (!is_null($post) && $hash === $post->md5_hash)
            return null;
        
        // Do not update the posts after if it was created long ago
        
        if (!is_null($post)) {
            $days = $post->created_at->diffInDays();
            
            if ($days > static::UPDATE_DAYS)
                return null;
        }
        
        // Do not create/update a post if the URL protocol is not valid
        // or its length is too large
        
        if (!$this->isValidURL($item->get_permalink())) {
            return null;
        }
        
        // Create a new post if no matching post was found
        
        if (is_null($post) === true) {
            $post = new Post();
        }
        
        // Fill the post attributes and save the post
        
        $post->guid = $guid;
        $post->md5_hash = $hash;
        $post->published_at = $date;
        $post->feed_id = $feed->id;
        $post->author_id = $feed->author_id;
        $post->url = $item->get_permalink();
        $post->title = $this->getTitle($item);
        $post->excerpt = $this->getExcerpt($item);
        $post->content = $this->getContent($item);
        $post->image_url = $this->getImageURL($item);
        
        $post->save();
        
        return $post;
    }
    
    
    /**
     * Sync the post tags with those provided on the given item.
     *
     * @param Post $post                Post to which to attach the tags
     * @param SimplePie_Item $item      Parsed feed item for the post
     */
    private function updateTags(Post $post, $item) {
        $labels = $this->getLabels($item);
        
        if (empty($labels) === true)
            return $post;
        
        $query = Tag::withTrashed()->whereIn('name', $labels);
        $tags = $query->select('id', 'name')->get();
        
        $labels->each(function ($label) use ($tags) {
            if ($tags->contains('name', $label) === false) {
                $tag = Tag::create(['name' => $label]);
                $tags->push($tag);
            }
        });
        
        $post->tags()->sync($tags);
        
        return $post;
    }
    
    
    /**
     * Update the feed object with the response data received.
     *
     * @param Feed $feed            Feed object ot update
     * @param Response $response    Server response
     *
     * @return boolean              True if the feed was saved
     */
    private function updateFeed(Feed $feed, $response) {
        if ($response->hasHeader('ETag')) {
            $etag = $response->getHeader('ETag')[0];
            $feed->setAttribute('etag', $etag);
        }
        
        $feed->setAttribute('modified_at', $this->scrapDate);
        
        if ($response->hasHeader('Last-Modified')) {
            $modified = $response->getHeader('Last-Modified')[0];
            
            try {
                $date = Carbon::createFromFormat(static::RFC7231, $modified);
                $feed->setAttribute('modified_at', $date);
            } catch (\Exception $e) {
                $feed->setAttribute('modified_at', Carbon::now());
            }
        }
        
        return $feed->save();
    }
    
    
    /**
     * Read the response body up to a maximum of FEED_SIZE kilobytes
     * and returns it as a string.
     *
     * @param Response $response        HTTP response object
     * @return string                   Response body
     */
    private function readBody($response) {
        $content = '';
        $body = $response->getBody();
        $size = static::FEED_SIZE * 1024;
        
        while (!$body->eof()) {
            if (strlen($content) < $size) {
                $content .= $body->read(1024);
            } else {
                break;
            }
        }
        
        $body->close();
        
        return $content;
    }
}
