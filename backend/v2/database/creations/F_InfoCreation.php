<?php

use Illuminate\Database\Capsule\Manager as Capsule;

/**
 * Creation template for use with "novice"
 */
class InfoCreation {

    function run(){
        Capsule::schema()->dropIfExists('info');
        Capsule::schema()->create('info', function($table) {
            $table->increments('id');
            $table->string('title');
            $table->string('content', 5000);
            $table->date('date');

            // automatically create 'created_at' and 'updated_at' columns
            $table->timestamps();
        });
    }
}
