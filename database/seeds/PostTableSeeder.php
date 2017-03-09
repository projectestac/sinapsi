<?php

use Illuminate\Database\Seeder;
use Sinapsi\Post;

class PostTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i=1; $i<=180000; $i++) {
            factory(Post::class)->times(1)->create(['id' => $i]);
        }

    }
}
