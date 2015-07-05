<?php

use TcBern\Model\Info;

/**
 * Seed template for use with "novice"
 */
class InfoSeed {

    function run() {
        $info = new Info;
        $info->title = "Test User 1";
        $info->content = "This is my first news\n\n* element 1\n* element 2\n* element 3\n{color:red}Text in red{color}";
        $info->save();

        $info2 = new Info;
        $info2->title = "Test User 2";
        $info2->content = "This is my second news";
        $info2->save();
    }
}
