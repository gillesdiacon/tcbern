<?php

use Illuminate\Database\Capsule\Manager as Capsule;

/**
 * Migration template for use with "novice"
 */
class PageMigration {

    function run(){
        Capsule::schema()->create('page', function($table) {
            $table->increments('id');
            $table->string('key');
            $table->string('content', 5000);

            // automatically create 'created_at' and 'updated_at' columns
            $table->timestamps();
        });
    }
}