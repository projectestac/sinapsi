<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        
        Schema::create('posts', function (Blueprint $table) {

            $table->engine = 'InnoDB';

            $table->increments('id');
            $table->string('title',500);
            $table->string('link',500);
            $table->string('permalink',250);
            $table->string('description',2000);
            $table->text('content');
            $table->string('str_tags',500);
            $table->string('author',200);
            $table->string('thumb',1000);

            $table->Integer('channel_id')->unsigned()->nullable();
            $table->foreign('channel_id')
                ->references('id')
                ->on('channels');

            $table->timestamp('pub_date');

            $table->Integer('parent_id')->unsigned()->nullable();
            $table->foreign('parent_id')
                ->references('id')
                ->on('posts');

            $table->smallInteger('order')->default(0);    

            $table->boolean('fullcontent',200)->default(0);
            $table->timestamp('sticky')->nullable();
            $table->boolean('hidden');
            $table->timestamps();

            $table->index(['id','channel_id','pub_date','sticky']);

        });

        DB::statement('ALTER TABLE posts ADD FULLTEXT search(title, description, content, str_tags)');


    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('posts');
    }
}
