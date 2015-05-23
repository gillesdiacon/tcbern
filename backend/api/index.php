<?php

use TcBern\Model\Info;

require __DIR__ . '/../vendor/autoload.php';

$app = new Slim\Slim();

$app->get(
    '/',
    function () use ($app) {
        echo "Welcome to API";
    }
)->name("home");


// handle GET requests for /infos
$app->get(
    '/infos',
    function () use ($app) {
        // query database for all infos
        $infos = Info::all();

        // send response header for JSON content type
        $app->response()->header('Content-Type', 'application/json');

        // return JSON-encoded response body with query results
        echo $infos->toJson();
    }
);

// handle GET requests for /infos/:id
$app->get(
    '/infos/:id',
    function ($id) use ($app) {
        try {
            // query database for one info by id
            $info = Info::find($id);

            // send response header for JSON content type
            $app->response()->header('Content-Type', 'application/json');

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
    '/infos',
    function () use ($app) {
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

            // return JSON-encoded response body
            $app->response()->header('Content-Type', 'application/json');
            echo $info->toJson();
        } catch (Exception $e) {
            $app->response()->status(400);
            $app->response()->header('X-Status-Reason', $e->getMessage());
        }
    }
);

// handle POST requests to /articles/:id
$app->post(
    '/infos/:id',
    function ($id) use ($app) {
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

                // return JSON-encoded response body
                $app->response()->header('Content-Type', 'application/json');
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
    '/infos/:id',
    function ($id) use ($app) {
        try {
            // query database for one info by id
            $info = Info::find($id);

            // send response header for JSON content type
            $app->response()->header('Content-Type', 'application/json');

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
