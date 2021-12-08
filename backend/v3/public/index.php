<?php

use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;
use Slim\Factory\AppFactory;

require __DIR__ . '/../vendor/autoload.php';

$app = AppFactory::create();

$app->addRoutingMiddleware();
$errorMiddleware = $app->addErrorMiddleware(true, true, true);

$app->get(
    '/backend/v3/public/',
    function (Request $request, Response $response) {
        echo "Welcome to API -> PHP Version " . phpversion();
        return $response;
    }
);

$app->get('/backend/v3/public/api/{entity}', EntityAction::class . ':getAll');

$app->run();
