<?php

use Illuminate\Database\Capsule\Manager as Capsule;

/**
 * Creation template for use with "novice"
 */
class E_UserGroupCreation {

    function run(){
        Capsule::schema()->create('user', function($table) {
            $table->increments('id');
            $table->string('username');
            $table->string('password');
            $table->timestamps(); // automatically create 'created_at' and 'updated_at' columns
        });

        Capsule::schema()->create('group', function($table) {
            $table->increments('id');
            $table->string('key');
            $table->timestamps(); // automatically create 'created_at' and 'updated_at' columns
        });

        Capsule::schema()->create('usergroup', function($table) {
            $table->integer('user_id')->unsigned();
            $table->foreign('user_id')->references('id')->on('user')->onDelete('cascade');
            $table->integer('group_id')->unsigned();
            $table->foreign('group_id')->references('id')->on('group')->onDelete('cascade');
            $table->primary(array('user_id', 'group_id'));
        });
        
        Capsule::schema()->create('identity', function($table) {
            $table->increments('id');
            $table->integer('user_id')->unsigned();
            $table->foreign('user_id')->references('id')->on('user')->onDelete('cascade');
            $table->string('firstname');
            $table->string('lastname');
            $table->string('email');
            $table->date('birthday');
            $table->string('streetnumber');
            $table->string('street');
            $table->string('street2')->nullable();
            $table->string('postcode');
            $table->string('city');
            $table->string('country');
            $table->string('phonenumber')->nullable();
            $table->string('mobilenumber')->nullable();
            $table->timestamps(); // automatically create 'created_at' and 'updated_at' columns
        });
        
        Capsule::schema()->create('profile', function($table) {
            $table->increments('id');
            $table->integer('identity_id')->unsigned();
            $table->foreign('identity_id')->references('id')->on('identity')->onDelete('cascade');
            $table->string('status_key');
            $table->date('registration_date');
            $table->date('resignation_date');
            $table->timestamps(); // automatically create 'created_at' and 'updated_at' columns
        });

        Capsule::schema()->create('profileposition', function($table) {
            $table->integer('profile_id')->unsigned();
            $table->foreign('profile_id')->references('id')->on('profile')->onDelete('cascade');
            $table->integer('position_id')->unsigned();
            $table->foreign('position_id')->references('id')->on('position')->onDelete('cascade');
            $table->primary(array('profile_id', 'position_id'));
        });
    }
}
