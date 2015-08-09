<?php

use TcBern\Model\Internationalisation;

/**
 * Seed template for use with "novice"
 */
class InternationalisationSeed {

    function run() {
        $internationalisation = new Internationalisation;
        $internationalisation->key = "position.member";
        $internationalisation->fr = "Membre";
        $internationalisation->de = "Mitglied";
        $internationalisation->en = "Member";
        $internationalisation->save();
        
        $internationalisation = new Internationalisation;
        $internationalisation->key = "position.committee";
        $internationalisation->fr = "Membre du comité";
        $internationalisation->de = "Vorstandmitglied";
        $internationalisation->en = "Committee";
        $internationalisation->save();
        
    }
}
