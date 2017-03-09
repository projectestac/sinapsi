<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEntityOptionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('entity_options', function (Blueprint $table) {

            $table->engine = 'InnoDB';

            $table->integer('entity_id')->unsigned();
            $table->foreign('entity_id')
                ->references('id')
                ->on('entities');

            $table->string('option');
            $table->string('value');

            $table->timestamps();
            $table->index(['entity_id']);

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('entity_options');
    }
}
