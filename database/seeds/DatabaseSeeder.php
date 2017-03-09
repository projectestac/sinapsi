<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->call(EntityTableSeeder::class);
        //$this->call(UsersTableSeeder::class);
        //$this->call(SinapsiTableSeeder::class);
        $this->call(ChannelTableSeeder::class);
        //$this->call(OptionsTableSeeder::class);
        //$this->call(TagTableSeeder::class);
        //$this->call(PostTableSeeder::class);
        //$this->call(BlockTableSeeder::class);
        $this->call(TagAliasTableSeeder::class);
        //$this->call(PostTagTableSeeder::class);
    }

}
