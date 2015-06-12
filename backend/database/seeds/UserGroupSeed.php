<?php

use TcBern\Model\User;
use TcBern\Model\Group;
use TcBern\Model\Identity;

/**
 * Seed template for use with "novice"
 */
class UserGroupSeed {

    function run() {
        $group = new Group;
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
        $identity1->user = $user;
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
    }
}
