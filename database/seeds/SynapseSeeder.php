<?php

use Illuminate\Database\Seeder;
use App\Models\Synapse;


class SynapseSeeder extends Seeder {
    
    
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run() {
        Synapse::forceCreate([
            'id' => 1,
            'slug' => Synapse::GENERAL_SLUG,
            'name' => 'General',
            'description' => 'Home page synapse.',
            'type' => 'synapses'
        ]);
    }

}
