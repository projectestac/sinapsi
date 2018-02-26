<?php

namespace App\Models\Traits;


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

}
