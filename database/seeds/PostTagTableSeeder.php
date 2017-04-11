<?php

use Illuminate\Database\Seeder;
use Sinapsi\PostTag;

class PostTagTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i=1; $i<=2000 ;$i++) {
            PostTag::create([
                'post_id' => $i,
                'tag_id' => rand(1,1000)
            ]);
        }
    }
}
