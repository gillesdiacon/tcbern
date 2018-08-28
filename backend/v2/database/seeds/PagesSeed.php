<?php

use TcBern\Model\Page;

/**
 * Seed template for use with "novice"
 */
class PageSeed {
    function createAndSavePage($content) {
        $page = new Page;
        $page->content = $content;
        $page->save();

        return $page;
    }

    function run() {
        $this->createAndSavePage("*Wann/when/quand?* 23.09.2018 (Sonntag / Sunday / Dimanche)");
    }
}
