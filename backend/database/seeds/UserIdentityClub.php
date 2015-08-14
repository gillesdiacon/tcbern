<?php

use TcBern\Model\User;
use TcBern\Model\Group;
use TcBern\Model\Identity;
use TcBern\Model\Profile;

/**
 * Seed template for use with "novice"
 */
class UserIdentityClub {
    function createAndSaveUser($username, $password, $groups) {
        $user = new User;
        $user->username = $username;
        $user->password = $password;
        $user->save();
        
        foreach ($groups as &$group) {
            $user->groups()->attach($group);
        }
        
        $user->save();
        
        return $user;
    }
    
    function createAndSaveIdentity($user, $firstname, $lastname, $email, $birthday, $streetnumber, $street, $postcode, $city, $country, $mobilenumber) {
        $identity = new Identity;
        $identity->user()->associate($user);
        $identity->firstname = $firstname;
        $identity->lastname = $lastname;
        $identity->email = $email;
        $identity->birthday = $birthday;
        $identity->streetnumber = $streetnumber;
        $identity->street = $street;
        $identity->postcode = $postcode;
        $identity->city = $city;
        $identity->country = $country;
        $identity->mobilenumber = $mobilenumber;
        $identity->save();
        
        return $identity;
    }
    
    function createAndSaveProfile($identity, $statusKey, $registrationDate, $positions) {
      $profile = new Profile;
      $profile->identity()->associate($identity);
      $profile->status_key = $statusKey;
      $profile->registration_date = $registrationDate;
      $profile->save();
      
      foreach ($positions as &$position) {
          $profile->positions()->attach($position);
      }
      
      $profile->save();
      
      return $profile;
    }

    function run() {
        $groupMember = new Group;
        $groupMember->key = "member";
        $groupMember->save();

        $groupAdmin = new Group;
        $groupAdmin->key = "admin";
        $groupAdmin->save();

        $user = $this->createAndSaveUser("cedric", "password", array($groupMember, $groupAdmin));
        $identity = $this->createAndSaveIdentity($user, "Cedric", "Lavanchy", "cla@tcbern.ch", time(), "1", "Rue de chez moi", "3000", "Bern", "Switzerland", "+41 79 123 45 67");
        $profile = $this->createAndSaveProfile($identity, "active", time(), array(1, 2, 6));
        
        $user = $this->createAndSaveUser("gilles", "password", array($groupMember, $groupAdmin));
        $identity = $this->createAndSaveIdentity($user, "Gilles", "Diacon", "gdi@tcbern.ch", time(), "453", "La bas", "4000", "Westside", "Switzerland", "+41 79 765 43 21");
        $profile = $this->createAndSaveProfile($identity, "active", time(), array(1));
        
        $user = $this->createAndSaveUser("pascal", "password", array($groupMember));
        $identity = $this->createAndSaveIdentity($user, "Pascal", "Kuhn", "pkh@tcbern.ch", time(), "3", "Hier", "5000", "Bern", "Switzerland", "+41 79 135 79 24");
        $profile = $this->createAndSaveProfile($identity, "active", time(), array(1, 2, 3));
        
        $user = $this->createAndSaveUser("michelle", "password", array($groupMember));
        $identity = $this->createAndSaveIdentity($user, "Michelle", "Salzmann", "msa@tcbern.ch", time(), "3", "Hier", "5000", "Bern", "Switzerland", "+41 79 135 79 68");
        $profile = $this->createAndSaveProfile($identity, "active", time(), array(1, 2, 5));
        
        $user = $this->createAndSaveUser("sarah", "password", array($groupMember));
        $identity = $this->createAndSaveIdentity($user, "Sarah", "Gäumann", "sga@tcbern.ch", time(), "6", "Dort", "6000", "Bern", "Switzerland", "+41 79 456 12 23");
        $profile = $this->createAndSaveProfile($identity, "active", time(), array(1, 2, 5));
        
        $user = $this->createAndSaveUser("daniel", "password", array($groupMember));
        $identity = $this->createAndSaveIdentity($user, "Daniel", "Jost", "djo@tcbern.ch", time(), "765", "Ost", "7000", "Ostermundigen", "Switzerland", "+41 79 876 25 65");
        $profile = $this->createAndSaveProfile($identity, "active", time(), array(1, 2, 7));
    }
}
