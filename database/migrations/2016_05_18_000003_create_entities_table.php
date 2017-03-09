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
            $table->enum(
                'type',
                ['Escola','Institut','CFA','ZER','IE','EOI','CdA','CLIC','CREDA','SEZ','ST','Projecte']
            );
            $table->string('name',250);
            $table->string('codeid');
            //TODO: unique
            //$table->string('codename')->unique();
            $table->string('codename');
            $table->string('location');
            $table->string('image',500);
            $table->string('url',500);
            $table->integer('parent_id')->unsigned()->nullable();
            /*$table->foreign('parent_id')
                ->references('id')
                ->on('entities');
            */
            $table->timestamps();
            $table->index(['id','codename']);
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
