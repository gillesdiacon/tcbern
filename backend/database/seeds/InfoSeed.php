<?php

use TcBern\Model\Info;

/**
 * Seed template for use with "novice"
 */
class InfoSeed {

    function run() {
        $info = new Info;
        $info->title = "#Test Info 1";
        $info->content = "##Subtitle\nThis is my first news\n\n* element 1\n* element 2\n* element 3";
        $info->save();

        $info2 = new Info;
        $info2->title = "Test Info 2";
        $info2->content = "This is my second news";
        $info2->save();
    }
}
