<?php

namespace App\Http\Controllers\Auth;

use Auth;
use Socialite;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

use App\User;
use App\Http\Controllers\Controller;


/**
 * Account authentication controller.
 */
class AccountController extends Controller {
    
    /**
     * Display the authenticated user resource.
     *
     * @return Response         Response object
     */
    public function profile() {
        if (Auth::check() === false) {
            abort(404, 'Not Found');
        }
        
        $profile = Auth::user()
            ->makeVisible('email')
            ->makeHidden('deleted_at')
            ->cards()->with('author')
            ->first();
        
        return $profile->makeVisible('email');
    }
    
    
    /**
     * Logs the user out of the application.
     *
     * @param Request  $request
     * @return Response
     */
    public function logout() {
        Auth::logout();
        
        return ['success' => 'User logged out'];
    }
    
    
    /**
     * Authenticates a user with a Google access token.
     *
     * @param Request
     */
    public function login(Request $request) {
        $token = $request->bearerToken();
        
        if (is_null($token)) {
            abort(401, 'No token was provided');
        }
        
        Auth::logout();
        
        try {
            $driver = Socialite::driver('google');
            $socialUser = $driver->userFromToken($token);
            $user = $this->register($socialUser);
            
            if (!is_null($user)) {
                Auth::login($user, true);
            }
        } catch (\Exception $e) {
            abort(401, 'Unauthorized');
        }
        
        return ['id' => $user->id];
    }
    
    
    /**
     * Redirect the user to the Google OAuth Provider.
     *
     * @return Response
     */
    public function redirectToProvider() {
        $driver = Socialite::driver('google');
        
        $driver->scopes(['openid', 'profile']);
        $domain = config('services.google.domain');
        
        if (!empty($domain)) {
            $driver->with([
                'hd' => $domain,
                'prompt' => 'select_account'
            ]);
        } else {
            $driver->with([
                'prompt' => 'select_account'
            ]);
        }
        
        return $driver->redirect();
    }
    
    
    /**
     * Authenticate with the Google OAuth provider.
     *
     * @return Response
     */
    public function handleProviderCallback() {
        try {
            $socialUser = Socialite::driver('google')->user();
            $user = $this->register($socialUser);
            
            if (!is_null($user)) {
                Auth::login($user, true);
            }
        } catch (\Exception $e) {
            abort(401, 'Unauthorized');
        }
    }
    
    
    /**
     * Register the user into the application.
     *
     * This method updates/creates the user associated with the social
     * provider and returns it.
     *
     * @param User $socialUser      Socialite user
     * @return User                 User object
     */
    private function register($socialUser) {
        $uid = $socialUser->getId();
        
        $user = User::withTrashed()
            ->where('provider_uid', $uid)
            ->first();
        
        if (is_null($user)) {
            $user = User::forceCreate([
                'name' => $socialUser->getName(),
                'email' => $socialUser->getEmail(),
                'avatar_url' => $socialUser->getAvatar(),
                'provider_uid' => $socialUser->getId(),
                'provider_token' => $socialUser->token,
                'password' => bcrypt(uniqid())
            ]);
        } else {
            if ($user->trashed()) {
                $user->restore();
            }
            
            $user->update([
                'name' => $socialUser->getName(),
                'avatar_url' => $socialUser->getAvatar(),
                'provider_token' => $socialUser->token
            ]);
        }
        
        return $user;
    }
}
