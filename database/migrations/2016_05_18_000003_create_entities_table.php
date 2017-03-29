<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEntitiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('entities', function (Blueprint $table) {

            $table->engine = 'InnoDB';
            
            $table->increments('id');
            $table->string('codeid',8)->nullable(); //codi de centre
            $table->string('name',250);
            $table->string('slug',50)->nullable();
            $table->enum('naturalesa',['Públic','Privat']);
            $table->string('titularitat',50)->nullable();
            /*$table->enum('titularitat',
                ['Dep.Ensenyament','Cooperatives','Ordes i Cong.','Corp. Locals','Persones Físiq.',
                'Associacions','Fundacions','Estrangers','Soc. Mercantils', 'Església Catòl.', 'Alt. Titularit.', 'Jurídica Estra.',
                'Alt. Confesion.','Alt. estats UE','Alt. est. no UE','Altres Depart.','Soc. Civils','Alt. Ens Públ.',
                'No Informat','Person.Fís. Es.']);*/
            $table->string('address',500)->nullable();
            $table->string('cp',5)->nullable();
            $table->string('phone',50)->nullable();
            $table->string('fax',50)->nullable();
            $table->string('delegacio',50)->nullable();
            $table->string('comarca',50)->nullable();
            $table->string('municipi',50)->nullable();
            $table->string('utm_x',20)->nullable();
            $table->string('utm_y',20)->nullable();
            $table->string('geo_x',20)->nullable();
            $table->string('geo_y',20)->nullable();
            $table->string('nivells',60)->nullable();
            $table->string('email',50)->nullable();
            $table->string('web',500)->nullable();
            $table->string('type',30)->nullable();
            /*$table->enum('type',
                ['Escola','Institut','Institut Escola','CFA',
                 'ZER','IE','EOI','CdA','CLIC','CREDA','SEZ','ST','Projecte']
            );*/

            $table->string('agora_services',100)->nullable();
            $table->string('agora_managers',250)->nullable();

            $table->string('image',500)->nullable();
            $table->string('twitter',30)->nullable();
            $table->string('facebook',30)->nullable();
            $table->string('instagram',30)->nullable();

            $table->integer('parent_id')->unsigned()->nullable();
            $table->text('info')->nullable();
            $table->boolean('active')->default(1);
            /*$table->foreign('parent_id')
                ->references('id')
                ->on('entities2');*/

            $table->timestamps();
            $table->index(['id','codeid']);
        });



    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('entities');
    }
}
