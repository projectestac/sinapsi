<?php

use Illuminate\Database\Seeder;
use Sinapsi\TagAlias;

class TagAliasTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        TagAlias::create([
            'slug' => '(noticies|blo[cg])*d*e*-*eso$',
            'name_alias' => "ESO",
            'slug_alias' => 'eso',
        ]);

        TagAlias::create([
            'slug' => '(1e*r*[a-f]*|primer)-*d*-*eso|eso-*1[a-f]*',
            'name_alias' => "1r d'ESO",
            'slug_alias' => 'eso-1',
        ]);

        TagAlias::create([
            'slug' => '(2o*n*[a-f]*|segon)-*d*-*eso|eso-*2[a-f]*',
            'name_alias' => "2n d'ESO",
            'slug_alias' => 'eso-2',
        ]);

        TagAlias::create([
            'slug' => '(3e*r*[a-f]*|tercer)-*d*-*eso|eso-*3[a-f]*',
            'name_alias' => "3r d'ESO",
            'slug_alias' => 'eso-3',

        ]);

        TagAlias::create([
            'slug' => '(4t*[a-f]*|quart)-*d*-*eso|eso-*4[a-f]*',
            'name_alias' => "4t d'ESO",
            'slug_alias' => 'eso-4',
        ]);



        TagAlias::create([
            'slug' => '1*-*bat(x|xi|xillerat)*-1*[a-f]*',
            'name_alias' => "Primer de batxillerat",
            'slug_alias' => 'batxillerat-1',
        ]);

        TagAlias::create([
            'slug' => '2*-*bat(x|xi|xillerat)*-2*[a-f]*',
            'name_alias' => "Segon de batxillerat",
            'slug_alias' => 'batxillerat-2',
        ]);

        TagAlias::create([
            'slug' => 'setmana-*(de)*-*(la)*-ciencia',
            'name_alias' => "Setmana de la ciència",
            'slug_alias' => 'setmana-de-la-ciencia',
        ]);

        TagAlias::create([
            'slug' => '^alumn(es|at)$',
            'name_alias' => "Alumnat",
            'slug_alias' => 'alumnat',
        ]);

        TagAlias::create([
            'slug' => '^act(a|es|as)$',
            'name_alias' => "Actes",
            'slug_alias' => 'actes',
        ]);

        TagAlias::create([
            'slug' => '^comm*iss*ion*s*$',
            'name_alias' => "Comissions",
            'slug_alias' => 'comissions',
        ]);


        TagAlias::create([
            'slug' => 'sant*-jordi',
            'name_alias' => "Sant Jordi",
            'slug_alias' => 'sant-jordi',
        ]);

        TagAlias::create([
            'slug' => '(classe)*-*(de)*-*(1e*r*|primer)',
            'name_alias' => "Primer de primària",
            'slug_alias' => 'primer',
        ]);

        TagAlias::create([
            'slug' => '(classe)*-*(de)*-*(2o*n*|segon)',
            'name_alias' => "Segon de primària",
            'slug_alias' => 'segon',
        ]);

        TagAlias::create([
            'slug' => '(classe)*-*(de)*-*(3e*r*|tercer)',
            'name_alias' => "Tercer de primària",
            'slug_alias' => 'tercer',
        ]);

        TagAlias::create([
            'slug' => '(classe)*-*(de)*-*(4t*|quart)',
            'name_alias' => "Quart de primària",
            'slug_alias' => 'quart',
        ]);

        TagAlias::create([
            'slug' => '(classe)*-*(de)*-*(5e*|cinque)',
            'name_alias' => "Cinquè de primària",
            'slug_alias' => 'cinque',
        ]);

        TagAlias::create([
            'slug' => '(classe)*-*(de)*-*(6e*|sise)',
            'name_alias' => "Sise de primària",
            'slug_alias' => 'sise',
        ]);

        TagAlias::create([
            'slug' => '((treball)s*-*(de)*-recerca|tdr)',
            'name_alias' => "Treballs de recerca",
            'slug_alias' => 'treballs-de-recerca',
        ]);

        TagAlias::create([
            'slug' => 'consell-*escolar',
            'name_alias' => "Consell escolar",
            'slug_alias' => 'consell-escolar',
        ]);

        TagAlias::create([
            'slug' => '^concurs(os)*$',
            'name_alias' => "Concursos",
            'slug_alias' => 'concursos',
        ]);

        TagAlias::create([
            'slug' => '^(cicles-*(formatius)|fp|ccff)',
            'name_alias' => 'Cicles formatius',
            'slug_alias' => 'cicles-formatius',
        ]);

        TagAlias::create([
            'slug' => 'projecte*s*',
            'name_alias' => 'Projectes',
            'slug_alias' => 'projectes',
        ]);

    }

}
