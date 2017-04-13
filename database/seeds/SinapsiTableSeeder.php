<?php

use Illuminate\Database\Seeder;
use Sinapsi\Sinapsi; 

class SinapsiTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        DB::statement('SET FOREIGN_KEY_CHECKS=0');
        Sinapsi::truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1');

        Sinapsi::create([
            'name'      => 'Treballs de recerca',
            'slug'      => 'treballs-de-recerca',
            'description'    => "El treball de recerca és un conjunt d'activitats estructurades i orientades a la investigació que realitza tot l'alumnat de batxillerat amb l'orientació i seguiment del professorat, per tal de consolidar la competència en recerca.",
            'type' => 'auto',
            'querystring' =>'q=treballs de recerca',
        ]);

        $imatges = Sinapsi::create([
            'name'      => "Galeria d'imatges",
            'slug'  => 'imatges',
            'postview'  => 'gallery',
            'description'    => "Recull d'imatges lliures amb temàtica escolar",
            'type' => 'manual',
            'querystring' =>'',
        ]);

                Sinapsi::create([
                    'name'      => "Il·lustracio",
                    'slug'  => 'il-lustracio',
                    'postview'  => 'gallery',
                    'description'    => "Recull d'il·lustracions lliures amb temàtica escolar",
                    'type' => 'manual',
                    'parent_id' => $imatges->id,
                    'querystring' =>'',
                ]);

                Sinapsi::create([
                    'name'      => "Senyalètica",
                    'slug'  => 'senyaletica',
                    'postview'  => 'gallery',
                    'description'    => "Recull d'icones lliures amb temàtica escolar",
                    'type' => 'manual',
                    'parent_id' => $imatges->id,
                    'querystring' =>'',
                ]);

                Sinapsi::create([
                    'name'      => "Fotografia",
                    'slug'  => 'fotografia',
                    'postview'  => 'gallery',
                    'description'    => "Recull de fotografies lliures amb temàtica escolar",
                    'type' => 'manual',
                    'parent_id' => $imatges->id,
                    'querystring' =>'',
                ]);

        Sinapsi::create([
            'name'      => 'Serveis educatius',
            'slug'  => 'serveis-educatius',
            'postview'  => 'medium-card',
            'description'    => 'Sinapsi dels serveis educatius',
            'type' => 'auto',
            'querystring' =>'',
        ]);


        $this->TAC();
        $this->Serveis();


    }

    public function TAC(){

        $tac = Sinapsi::create([
            'name'      => 'TAC',
            'slug'  => 'tac',
            'postview'  => 'medium-card',
            'description'    => "Tecnologia per l'aprenentage i el coneixement (Àgora Moodle, Nodes, Linkat, Robótica, Scratch, CodeWeek, Chromebooks ...",
            'type' => 'auto',
            'querystring' =>'q=linkat,chromebooks,nodes,scratch,codeweek,app inventor'
        ]);

        $programacio = Sinapsi::create([
            'name'      => 'Programació',
            'slug'  => 'programacio',
            'postview'  => 'medium-card',
            'description'    => 'Llenguatges de programació molt didàctics',
            'type' => 'auto',
            'querystring' =>'q=scratch,codeweek,app inventor',
            'parent_id' => $tac->id
        ]);

        $scratch = Sinapsi::create([
            'name'      => 'Scratch',
            'slug'  => 'scratch',
            'postview'  => 'medium-card',
            'description'    => 'Programació per a ments incipients',
            'type' => 'auto',
            'querystring' =>'q=scratch',
            'parent_id' => $programacio->id
        ]);

        $appinventor = Sinapsi::create([
            'name'      => 'App Inventor',
            'slug'  => 'app-inventor',
            'postview'  => 'medium-card',
            'description'    => "Programació d'aplicions per els mòbils",
            'type' => 'auto',
            'querystring' =>'q=app inventor, appinventor',
            'parent_id' => $programacio->id
        ]);

        $serveis = Sinapsi::create([
            'name'      => 'Serveis web i programari',
            'slug'  => 'serveis-i-programari',
            'postview'  => 'medium-card',
            'description'    => "Serveis web i programari per els centres educatius",
            'type' => 'auto',
            'querystring' =>'moodle,nodes,linkat',
            'parent_id' => $tac->id
        ]);

        $codeweek = Sinapsi::create([
            'name'      => 'CodeWeek',
            'slug'  => 'codeweek',
            'postview'  => 'medium-card',
            'description'    => 'La setmana de programació a tot Europa',
            'type' => 'auto',
            'querystring' =>'q=codeweek',
            'parent_id' => $tac->id
        ]);

        $robotica = Sinapsi::create([
            'name'      => 'Robòtica educativa',
            'slug'  => 'robótica',
            'postview'  => 'medium-card',
            'description'    => 'Sistema d’aprenentatge interdisciplinar que fa ús de robots com a fil conductor transversal per potenciar el desenvolupament d’habilitats i competències en l\'alumnat',
            'type' => 'auto',
            'querystring' =>'q=robotica,beebots,bee-boots',
            'parent_id' => $tac->id
        ]);

        Sinapsi::create([
            'name'      => 'Bee-bots',
            'slug'  => 'bee-bots',
            'postview'  => 'medium-card',
            'description'    => 'Educatiu i programable amb una intuitiva interficie per nens i nenes de 3 anys a 7 anys',
            'type' => 'auto',
            'querystring' =>'q=bee-boots,beebots',
            'parent_id' => $robotica->id
        ]);

    }

    public function Serveis(){

        $serveis = Sinapsi::where('slug','=','serveis-i-programari')->first();

        $agora = Sinapsi::create([
            'name'      => 'Àgora Moodle',
            'slug'  => 'agora',
            'postview'  => 'medium-card',
            'description'    => "L'aula virtual més utilitzada del món adaptada per els centres educatius",
            'type' => 'manual',
            'querystring' =>'q=moodle',
            'parent_id' => $serveis->id
        ]);

        $nodes = Sinapsi::create([
            'name'      => 'Nodes',
            'slug'  => 'nodes',
            'postview'  => 'medium-card',
            'description'    => "Plataforma que permet construir la web del teu centre",
            'type' => 'manual',
            'querystring' =>'q=nodes',
            'parent_id' => $serveis->id
        ]);

        $xtecblocs = Sinapsi::create([
            'name'      => 'XTEC Blocs',
            'slug'  => 'xtec-blocs',
            'postview'  => 'medium-card',
            'description'    => "Blogs",
            'type' => 'manual',
            'querystring' =>'',
            'parent_id' => $serveis->id
        ]);

        $linkat = Sinapsi::create([
            'name'      => 'Linkat',
            'slug'  => 'linkat',
            'postview'  => 'medium-card',
            'description'    => "Linux per els centres educatius de Catalunya",
            'type' => 'auto',
            'querystring' =>'q=linkat',                 
            'parent_id' => $serveis->id
        ]);

        $jclic = Sinapsi::create([
            'name'      => 'JClic',
            'slug'  => 'jclic',
            'postview'  => 'medium-card',
            'description'    => "Entorn per a la creació, realització i avaluació d'activitats educatives multimèdia, ara també en HTML5!. Molts educadors i educadores l'han fet servir per crear activitat
            s interactives on es treballen aspectes procedimentals de diverses àrees del currículum, des d'educació infantil fins a secundària.",
            'type' => 'auto',
            'querystring' =>'q=jclic',
            'parent_id' => $serveis->id
        ]);


    }

}

