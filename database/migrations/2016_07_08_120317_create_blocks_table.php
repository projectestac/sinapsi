<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBlocksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('blocks', function (Blueprint $table) {

            $table->engine = 'InnoDB';
            
            $table->increments('id');
            $table->enum('type',['basic-color', 'raw-html', 'fpca-llista', 'simple-title', 'twitter-timeline']);
            $table->string('options',200);
            $table->string('title');
            $table->text('content');
            $table->enum('scope',['sinapsi','home','tag','school','st','se','project','post','sns-tags']);
            $table->integer('scope_id');
            $table->integer('order');
            $table->timestamps();

            $table->index(['id','scope_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('blocks');
    }
}
