<?php

use TcBern\Model\Info;

require __DIR__.'/../vendor/autoload.php';

$app = new Slim\Slim();

$app->get('/', function() {
    $info = new Info;
    $info->title = "Test info 3";
    $info->content = "my super content 3";
    //$info->save();

    echo "Hello, $info->title!";
});

$app->run();
