<?php

use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;
use Slim\App;

require __DIR__ . '/../vendor/autoload.php';

$slimSettings = array('determineRouteBeforeAppMiddleware' => true);
$slimConfig = array('settings' => $slimSettings);
$app = new App(['settings' => ['determineRouteBeforeAppMiddleware' => true]]);

$c = $app->getContainer();
$c['errorHandler'] = function ($c) {
    return function ($request, $response, $exception) use ($c) {
        $response->getBody()->rewind();
        $trace = $exception->getTraceAsString();
        return $c['response']->withStatus(500)
                             ->withHeader('X-Status-Reason', $exception->getMessage())
                             ->withHeader('Content-Type', 'text/html')
                             ->write("Something went wrong! $trace");
    };
};

$verificationMw = function($request, $response, $next) {
    $route = $request->getAttribute('route');
    $entity = current($route->getArguments());

    if (verifyEntityParam($entity)) {
        return $next($request, $response);
    } else {
        $response->getBody()->write("Entity '$entity' not found");
        return $response->withStatus(404);
    }
};

$headerMw = function($request, $response, $next) {
    $response = $next($request, $response);
    return $response
        ->withHeader('Content-Type', 'application/json')
        ->withHeader('Access-Control-Allow-Origin', '*');
};

// list of authorized entities
$authorizedEntities = array(
    "pages" => "TcBern\\Model\\Page",
    "internationalisation" => "TcBern\\Model\\Internationalisation");

$app->get(
    '/',
    function () use ($app) {
        echo "Welcome to API -> PHP Version " . phpversion();
    }
);

$app->options(
    '/*',
    function (Request $request, Response $response) {
        $response->header('Access-Control-Allow-Headers', 'Authorization, Content-Type');
        $response->header('Access-Control-Allow-Origin', '*');
        $response->header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    }
);

$app->get(
    '/api/{entity}',
    function (Request $request, Response $response, $args) {
        global $authorizedEntities;

        $entity = $args['entity'];
        $objects = $authorizedEntities[$entity]::all();
        $response->getBody()->write($objects->toJson());

        return $response;
    }
)->add($verificationMw)->add($headerMw);

$app->get(
    '/api/{entity}/{id}',
    function (Request $request, Response $response, $args) {
        global $authorizedEntities;

        $entity = $args['entity'];
        $id = $args['id'];
        $object = $authorizedEntities[$entity]::find($id);

        if ($object) {
            $response->getBody()->write($object->toJson());
            return $response;
        } else {
            return $response->withStatus(404);
        }
    }
)->add($verificationMw)->add($headerMw);

$app->run();

/**
 * Returns true if the entity parameter is part of
 * the listed of authorized entities
 *
 * @param $entityParam string the entity param
 * @return bool true if the entity param is authorized
 */
function verifyEntityParam($entityParam) {
    global $authorizedEntities;

    return array_key_exists($entityParam, $authorizedEntities);
}
