<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Players extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('players', function (Blueprint $table) {
            $table->increments('id');
            $table->string('image');
            $table->string('username');
            $table->string('slug');
            $table->string('password');
            $table->string('email');
            $table->unsignedInteger('guilds_id');
            $table->integer('gold');
            $table->integer('reputation');
            $table->integer('experience');
            
            $table->foreign('guilds_id')
                ->references('id')
                ->on('guilds');
            
            $table->unique(['username', 'email']);
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('players');
    }
}
