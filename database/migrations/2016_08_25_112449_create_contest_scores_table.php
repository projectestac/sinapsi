<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateContestScoresTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('contest_scores', function (Blueprint $table) {

            $table->engine = 'InnoDB';

            $table->increments('id');

            $table->integer('sinapsi_id')->unsigned();
            $table->foreign('sinapsi_id')
                ->references('id')
                ->on('sinapsis')
                ->onDelete('cascade');

            $table->integer('post_id')->unsigned();
            $table->foreign('post_id')
                ->references('id')
                ->on('posts')
                ->onDelete('cascade');

            $table->integer('user_id')->unsigned();
            $table->foreign('user_id')
                ->references('id')
                ->on('users')
                ->onDelete('cascade');

            $table->integer('score');
            $table->timestamps();

            $table->index(['id','sinapsi_id','post_id','user_id']);

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
         Schema::drop('contest_scores');
    }
}
