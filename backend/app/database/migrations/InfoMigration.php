<?php

use Illuminate\Database\Capsule\Manager as Capsule;

/**
 * Creation/Migration template for use with "novice"
 */
class InfoMigration {

    function run(){
        Capsule::schema()->dropIfExists('info');
        Capsule::schema()->create('info', function($table) {
            $table->increments('id');
            $table->string('title');
            $table->string('content');

            // automatically create 'created_at' and 'updated_at' columns
            $table->timestamps();
        });
    }
}
