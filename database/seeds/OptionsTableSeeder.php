<?php

use Illuminate\Database\Seeder;
use Sinapsi\Options; 

class OptionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Options::create([
            'scope'  => 'global',
            'option' => 'logo',
            'value'  => '',
        ]);

        Options::create([
            'scope'  => 'global',
            'option' => 'description',
            'value'  => 'Suspendisse sed urna tristique, feugiat neque non, consequat ante. Ut in ultrices leo, ut tempus ante. Fusce varius non libero non tristique. Phasellus eu faucibus felis. Maecenas ornare a urna non lobortis. Sed id suscipit ligula, quis hendrerit turpis',
        ]);

        Options::create([
            'scope'  => 'sinapsi',
            'scope_info' => 1,
            'option' => 'sticky',
            'post_id' => 1 
        ]);



    }
}
