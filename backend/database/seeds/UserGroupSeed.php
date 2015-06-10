<?php

use TcBern\Model\User;
use TcBern\Model\Group;

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

    }
}
