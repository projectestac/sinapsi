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
        
    	$school = Entity::first();

		User::create ([
            'name'=>'Sinapsi',
            'nickname' =>'sinapsi',
            'entity_id' => $school->id,
            'email' => 'agora@xtec.cat',
            'avatar' => '',
            'role' =>'admin'
        ]);

        User::create ([
            'name'=>'Xavi Meler',
            'nickname' =>'jmeler',
            'entity_id' => $school->id,
            'email' => 'jmeler@xtec.cat',
            'avatar' => 'https://lh3.googleusercontent.com/-xsv0-7qtrMc/AAAAAAAAAAI/AAAAAAAAAAA/fevX2Yl5pxY/photo.jpg?sz=50',
            'role' =>'admin'
        ]);

        User::create ([
            'name'=>'Toni Ginard',
            'nickname' =>'aginard',
            'entity_id' => $school->id,
            'email' => 'aginard@xtec.cat',
            'avatar' => '',
            'role' =>'admin'
        ]);

        User::create ([
            'name'=>'Xavi Nieto',
            'nickname' =>'xnieto2',
            'entity_id' => $school->id,
            'email' => 'xnieto2@xtec.cat',
            'avatar' => '',
            'role' =>'admin'
        ]);

        User::create ([
            'name'=>'Sara Arjona',
            'nickname' =>'sarjona',
            'entity_id' => $school->id,
            'email' => 'sarjona@xtec.cat',
            'avatar' => '',
            'role' =>'admin'
        ]);

        User::create ([
            'name'=>'Monica Grau',
            'nickname' =>'mgrau226',
            'entity_id' => $school->id,
            'email' => 'mgrau226@xtec.cat',
            'avatar' => '',
            'role' =>'admin'
        ]);

        //factory(User::class)->times(10)->create();

    }
}
