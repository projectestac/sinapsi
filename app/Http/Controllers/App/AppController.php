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
            $url = url("images/launch/$size.png");

            $icons[] = [
               "src" =>     "{$url}",
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


    /**
     * Applicaton environment manifest.
     */
    public function environment() {
        return [
            'name' => config('app.name'),
            'email' => config('mail.support.address'),
            'app_url' => config('app.url'),
            'api_url' => config('app.url'),
            'locales' => $this->locales(),
            'facebook_app_id' => config('app.facebook_app_id')
        ];
    }


    /**
     * Maps the application locales to a JSON array representation.
     */
    private function locales() {
        $locales = config('app.locales');

        return array_map(
            function($key, $value) {
                return ['code' => $key, 'name' => $value];
            },
            array_keys($locales),
            $locales
        );
    }

}
