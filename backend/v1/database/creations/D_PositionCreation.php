<?php

use Illuminate\Database\Capsule\Manager as Capsule;

/**
 * Creation template for use with "novice"
 */
class D_PositionCreation {

    function run(){
        Capsule::schema()->create('position', function($table) {
            $table->increments('id');
            $table->string('key');
        });
    }
}
