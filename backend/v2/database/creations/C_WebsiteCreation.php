<?php

use Illuminate\Database\Capsule\Manager as Capsule;

/**
 * Creation template for use with "novice"
 */
class C_WebsiteCreation {

    function run(){
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
        Capsule::schema()->create('page', function($table) {
            $table->increments('id');
            $table->string('key');
            $table->string('content', 5000);

            // automatically create 'created_at' and 'updated_at' columns
            $table->timestamps();
        });
    }
}
