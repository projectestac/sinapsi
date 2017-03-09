<?php

namespace Sinapsi\Http\Controllers\Auth;

use Sinapsi\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Socialite;
use Sinapsi\User;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest', ['except' => 'logout']);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return User
     */
    protected function create($google_user)
    {
        $domain = explode("@", $google_user->getEmail())[1];
        if ($domain!='xtec.cat') {
            abort('errors/user_not_auth');
        }

        return User::create([
            'name'     => $google_user->getName(),
            'nickname' => explode("@", $google_user->getEmail())[0],
            'avatar'   => $google_user->getAvatar(),
            'role'     => 'subscriptor',
            'school_id'=> 1,
            'email'    => $google_user->getEmail()
        ]);
    }

    /**
     * Redirect the user to the Google authentication page.
     *
     * @return Response
     */
    public function redirectToProvider()
    {
        return Socialite::driver('google')->redirect();
    }

    /**
     * Obtain the user information from Google.
     *
     * @return Response
     */
    public function handleProviderCallback()
    {
        $google_user = Socialite::driver('google')->user();

        $user = User::where('email', $google_user->getEmail())->first();
        if (! $user) {
            $user = $this->create($google_user);
        }
        auth()->login($user);

        return "<script>window.opener.location.reload();setTimeout(function() {window.close();},2000)</script>";
    }

    public function logout(Request $request)
    {
        $this->guard()->logout();
        $request->session()->flush();
        $request->session()->regenerate();
        return back();
    }
}
