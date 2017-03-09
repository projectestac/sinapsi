<?php

use Illuminate\Database\Seeder;
use Sinapsi\Block; 
use Sinapsi\Sinapsi; 

class BlockTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        Block::truncate();


        Block::create([
            'type'      => 'basic-color',
            'title'      => 'La castanyada',
            'content'    => "Celebrem la castanyada! I halloween! ",
            'options'   =>'{"color":"gris","url":"?q=castanyada,halloween"}',
            'scope' => 'home',
            'scope_id' => 0,
            'order' =>'1',
        ]);
        
        Block::create([
            'type'      => 'basic-color',
            'title'      => "Galeria d'imatges",
            'content'    => "Il·lustracions, fotografies i icones lliures amb temàtica escolar",
            'options'   =>'{"color":"taronja","url":"imatges"}',
            'scope' => 'home',
            'scope_id' => 0,
            'order' =>'3',
        ]);

        Block::create([
            'type'      => 'basic-color',
            'title'      => 'Codeweek',
            'content'    => "Setmana europea de la programació als centres educatius.",
            'options'   =>'{"color":"vermell","url":"codeweek"}',
            'scope' => 'home',
            'scope_id' => 0,
            'order' =>'4',
        ]);

        Block::create([
            'type'      => 'basic-color',
            'title'      => 'Catskills',
            'content'    => "Campionat de Catalunya de formació professional on els alumnes d'ensenyaments professionals competeixen en 29 oficis relacionats amb els estudis que estan cursant.",
            'options'   =>'{"color":"bgRed","url":"catskills"}',
            'scope' => 'home',
            'scope_id' => 0,
            'order' =>'4',
        ]);

        Block::create([
            'type'      => 'basic-color',
            'title'      => 'Motxilla bioclimàtica',
            'content'    => "Un programa educatiu que pretén exercitar-te en l’estudi i anàlisis bioclimàtic de la teva aula",
            'options'   =>'{"color":"negre","url":"motxilla-bioclimatica"}',
            'scope' => 'home',
            'scope_id' => 0,
            'order' =>'5',
        ]);

        $se = Sinapsi::where('slug','serveis-educatius')->first();

        Block::create([
            'type'      => 'basic-color',
            'title'      => 'Bloc nou 1',
            'content'    => "Lorem ipsum",
            'options'   =>'{"color":"verd3","url":"http://"}',
            'scope' => 'sinapsi',
            'scope_id' => $se->id,
            'order' =>'1',
        ]);

        $tac = Sinapsi::where('slug','tac')->first();

        Block::create([
            'type'      => 'basic-color',
            'title'      => 'Programació',
            'content'    => "Scratch, AppInventor i més...",
            'options'   =>'{"color":"taronja","url":"programacio"}',
            'scope' => 'sinapsi',
            'scope_id' => $tac->id,
            'order' =>'1',
        ]);

        Block::create([
            'type'      => 'basic-color',
            'title'      => 'Codeweek',
            'content'    => "La setmana de programació a tota Europa",
            'options'   =>'{"color":"blau_s","url":"codeweek"}',
            'scope' => 'sinapsi',
            'scope_id' => $tac->id,
            'order' =>'2',
        ]);

        Block::create([
            'type'      => 'basic-color',
            'title'      => 'Edumet',
            'content'    => "Meteorologia a les aules",
            'options'   =>'{"color":"blau","url":"edumet"}',
            'scope' => 'sinapsi',
            'scope_id' => $tac->id,
            'order' =>'3',
        ]);

        Block::create([
            'type'      => 'basic-color',
            'title'      => 'Serveis web i programari',
            'content'    => "Tot el que necessita un centre educatiu",
            'options'   =>'{"color":"vermell","url":"serveis-i-programari"}',
            'scope' => 'sinapsi',
            'scope_id' => $tac->id,
            'order' =>'4',
        ]);

        $serveis= Sinapsi::where('slug','serveis-i-programari')->first();

        Block::create([
            'type'      => 'basic-color',
            'title'      => 'Àgora Moodle',
            'content'    => "L'aula virtual Moodle adaptada als centres educatius",
            'options'   =>'{"color":"vermell","url":"google-classroom"}',
            'scope' => 'sinapsi',
            'scope_id' => $serveis->id,
            'order' =>'1',
        ]);

        Block::create([
            'type'      => 'basic-color',
            'title'      => 'Nodes',
            'content'    => "Una web per el teu centre",
            'options'   =>'{"color":"negre","url":"nodes"}',
            'scope' => 'sinapsi',
            'scope_id' => $serveis->id,
            'order' =>'2',
        ]);

        Block::create([
            'type'      => 'basic-color',
            'title'      => 'Linkat',
            'content'    => "Linux per els centres educatius",
            'options'   =>'{"color":"taronja","url":"linkat"}',
            'scope' => 'sinapsi',
            'scope_id' => $serveis->id,
            'order' =>'3',
        ]);


        Block::create([
            'type'      => 'basic-color',
            'title'      => 'Google Classroom',
            'content'    => "L'aula virtual de Google",
            'options'   =>'{"color":"verd","url":"google-classroom"}',
            'scope' => 'sinapsi',
            'scope_id' => $serveis->id,
            'order' =>'3',
        ]);

        Block::create([
            'type'      => 'basic-color',
            'title'      => 'XTEC Blocs',
            'content'    => "Més de 40.000 blogs educatius",
            'options'   =>'{"color":"blau_s","url":"xtec-blocs"}',
            'scope' => 'sinapsi',
            'scope_id' => $serveis->id,
            'order' =>'4',
        ]);

        $imatges= Sinapsi::where('slug','imatges')->first();

        Block::create([
            'type'      => 'basic-color',
            'title'      => 'Il·lustració',
            'content'    => "Il·lustracions lliures amb temàtica escolar",
            'options'   =>'{"color":"blau_s","url":"il-lustracio"}',
            'scope' => 'sinapsi',
            'scope_id' => $imatges->id,
            'order' =>'10',
        ]);

        Block::create([
            'type'      => 'basic-color',
            'title'      => 'Fotografia',
            'content'    => "Fotografies lliures amb temàtica escolar",
            'options'   =>'{"color":"verd","url":"fotografia"}',
            'scope' => 'sinapsi',
            'scope_id' => $imatges->id,
            'order' =>'20',
        ]);

        Block::create([
            'type'      => 'basic-color',
            'title'      => 'Senyalètica',
            'content'    => "Icones i símbols lliures amb temàtica escolar",
            'options'   =>'{"color":"taronja","url":"senyaletica"}',
            'scope' => 'sinapsi',
            'scope_id' => $imatges->id,
            'order' =>'30',
        ]);

        Block::create([
            'type'      => 'basic-color',
            'title'      => 'Proposa una Sinapsi',
            'content'    => "",
            'options'   =>'{"color":"bgRed","url":"https://docs.google.com/a/xtec.cat/forms/d/1X07wcicSX4dfz_5Z1eyt3nN2TyQYVTW2vkWDIN92R78/"}',
            'scope' => 'sns-tags',
            'scope_id' => 0,
            'order' =>'10',
        ]);

        Block::create([
            'type'      => 'basic-color',
            'title'      => 'Imatges lliures',
            'content'    => 'Imatges que pots fer servir a la web del teu centre sense cap problema',
            'options'   =>'{"color":"blau_s","url":"imatges"}',
            'scope' => 'sns-tags',
            'scope_id' => 0,
            'order' =>'20',
        ]);

    }
}

