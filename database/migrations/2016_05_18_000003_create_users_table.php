<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {

            $table->engine = 'InnoDB';

            $table->increments('id');
            $table->string('name');
            $table->string('nickname');
            $table->string('avatar');
            $table->enum('role',['admin','subscriptor'])->default('subscriptor');

            $table->integer('entity_id')->unsigned()->nullable();
            /*$table->foreign('school_id')
                ->references('id')
                ->on('schools')
                ->onDelete('cascade');
            */    

            $table->string('email')->unique();
            $table->string('description')->nullable();
            $table->integer('reputation')->default(1);
            
            $table->integer('sinapsi_dst')->nullable();
            /*$table->foreign('sinapsi_dst_k')
                ->references('id')
                ->on('sinapsis');
              */
            $table->string('wp_dst')->nullable();

            $table->rememberToken();
            $table->timestamps();

            $table->index(['id','nickname','email']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('users');
    }
}
