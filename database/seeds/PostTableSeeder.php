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

        Post::create ([
            'title' => 'Sobre Sinapsi',
            'channel_id' => 1,
        ]);
        Post::create ([
            'title' => 'Cerca avançada',
            'channel_id' => 1,
        ]);

        /*for ($i=1; $i<=1000; $i++) {
            factory(Post::class)->times(1)->create(['id' => $i]);
        }*/

    }
}
