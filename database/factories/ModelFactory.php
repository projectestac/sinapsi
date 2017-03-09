<?php

/*
|--------------------------------------------------------------------------
| User
|--------------------------------------------------------------------------
*/
$factory->define(Sinapsi\User::class, function (Faker\Generator $faker) {

    $school_ids = \DB::table('entities')->select('id')->get()->toArray();
    $school_id = $faker->randomElement($school_ids)->id;
    $name = $faker->name;

    return [
        'name' => $name,
        'nickname' => $name,
        'avatar' => 'https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg?sz=50',
        'role' => 'subscriptor',
        'email' => $faker->safeEmail,
        'entity_id' => $school_id,
        'remember_token' => str_random(10),
    ];
});

/*
|--------------------------------------------------------------------------
| Post
|--------------------------------------------------------------------------
*/

$factory->define(Sinapsi\Post::class, function (Faker\Generator $faker, $params) {

    return [
        'title' => $faker->sentence($nbWords = 6, $variableNbWords = true),
        'link' => 'post/' . $params['id'],
        'description' => $faker->paragraph($nbSentences = 2),
        'content' => '<img src="' . $faker->imageUrl($width = 640, $height = 480) . '"><br>' . $faker->paragraph($nbSentences = 5),
        //'content' => $faker->paragraph($nbSentences = 5),
        'thumb' => url('/storage/public/fakerimages/') . rand(1, 16) . '.jpg',
        'channel_id' => rand(1, 1000),
        'pub_date' => time()
        //'tags' => implode(",",$faker->words($nb = 3))
    ];

});

/*
|--------------------------------------------------------------------------
| Tag
|--------------------------------------------------------------------------
*/

$factory->define(Sinapsi\Tag::class, function (Faker\Generator $faker) {

    $tag = $faker->word . rand(1, 100000);
    echo $tag . "<br>";

    return [
        'name' => $tag,
        'description' => $faker->sentence($nbWords = 60, $variableNbWords = true),
        'slug' => $tag,
    ];

});


/*
|--------------------------------------------------------------------------
| PostTag
|--------------------------------------------------------------------------
*/
/*
$factory->define(Sinapsi\PostTag::class, function (Faker\Generator $faker) {

    return [
        'post_id' => rand(1,20000),
        'tag_id' => rand(1,1000),
    ];

});
*/
