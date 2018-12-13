<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Buffs extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    /**
     * TODO
     * I have to eliminate initialValueReputation, initialValueGold and valueType
     * Until I have a buff defined this is the way it stays
     */
    public function up()
    {
        Schema::create('buffs', function (Blueprint $table) {
            $table->increments('id');
            $table->string('image');
            $table->string('name');
            $table->string('description');
            $table->integer('initialValueReputation');
            $table->integer('initialValueGold');
            $table->string('valueType');

            $table->unique(['id', 'name']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('buffs');
    }
}
