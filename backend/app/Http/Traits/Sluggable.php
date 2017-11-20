<?php

namespace App\Http\Traits;


/**
 * Block controller.
 */
trait Sluggable {
    
    /**
     * Generates a new slug for the model on creation if no slug was
     * provided. It makes sure the slug is unique by suffixin an integer
     * after the slug.
     */
    public static function boot() {
        parent::boot();
        
        static::creating(function($model) {
            if (empty($model->slug)) {
                $base = str_slug($model->name);
                $slug = $base; $suffix = 1;
                
                while (static::where('slug', $slug)->exists()) {
                    $slug = "$base-" . (++$suffix);
                }
                
                $model->slug = $slug;
            }
        });
    }
}
