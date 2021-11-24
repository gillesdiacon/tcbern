<?php

use Illuminate\Database\Capsule\Manager as Capsule;

/**
 * Creation template for use with "novice"
 */
class A_DropIfExists {

    function run(){
		Capsule::schema()->dropIfExists('internationalisation');
		Capsule::schema()->dropIfExists('page');
    }
}
