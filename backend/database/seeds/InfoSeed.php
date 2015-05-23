<?php

use TcBern\Model\Info;

/**
 * Seed template for use with "novice"
 */
class InfoSeed {

    function run() {
        $info = new Info;
        $info->title = "Test User 1";
        $info->content = "This is my first news";
        $info->save();

        $info2 = new Info;
        $info2->title = "Test User 2";
        $info2->content = "This is my second news";
        $info2->save();
    }
}
