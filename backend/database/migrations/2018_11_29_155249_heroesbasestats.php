<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Heroesbasestats extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        /*Schema::create('heroesbasestats', function (Blueprint $table) {
            $table->integer('heroes_id')->unsigned();
            $table->integer('goldpersecond');
            $table->integer('reputationperday');
            $table->integer('agility');
            $table->integer('strength');
            $table->integer('constitution');
            $table->integer('intelligence');
            $table->integer('damage');
            $table->integer('health');

            $table->foreign('heroes_id')
                ->references('id')
                ->on('heroes')
                ->onDelete('cascade');

            $table->unique(['heroes_id']);
            
        });*/
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('heroesbasestats');
    }
}
