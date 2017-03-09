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
    
       //Schools
       for ($i=120; $i<=1110; $i++) {

            $school_codename = \DB::table('entities')
                    ->where('id',$i)
                    ->first()->codename;

            Channel::create([
                'type'=>'Entity',
                'obj_id'=>$i,
                'rss'=>'https://agora.xtec.cat/'.$school_codename.'/feed',
                'active'=>true,
                ]);
        }

        //SEZ
        $sezs = Entity::where('type','SEZ')->get();

        foreach ($sezs as $sez) {

            $url = ltrim($sez->codename,"se-");

            Channel::create([
                'type'=>'Entity',
                'obj_id'=>$sez->id,
                'rss'=> 'https://serveiseducatius.xtec.cat/'.$url.'/feed',
                'active'=>true,
            ]);
        }

        //CREDAS

        $credas = Entity::where('type','CREDA')->get();

        foreach ($credas as $creda) {
            Channel::create([
                'type'=>'Entity',
                'obj_id'=>$creda->id,
                'rss'=> $creda->url.'/feed',
                'active'=>true,
            ]);
        }



    }
}
