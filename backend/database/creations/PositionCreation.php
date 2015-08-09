<?php

use Illuminate\Database\Capsule\Manager as Capsule;

/**
 * Creation template for use with "novice"
 */
class PositionCreation {

    function run(){
        Capsule::schema()->dropIfExists('position');
        Capsule::schema()->create('position', function($table) {
            $table->increments('id');
            $table->string('key');
        });
    }
}
