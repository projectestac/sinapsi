<?php

use Illuminate\Database\Seeder;

class TagTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $subjects = factory(Sinapsi\Tag::class, 10000)->make();

        foreach ($subjects as $subject) {
            repeat:
            try {
                $subject->save();
            } catch (\Illuminate\Database\QueryException $e) {
                echo "Duplicate!";
                $subject = factory(Sinapsi\Tag::class)->make();
                goto repeat;
            }
        }

    }
}
