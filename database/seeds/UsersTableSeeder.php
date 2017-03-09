<?php

use Illuminate\Database\Seeder;
use Sinapsi\User;
use Sinapsi\Entity;

class UsersTableSeeder extends Seeder
{
     /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        
    	$school = Entity::where('name','Institut de Sabadell')->first();

		User::create ([
    		'name'=>'Xavi Meler',
    		'nickname' =>'jmeler',
    		'entity_id' => $school->id,
    		'email' => 'jmeler@xtec.cat',
            'avatar' => 'https://lh3.googleusercontent.com/-xsv0-7qtrMc/AAAAAAAAAAI/AAAAAAAAAAA/fevX2Yl5pxY/photo.jpg?sz=50',
            'role' =>'admin'
    	]);
        
        factory(User::class)->times(200)->create();

    }
}
