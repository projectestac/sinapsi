<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

class DatabaseSeeder extends Seeder {
    
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run() {
        Model::unguard();
        
        $this->call(SynapseSeeder::class);
        $this->call(UserSeeder::class);
        
        Model::reguard();
    }

}
