<?php

namespace App\Http\Controllers\Atom;

use FeedWriter\ATOM;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

use App\Models\Post;
use App\Models\Synapse;
use App\Models\Tag;
use App\Http\Controllers\Controller;


/**
 * Syndication controller.
 */
class SyndicationController extends Controller {
    
    
    /**
     * Display an ATOM feed for a synapse.
     *
     * @return Response         Response object
     */
    public function synapseIndex($slug) {
        $synapse = Synapse::whereSlug($slug)->first();
        
        if (is_null($synapse))
            abort(404, 'Not Found');
        
        return $this->createSynapseFeed($synapse);
    }
    
    
    /**
     * Display an ATOM feed for a tag.
     *
     * @return Response         Response object
     */
    public function tagIndex($slug) {
        $tag = Tag::whereSlug($slug)
            ->with('synapse')->first();
        
        if (is_null($tag))
            abort(404, 'Not Found');
        
        return is_null($tag->synapse) ?
            $this->createTagFeed($tag) :
            $this->createSynapseFeed($tag->synapse);
    }
    
    
    /**
     * Returns an ATOM feed response for a synapse.
     *
     * @param Synapse $synapse      Synapse object
     * @return Response             HTTP Response
     */
    private function createSynapseFeed($synapse) {
        $feed = new ATOM();
        
        $feed->setEncoding('utf-8');
        $feed->setTitle($synapse->name);
        $feed->setDescription($synapse->description);
        $feed->setLink(url("{$synapse->type}/{$synapse->slug}"));
        $this->appendItems($feed, Post::forSynapse($synapse));
        
        $content = $feed->generateFeed();
        $mime = $feed->getMIMEType();
        $response = response($content, 200);
        $response->header('Content-Type', "$mime; charset=utf-8");
        
        return $response;
    }
    
    
    /**
     * Returns an ATOM feed response for a tag.
     *
     * @param Tag $tag              Tag object
     * @return Response             HTTP Response
     */
    private function createTagFeed($tag) {
        $feed = new ATOM();
        
        $feed->setEncoding('utf-8');
        $feed->setTitle("#{$tag->name}");
        $feed->setLink(url("tags/{$tag->slug}"));
        $this->appendItems($feed, Post::forTag($tag));
        
        $content = $feed->generateFeed();
        $mime = $feed->getMIMEType();
        $response = response($content, 200);
        $response->header('Content-Type', "$mime; charset=utf-8");
        
        return $response;
    }
    
    
    /**
     * Append post items to an ATOM feed.
     *
     * @param ATOM $feed        ATOM feed
     * @param $query            Posts query
     */
    private function appendItems($feed, $query) {
        $query->orderBy('published_at', 'desc');
        $query->with('author')->limit(50);
        
        foreach ($query->get() as $post) {
            $item = $feed->createNewItem();
            
            $item->setTitle($post->title);
            $item->setLink($post->url);
            $item->setDate($post->published_at);
            $item->setAuthor($post->author->name);
            $item->setDescription($post->excerpt);
            $item->setContent($post->content);
            
            $feed->addItem($item);
        }
    }

}
