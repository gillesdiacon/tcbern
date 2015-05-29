<?php

use TcBern\Model\Info;

require __DIR__ . '/../vendor/autoload.php';

$app = new Slim\Slim();


// list of authorized entities
$authorizedEntities = array("infos");

// route middleware for simple API authentication
function verification(\Slim\Route $route)
{
    $app = \Slim\Slim::getInstance();

    $entity = $route->getParam("entity");
    if ($entity && !verifyEntityParam($entity)) {
        $app->halt(404, "Entity '$entity' not found");
    }

    // TODO: Implement user verification
//    if (verifyUser() === false) {
//        $app->halt(401);
//    }
}

// handle GET requests for /
$app->get(
    '/',
    function () use ($app) {
        echo "Welcome to API";
    }
)->name("home");

// handle GET requests for /entity
$app->get(
    '/:entity',
    'verification',
    function ($entity) use ($app) {

        // query database for all infos
        $infos = Info::all();

        // send response header for JSON content type
        $app->response()->header('Content-Type', 'application/json');
        $app->response()->header('Access-Control-Allow-Origin', '*');

        // return JSON-encoded response body with query results
        echo $infos->toJson();
    }
);

// handle GET requests for /infos/:id
$app->get(
    '/:entity/:id',
    'verification',
    function ($entity, $id) use ($app) {

        // send response header for JSON content type
        $app->response()->header('Content-Type', 'application/json');
        $app->response()->header('Access-Control-Allow-Origin', '*');

        try {
            // query database for one info by id
            $info = Info::find($id);

            // return JSON-encoded response body with query results
            if ($info) {
                echo $info->toJson();
            } else {
                $app->response()->status(404);
            }
        } catch (Exception $e) {
            $app->response()->status(400);
            $app->response()->header('X-Status-Reason', $e->getMessage());
        }
    }
);

// handle POST requests to /articles
$app->post(
    '/:entity',
    'verification',
    function ($entity) use ($app) {

        // return JSON-encoded response body
        $app->response()->header('Content-Type', 'application/json');
        $app->response()->header('Access-Control-Allow-Origin', '*');

        try {
            // get and decode JSON request body
            $request = $app->request();
            $body = $request->getBody();
            $input = json_decode($body);

            // store article record
            $info = new Info();
            $info->title = (string)$input->title;
            $info->content = (string)$input->content;
            $info->save();

            echo $info->toJson();
        } catch (Exception $e) {
            $app->response()->status(400);
            $app->response()->header('X-Status-Reason', $e->getMessage());
        }
    }
);

// handle POST requests to /articles/:id
$app->post(
    '/:entity/:id',
    'verification',
    function ($entity, $id) use ($app) {

        // return JSON-encoded response body
        $app->response()->header('Content-Type', 'application/json');
        $app->response()->header('Access-Control-Allow-Origin', '*');

        try {
            // get and decode JSON request body
            $request = $app->request();
            $body = $request->getBody();
            $input = json_decode($body);

            // query database for one info by id
            $info = Info::find($id);

            // store modified article
            // return JSON-encoded response body
            if ($info) {
                $info->title = (string)$input->title;
                $info->content = (string)$input->content;
                $info->save();

                echo $info->toJson();
            } else {
                $app->response()->status(404);
            }
        } catch (Exception $e) {
            $app->response()->status(400);
            $app->response()->header('X-Status-Reason', $e->getMessage());
        }
    }
);

// handle DELETE requests for /infos/:id
$app->delete(
    '/:entity/:id',
    'verification',
    function ($entity, $id) use ($app) {

        // return JSON-encoded response body
        $app->response()->header('Content-Type', 'application/json');
        $app->response()->header('Access-Control-Allow-Origin', '*');

        try {
            // query database for one info by id
            $info = Info::find($id);

            // return JSON-encoded response body with query results
            if ($info) {
                $info->delete();
                $app->response()->status(200);
            } else {
                $app->response()->status(404);
            }
        } catch (Exception $e) {
            $app->response()->status(400);
            $app->response()->header('X-Status-Reason', $e->getMessage());
        }
    }
);

$app->run();

/**
 * Returns true if the entity parameter is part of
 * the listed of authorized entities
 *
 * @param $entity string the entity param
 * @return bool true if the entity param is authorized
 */
function verifyEntityParam($entity)
{
    global $authorizedEntities;

    return in_array($entity, $authorizedEntities);
}
