<?php

use TcBern\Model\User;
use TcBern\Model\Group;
use TcBern\Model\Identity;
use TcBern\Model\Profile;

/**
 * Seed template for use with "novice"
 */
class UserGroupSeed {

    function run() {
        /*$group = new Group;
        $group->key = "member";
        $group->save();

        $group2 = new Group;
        $group2->key = "admin";
        $group2->save();

        $user = new User;
        $user->username = "cedric";
        $user->password = "password";
        $user->save();

        $user->groups()->attach($group);
        $user->groups()->attach($group2);

        $user2 = new User;
        $user2->username = "gilles";
        $user2->password = "password";
        $user2->save();

        $user2->groups()->attach($group);
        $user2->groups()->attach($group2);

        $user3 = new User;
        $user3->username = "manu";
        $user3->password = "password";
        $user3->save();

        $user3->groups()->attach($group);

        $identity1 = new Identity;
        $identity1->user()->associate($user);
        $identity1->firstname = "Cedric";
        $identity1->lastname = "Lavanchy";
        $identity1->email = "cla@tcbern.ch";
        $identity1->birthday = time();
        $identity1->streetnumber = "1";
        $identity1->street = "Rue de chez moi";
        $identity1->postcode = "3000";
        $identity1->city = "Bern";
        $identity1->country = "Switzerland";
        $identity1->mobilenumber = "+41 79 123 45 67";
        $identity1->save();
        
        $profile1 = new Profile;
        $profile1->identity()->associate($identity1);
        $profile1->status_key = "active";
        $profile1->registration_date = time();
        $profile1->save();

        $identity2 = new Identity;
        $identity2->user()->associate($user2);
        $identity2->firstname = "Gilles";
        $identity2->lastname = "Diacon";
        $identity2->email = "gdi@tcbern.ch";
        $identity2->birthday = time();
        $identity2->streetnumber = "453";
        $identity2->street = "La bas";
        $identity2->postcode = "4000";
        $identity2->city = "Westside";
        $identity2->country = "Switzerland";
        $identity2->phonenumber = "+41 31 765 43 21";
        $identity2->save();
        
        $profile2 = new Profile;
        $profile2->identity()->associate($identity2);
        $profile2->status_key = "active";
        $profile2->registration_date = time();
        $profile2->save();
        
        $profile1->positions()->attach(1); // position.member
        $profile1->positions()->attach(2); // position.committee
        $profile1->positions()->attach(9); // position.webManager
        $profile1->save();
        
        $profile2->positions()->attach(1); // position.member
        $profile2->save();*/
    }
}
