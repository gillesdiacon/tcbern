<?php

use Illuminate\Database\Capsule\Manager as Capsule;

/**
 * Creation template for use with "novice"
 */
class A_DropIfExists {

    function run(){
	    Capsule::schema()->dropIfExists('info');
		
		Capsule::schema()->dropIfExists('internationalisation');
		
        Capsule::schema()->dropIfExists('profileposition');
        Capsule::schema()->dropIfExists('profile');
        Capsule::schema()->dropIfExists('identity');
        Capsule::schema()->dropIfExists('usergroup');
        Capsule::schema()->dropIfExists('user');
        Capsule::schema()->dropIfExists('group');
		
		Capsule::schema()->dropIfExists('position');
    }
}
