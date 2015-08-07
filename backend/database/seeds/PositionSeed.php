<?php

use TcBern\Model\Position;

/**
 * Seed template for use with "novice"
 */
class PositionSeed {

    function run() {
        $position = new Position;
        $position->key = "position.member";
        $position->save();

        $position2 = new Position;
        $position2->key = "position.committee";
        $position2->save();

        $position3 = new Position;
        $position3->key = "position.president";
        $position3->save();

        $position4 = new Position;
        $position4->key = "position.vicePresident";
        $position4->save();

        $position5 = new Position;
        $position5->key = "position.eventManager";
        $position5->save();

        $position6 = new Position;
        $position6->key = "position.tournamentManager";
        $position6->save();

        $position7 = new Position;
        $position7->key = "position.treasurer";
        $position7->save();

        $position8 = new Position;
        $position8->key = "position.secretary";
        $position8->save();

        $position9 = new Position;
        $position9->key = "position.webManager";
        $position9->save();
    }
}
