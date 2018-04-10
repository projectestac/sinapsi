<?php

namespace App\Models\Traits;


/**
 * HasSlug trait.
 */
trait HasSlug {
    
    /**
     * Generates a new slug for the model on creation if no slug was
     * provided. It makes sure the slug is unique by suffixing the slug
     * with an integer value.
     */
    public static function boot() {
        parent::boot();
        
        static::creating(function($model) {
            if (empty($model->slug)) {
                $base = str_slug($model->name);
                $base = strlen($base) > 0 ? $base : 'void';
                
                $slug = $base;
                $suffix = 1;
                
                while (static::where('slug', $slug)->withTrashed()->exists()) {
                    if ($suffix >= 100) break;
                    $slug = "$base-" . (++$suffix);
                }
                
                $model->slug = $slug;
            }
        });
    }
}
