<?php

use Illuminate\Database\Capsule\Manager as Capsule;

/**
 * Creation template for use with "novice"
 */
class InternationalisationCreation {

    function run(){
        Capsule::schema()->dropIfExists('internationalisation');
        Capsule::schema()->create('internationalisation', function($table) {
            $table->increments('id');
            $table->string('key');
            $table->string('fr');
            $table->string('de');
            $table->string('it');
            $table->string('en');

            // automatically create 'created_at' and 'updated_at' columns
            $table->timestamps();
        });
    }
}