<?php

use Illuminate\Database\Seeder;
use Sinapsi\Channel;
use Sinapsi\Entity;

class EntityTableSeeder extends Seeder
{

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        Entity::create([
            "id" => 1,
            "codeid" =>"08000098",
            "name" => "Escola Bertí",
            "slug" => "ceipberti",
            "naturalesa" => "Públic",
            "titularitat" => "Dep.Ensenyament",
            "address" => "Antic camí de Caldes, s/n",
            "cp" => "08480",
            "phone" => "938 432 778",
            "fax" => "938 432 778",
            "delegacio" => "Maresme - Vallès Oriental",
            "comarca" => "Vallès Oriental",
            "municipi" => "L'Ametlla del Vallès",
            "geo_x" => "2.260109509",
            "geo_y" => "41.666360883",
            "nivells" => "EINF2C EPRI",
            "email" => "a8000098@xtec.cat",
            "web" => "//agora.xtec.cat/ceipberti",
            "type" => "Escola",
            "parent_id" => '1',
        ]);

        Entity::create([
            "id" => 2,
            "codeid" =>"08000165",
            "name" => "Escola Sant Martí",
            "slug" => "escolasantmarti",
            "naturalesa" => "Públic",
            "titularitat" => "Dep.Ensenyament",
            "address" => "C. Generalitat, 2",
            "cp" => "08358",
            "phone" => "937 938 070",
            "fax" => "937 938 070",
            "delegacio" => "Maresme - Vallès Oriental",
            "comarca" => "Maresme",
            "municipi" => "Arenys de Munt",
            "geo_x" => "2.53853995",
            "geo_y" => "41.609034581",
            "nivells" => "EINF2C EPRI",
            "email" => "a8000165@xtec.cat",
            "web" => "//agora.xtec.cat/escolasantmarti",
            "type" => "Escola",
            "parent_id" => '2',
        ]);

        Entity::create([
            "id" => 3,
            "codeid" =>"08000323",
            "name" => "Escola Barnola",
            "slug" => "esc-barnola",
            "naturalesa" => "Públic",
            "titularitat" => "Dep.Ensenyament",
            "address" => "C. Indústria, 6",
            "cp" => "08279",
            "phone" => "938 387 279",
            "fax" => "938 387 279",
            "delegacio" => "Catalunya Central",
            "comarca" => "Bages",
            "municipi" => "Avinyó",
            "geo_x" => "1.972696125",
            "geo_y" => "41.865753898",
            "nivells" => "EINF2C EPRI",
            "email" => "a8000323@xtec.cat",
            "web" => "//agora.xtec.cat/esc-barnola",
            "type" => "Escola",
            "parent_id" => '3',
        ]);

        Entity::create([
            "id" => 4,
            "codeid" =>"08001421",
            "name" => "Institut La Pineda",
            "slug" => "ieslapineda",
            "naturalesa" => "Públic",
            "titularitat" => "Dep.Ensenyament",
            "address" => "C. de la Batlloria, s/n",
            "cp" => "08917",
            "phone" => "933 990 511",
            "fax" => "933 835 709",
            "delegacio" => "Barcelona Comarques",
            "comarca" => "Barcelonès",
            "municipi" => "Badalona",
            "geo_x" => "2.237943855",
            "geo_y" => "41.452973377",
            "nivells" => "ESO BATX CFPM AA02 CFPS PFI",
            "email" => "a8001421@xtec.cat",
            "web" => "//agora.xtec.cat/ieslapineda",
            "type" => "Institut",
            "parent_id" => '4',
        ]);

        Entity::create([
            "id" => 5,
            "codeid" =>"08002071",
            "name" => "Escola Gayarre",
            "slug" => "ceip-gayarre",
            "naturalesa" => "Públic",
            "titularitat" => "Dep.Ensenyament",
            "address" => "C. Gayarre, 54-56",
            "cp" => "08014",
            "phone" => "934 211 350",
            "fax" => "937 938 070",
            "delegacio" => "Consorci d'Educació de Barcelona",
            "comarca" => "Barcelona",
            "municipi" => "Arenys de Munt",
            "geo_x" => "2.140310077",
            "geo_y" => "41.373325921",
            "nivells" => "EINF2C EPRI",
            "email" => "a8002071@xtec.cat",
            "web" => "//agora.xtec.cat/ceip-gayarre",
            "type" => "Escola",
            "parent_id" => '5',
        ]);

        
    
    }
}

