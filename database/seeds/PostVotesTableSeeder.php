<?php

use Illuminate\Database\Seeder;
use Sinapsi\PostVote;

class PostVotesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
		$faker = Faker\Factory::create();
		$user_ids = \DB::table('users')->select('id')->get();
		$post_ids = \DB::table('posts')->select('id')->get();

		for ($i=0; $i<300; $i++) {

        	$post_id = $faker->randomElement($post_ids)->id;
        	$user_id = $faker->randomElement($user_ids)->id;

	        PostVote::create([
	            'post_id' => $post_id,
	            'user_id' => $user_id
	        ]);

	    }

    }
}
