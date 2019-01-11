<?php

namespace App\Jobs;

use SimplePie_Sanitize;


/**
 * Extends the SimplePie's sanitizer class.
 */
class FeedSanitizer extends SimplePie_Sanitize {

    /**
     * {@inheritDoc}
     */
	public function replace_urls($document, $tag, $attributes) {
	    parent::replace_urls($document, $tag, $attributes);

	    if ($tag === 'img') {
	        $images = $document->getElementsByTagName('img');
	        $this->_santize_image_urls($images);
		}
	}


	/**
	 * Sanitize the given image elements.
	 *
	 * @param array $images    Image elements
	 */
	private function _santize_image_urls($images) {
        foreach ($images as $image) {
            if ($image->hasAttribute('src')){
                $src = $image->getAttribute('src');
                $url = $this->_strip_protocol($src);
                $image->setAttribute('src', $url);
            }
        }
	}


	/**
	 * Strips the HTTP protocol from an URL making it a protocol
	 * relative URL. This method only strips the protocol if it is
	 * http://; all other protocols are kept intact.
	 *
	 * @param string $url        Url to strip
	 */
	private function _strip_protocol($url) {
	    return preg_replace('/^\s*http:\/\//', '//', $url);
	}

}
