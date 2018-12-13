<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Heroesstats extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        /*Schema::create('heroesstats', function (Blueprint $table) {
            $table->integer('heroes_id')->unsigned();
            $table->integer('finalgoldpersecond');
            $table->integer('finalreputationperday');
            $table->integer('finalagility');
            $table->integer('finalstrength');
            $table->integer('finalconstitution');
            $table->integer('finalintelligence');
            $table->integer('finaldamage');
            $table->integer('finalhealth');

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
        Schema::dropIfExists('heroesstats');
    }
}
