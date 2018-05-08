<?php

namespace App\Http\Controllers\App;

use App;
use Response;
use App\Http\Controllers\Controller;
use Illuminate\Filesystem\Filesystem;


/**
 * Application controller.
 */
class AppController extends Controller {
    
    
    /**
     * Debug web route.
     */
    public function debug() {
        return view('debug');
    }
    
    
    /**
     * Web app manifest.
     */
    public function manifest() {
        $filesystem = App::make(Filesystem::class);
        $iconsPath = public_path('images/launch/');
        $iconFiles = $filesystem->glob("$iconsPath/*.png");
        
        // Obtain all the icons for the application
        
        $icons = [];
        
        foreach ($iconFiles as $path) {
            $size = $filesystem->name($path);
            
            $icons[] = [
               "src" =>     "/images/launch/$size.png",
               "sizes" =>   "{$size}x{$size}",
               "type" =>    "image/png"
            ];
        }
        
        // Return the web application manifest
        
        $manifest = [
            "display" =>            "standalone",
            "short_name" =>         config('app.name'),
            "name" =>               config('app.name'),
            "start_url" =>          config('app.url'),
            "theme_color" =>        config('app.theme_color'),
            "background_color" =>   config('app.background_color'),
            "icons" =>              [ $icons ]
        ];
        
        return Response::json($manifest);
    }

}
