<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSinapsisTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sinapsis', function (Blueprint $table) {

            $table->engine = 'InnoDB';
            
            $table->increments('id');
            $table->string('name');
            $table->string('slug')->unique();
            $table->string('description',500);
            $table->string('logo',2000)->default('');
            $table->enum('type',['auto', 'manual']);
            $table->enum('postview',['sns-medium-card', 'sns-full-card','sns-list','sns-gallery']);
            $table->string('querystring')->default('');
            $table->integer('parent_id')->unsigned()->nullable();
            $table->foreign('parent_id')
                ->references('id')
                ->on('sinapsis');
            $table->timestamps();
            $table->index(['id','slug']);
        });

        DB::statement('ALTER TABLE sinapsis ADD FULLTEXT search(name, description)');
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('sinapsis');
    }
}
