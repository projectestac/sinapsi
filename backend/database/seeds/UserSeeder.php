<?php

use Illuminate\Database\Seeder;
use App\User;


class UserSeeder extends Seeder {
    
    
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run() {
        User::forceCreate([
            'id' => 1,
            'email' => 'admin@example.org',
            'name' => 'Administrator',
            'role' => 'admin',
            'provider_uid' => 'unknown',
            'provider_token' => 'unknown',
            'password' => bcrypt(uniqid())
        ]);
        
        $user = App\User::find(1);
        $user->synapses()->attach(1);
    }

}
