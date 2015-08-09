<?php

use TcBern\Model\Position;

/**
 * Seed template for use with "novice"
 */
class PositionSeed {

    function run() {
        $position1 = new Position;
        $position1->key = "position.member";
        $position1->save();

        $position2 = new Position;
        $position2->key = "position.committee";
        $position2->save();

        $position3 = new Position;
        $position3->key = "position.committee.president";
        $position3->save();

        $position4 = new Position;
        $position4->key = "position.committee.vicePresident";
        $position4->save();

        $position5 = new Position;
        $position5->key = "position.committee.eventManager";
        $position5->save();

        $position6 = new Position;
        $position6->key = "position.committee.treasurer";
        $position6->save();

        $position7 = new Position;
        $position7->key = "position.committee.secretary";
        $position7->save();

        $position8 = new Position;
        $position8->key = "position.tournamentManager";
        $position8->save();

        $position9 = new Position;
        $position9->key = "position.webManager";
        $position9->save();
    }
}
