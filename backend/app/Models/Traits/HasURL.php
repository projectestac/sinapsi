<?php

namespace App\Models\Traits;

use Illuminate\Http\Request;


/**
 * Provides accessors and mutators to encode/decode URLs attributes
 * according to RFC 3986. This makes sure that the stored URLs are unique
 * and contain only ASCII characters.
 */
trait HasURL {
    
    
    /**
     * URL attribute accessor.
     */
    public function getUrlAttribute($url) {
        return rawurldecode($url);
    }
    
    
    /**
     * URL attribute mutator.
     */
    public function setUrlAttribute($url) {
        $this->attributes['url'] = rawurlencode($url);
    }
    
    
    /**
     * Mutate the URLs found on the requests so they can be used
     * for filtering.
     *
     * @param $request      Request to mutate
     */
    public static function mutateURLs(Request $request) {
        $keys = ['url', 'has-url', 'max-url', 'min-url'];
        
        foreach ($keys as $key) {
            if ($request->has($key)) {
                $value = rawurlencode($request->get($key));
                $request->merge([$key => $value]);
            }
        }
    }

}
