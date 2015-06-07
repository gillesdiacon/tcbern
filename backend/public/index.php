<?php

//use TcBern\Model\Info;

require __DIR__ . '/../vendor/autoload.php';

$app = new Slim\Slim();

//$app->add(new \Slim\Middleware\JwtAuthentication([
//    "secure" => false,
//    "path" => "/api",
//    "secret" => "supersecretkeyyoushouldnotcommittogithub"
//]));


// list of authorized entities
$authorizedEntities = array("infos" => "TcBern\\Model\\Info");

// route middleware for simple API authentication
function verification(\Slim\Route $route)
{
    $app = \Slim\Slim::getInstance();

    $entity = $route->getParam("entity");
    if ($entity && !verifyEntityParam($entity)) {
        $app->halt(404, "Entity '$entity' not found");
    }
}

// handle GET requests for /
$app->get(
    '/',
    function () use ($app) {
        echo "Welcome to API";
    }
)->name("home");

$app->options(
    '/*',
    function () use ($app) {
        $app->response()->header('Access-Control-Allow-Headers', 'Authorization, Content-Type');
        $app->response()->header('Access-Control-Allow-Origin', '*');
        $app->response()->header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    }
);

// authentication
$app->post(
    '/auth',
    function () use ($app) {
        $params = $app->request()->getBody();
        //if ($params['userename'] == "login" && $params['password'] == "password") {
            $key = "supersecretkeyyoushouldnotcommittogithub";
            $token = array(
                "id" => "1",
                "exp" => time() + (60 * 60 * 24)
            );
            $jwt = JWT::encode($token, $key);
            $app->response->headers->set('Content-Type', 'application/json');
            $app->response()->header('Access-Control-Allow-Origin', '*');

            echo json_encode(array("token" => $jwt, "group" => "admin"));
        //}
    }
);

// handle GET requests for /entity
$app->get(
    '/api/:entity',
    'verification',
    function ($entity) use ($app) {
        global $authorizedEntities;

        // query database for all objects
        $objects = $authorizedEntities[$entity]::all();

        // send response header for JSON content type
        $app->response()->header('Content-Type', 'application/json');
        $app->response()->header('Access-Control-Allow-Origin', '*');

        // return JSON-encoded response body with query results
        echo $objects->toJson();
    }
);

// handle GET requests for /entity/:id
$app->get(
    '/api/:entity/:id',
    'verification',
    function ($entity, $id) use ($app) {
        global $authorizedEntities;

        // send response header for JSON content type
        $app->response()->header('Content-Type', 'application/json');
        $app->response()->header('Access-Control-Allow-Origin', '*');

        try {
            // query database for one info by id
            $object = $authorizedEntities[$entity]::find($id);

            // return JSON-encoded response body with query results
            if ($object) {
                echo $object->toJson();
            } else {
                $object->response()->status(404);
            }
        } catch (Exception $e) {
            $app->response()->status(400);
            $app->response()->header('X-Status-Reason', $e->getMessage());
        }
    }
);

// handle POST requests to /entity
$app->post(
    '/api/:entity',
    'verification',
    function ($entity) use ($app) {
        global $authorizedEntities;

        // return JSON-encoded response body
        $app->response()->header('Content-Type', 'application/json');
        $app->response()->header('Access-Control-Allow-Origin', '*');

        try {
            // get and decode JSON request body
            $request = $app->request();
            $body = $request->getBody();
            $input = json_decode($body);

            $object = new $authorizedEntities[$entity]();
            foreach($input as $key => $value) {

                //Always cast to String
                $object->$key = (string)$value;
            }
            $object->save();

            echo $object->toJson();
        } catch (Exception $e) {
            $app->response()->status(400);
            $app->response()->header('X-Status-Reason', $e->getMessage());
        }
    }
);

// handle POST requests to /entity/:id
$app->post(
    '/api/:entity/:id',
    'verification',
    function ($entity, $id) use ($app) {
        global $authorizedEntities;

        // return JSON-encoded response body
        $app->response()->header('Content-Type', 'application/json');
        $app->response()->header('Access-Control-Allow-Origin', '*');

        try {
            // get and decode JSON request body
            $request = $app->request();
            $body = $request->getBody();
            $input = json_decode($body);

            // query database for one info by id
            $object = $authorizedEntities[$entity]::find($id);

            // store modified article
            // return JSON-encoded response body
            if ($object) {

                foreach($input as $key => $value) {

                    //Always cast to String
                    $object->$key = (string)$value;
                }
                $object->save();

                echo $object->toJson();
            } else {
                $app->response()->status(404);
            }
        } catch (Exception $e) {
            $app->response()->status(400);
            $app->response()->header('X-Status-Reason', $e->getMessage());
        }
    }
);

// handle DELETE requests for /entity/:id
$app->delete(
    '/api/:entity/:id',
    'verification',
    function ($entity, $id) use ($app) {
        global $authorizedEntities;

        // return JSON-encoded response body
        $app->response()->header('Content-Type', 'application/json');
        $app->response()->header('Access-Control-Allow-Origin', '*');

        try {
            // query database for one info by id
            $object = $authorizedEntities[$entity]::find($id);

            // return JSON-encoded response body with query results
            if ($object) {
                $object->delete();
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
 * @param $entityParam string the entity param
 * @return bool true if the entity param is authorized
 */
function verifyEntityParam($entityParam) {
    global $authorizedEntities;

    return array_key_exists($entityParam, $authorizedEntities);
}

/**
 * Returns the class name corresponding to the entity param
 *
 * @param $entityParam string the entity param name
 *
 * @return mixed the entity class name
 */
function getEntityClassName($entityParam) {
    global $authorizedEntities;

    return $authorizedEntities[$entityParam];
}
