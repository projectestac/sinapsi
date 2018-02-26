<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class Role {

    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure $next
     * @param  string $roles        User roles
     * @return mixed
     */
    public function handle($request, Closure $next, ...$roles) {
        if (Auth::check() === false) {
            abort(401, 'Unauthorized');
        }
        
        if (in_array(Auth::user()->role, $roles) === false) {
            abort(403, 'Forbidden');
        }
        
        return $next($request);
    }
}
