<?php

use Illuminate\Database\Seeder;
use Sinapsi\Channel;
use Sinapsi\Entity;

class ChannelTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
    

       //Sinapsi user, main editor 
       Channel::create([
                    'type'=>'User',
                    'obj_id'=>1,
                    'rss'=>'',
                    'active'=>true,
                    ]);
                

        $schools = Entity::all();

        foreach ($schools as $school) {

            if (!empty($school->slug) && str_contains($school->agora_services, "Nodes")){
                Channel::create([
                    'type'=>'Entity',
                    'obj_id'=>$school->id,
                    'rss'=>'http://agora.xtec.cat/'.$school->slug.'/feed',
                    'active'=>true,
                    ]);
                }
        }


       /*

       //Schools
        $schools = Entity::where('web','<>','')->whereNotIn('type',array('SEZ'))->get();

        foreach ($schools as $school) {
            Channel::create([
                'type'=>'Entity',
                'obj_id'=>$school->id,
                'rss'=>'http:'.$school->web.'/feed',
                'active'=>true,
                ]);
        }

        //SEZ
        $sezs = Entity::where('type','SEZ')->get();

        foreach ($sezs as $sez) {
            Channel::create([
                'type'=>'Entity',
                'obj_id'=>$sez->id,
                'rss'=> $sez->web.'/feed',
                'active'=>true,
            ]);
        }

        //CREDAS
        $credas = Entity::where('type','CREDA')->get();

        foreach ($credas as $creda) {
            Channel::create([
                'type'=>'Entity',
                'obj_id'=>$creda->id,
                'rss'=> $creda->web.'/feed',
                'active'=>true,
            ]);
        }

        */

    }

}
