<?php

use TcBern\Model\Info;
use TcBern\Model\User;
use TcBern\Model\Group;
use TcBern\Model\Profile;

require __DIR__ . '/../vendor/autoload.php';

$app = new Slim\Slim();

//$app->add(new \Slim\Middleware\JwtAuthentication([
//    "secure" => false,
//    "path" => "/api",
//    "secret" => "supersecretkeyyoushouldnotcommittogithub"
//]));
$cipher = mcrypt_module_open('rijndael-256', '', 'ofb', '');
$iv = mcrypt_create_iv(mcrypt_enc_get_iv_size($cipher), MCRYPT_DEV_RANDOM);
$keySize = mcrypt_enc_get_key_size($cipher);
$encryptionKey = substr(md5('supersecretkeyyoushouldnotcommittogithub'), 0, $keySize);


// list of authorized entities
$authorizedEntities = array(
    "infos" => "TcBern\\Model\\Info",
    "internationalisation" => "TcBern\\Model\\Internationalisation",
    "identities" => "TcBern\\Model\\Identity");

// list of entities that requires an authentication
$authenticationRequiredEntities = array(
    "identities" => "TcBern\\Model\\Identity",
    "users" => "TcBern\\Model\\User");

// list of entities that requires the ownership to be modified
$ownershipRequiredEntities = array(
    "identities" => "TcBern\\Model\\Identity",
    "users" => "TcBern\\Model\\User");

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

function mapGroups($item) {
    return array("id" => $item->id, "key" => $item->key);
}

function encode($token, $cipher, $encryptionKey, $iv) {
    /*mcrypt_generic_init($cipher, $encryptionKey, $iv);
    $encrypted = mcrypt_generic($cipher, json_encode($token));
    mcrypt_generic_deinit($cipher);*/
    return base64_encode(json_encode($token));
}

function decode($token, $cipher, $encryptionKey, $iv) {
    $decodedToken = base64_decode($token);
    /*mcrypt_generic_init($cipher, $encryptionKey, $iv);
    $decrypted = mdecrypt_generic($cipher, $decodedToken);
    mcrypt_generic_deinit($cipher);
    echo $decrypted;*/
    return json_decode($decodedToken);
}

function containsNoToken($request) {
    return $request->headers->get('Token') == null;
}

function isNotOwner($entity, $id, $userId) {
    return $id != $userId;
}

// authentication
$app->post(
    '/auth',
    function () use ($app) {
        global $cipher, $encryptionKey, $iv;
        $params = json_decode($app->request()->getBody(), true);
        
        $username = $params['username'];
        $user = User::where('username', '=', $username)->first();
        
        if ($user != null && $user->password == $params['password']) {
            $token = array(
                "id" => $user->id,
                "exp" => time() + (60 * 60 * 24)
            );
            $encoded = encode($token, $cipher, $encryptionKey, $iv);
            echo json_encode(array("token" => $encoded, "userId" => $user->id, "group" => array_map('mapGroups', $user->groups()->get()->all())));
        } else {
            $app->halt(503, "Username or password incorrect");
        }
        
        $app->response->headers->set('Content-Type', 'application/json');
        $app->response()->header('Access-Control-Allow-Origin', '*');
    }
);
$app->post(
    '/password/:id',
    function ($id) use ($app) {
        global $authorizedEntities, $cipher, $encryptionKey, $iv;
        
        $request = $app->request();
        if (isAuthenticationRequired('users') && containsNoToken($request)) {
            $app->halt(401, "Authentication is required for '/password'");
        }
        
        $token = $request->headers->get('Token');
        $decoded = decode($request->headers->get('Token'), $cipher, $encryptionKey, $iv);
        if (/* check admin rights */ isOwnershipRequired('users') && isNotOwner('users', $id, $decoded->id)) {
            $app->halt(401, "You must be the owner of these data");
        }
        
        try {
            $request = $app->request();
            $body = $request->getBody();
            $input = json_decode($body);
            $user = User::find($id);
            if ($user) {
                $user->password = $input->password;
                $user->save();

                echo "success";
            } else {
                $app->response()->status(404);
            }
        } catch (Exception $e) {
            $app->response()->status(400);
            $app->response()->header('X-Status-Reason', $e->getMessage());
        }
    }
);

$app->get(
    '/api/committee',
    function() use ($app) {
        $profiles = Profile::whereHas('positions', function($q) {
          $q->where('key', '=', 'position.committee');
        })->get();
        echo $profiles->load('identity', 'positions')->toJson();
    }
);

$app->get(
    '/api/infopreview',
    function() use ($app) {
        $preview = Info::orderBy('date', 'DESC')->take(3)->get();
        echo $preview->toJson();
    }
);

// handle GET requests for /entity
$app->get(
    '/api/:entity',
    'verification',
    function ($entity) use ($app) {
        global $authorizedEntities, $cipher, $encryptionKey, $iv;
        
        if (isAuthenticationRequired($entity) && containsNoToken($app->request())) {
          $app->halt(401, "Authentication is required for '$entity'");
        }
        
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
        global $authorizedEntities, $cipher, $encryptionKey, $iv;
        
        if (isAuthenticationRequired($entity) && containsNoToken($app->request())) {
          $app->halt(401, "Authentication is required for '$entity'");
        }

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
        global $authorizedEntities, $cipher, $encryptionKey, $iv;
        
        if (isAuthenticationRequired($entity) && containsNoToken($app->request())) {
          $app->halt(401, "Authentication is required for '$entity'");
        }

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

// handle PUT requests to /entity/:id
$app->put(
    '/api/:entity/:id',
    'verification',
    function ($entity, $id) use ($app) {
        global $authorizedEntities, $cipher, $encryptionKey, $iv;
        
        $request = $app->request();
        if (isAuthenticationRequired($entity) && containsNoToken($request)) {
          $app->halt(401, "Authentication is required for '$entity'");
        }
        
        $token = $request->headers->get('Token');
        $decoded = decode($request->headers->get('Token'), $cipher, $encryptionKey, $iv);
        if (/* check admin rights */ isOwnershipRequired($entity) && isNotOwner($entity, $id, $decoded->id)) {
            $app->halt(401, "You must be the owner of these data");
        }

        // return JSON-encoded response body
        $app->response()->header('Content-Type', 'application/json');
        $app->response()->header('Access-Control-Allow-Origin', '*');

        try {
            // get and decode JSON request body
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
        global $authorizedEntities, $cipher, $encryptionKey, $iv;
        
        if (isAuthenticationRequired($entity) && containsNoToken($app->request())) {
          $app->halt(401, "Authentication is required for '$entity'");
        }

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
    global $authorizedEntities, $cipher, $encryptionKey, $iv;

    return array_key_exists($entityParam, $authorizedEntities);
}

/**
 * Returns true if the entity parameter is part of
 * the listed of authentiation-required entities
 *
 * @param $entityParam string the entity param
 * @return bool true if the entity param is authentication-required
 */
function isAuthenticationRequired($entityParam) {
    global $authenticationRequiredEntities;

    return array_key_exists($entityParam, $authenticationRequiredEntities);
}

/**
 * Returns true if the entity parameter is part of
 * the listed of ownership-required entities
 *
 * @param $entityParam string the entity param
 * @return bool true if the entity param is ownership-required
 */
function isOwnershipRequired($entityParam) {
    global $ownershipRequiredEntities;

    return array_key_exists($entityParam, $ownershipRequiredEntities);
}

/**
 * Returns the class name corresponding to the entity param
 *
 * @param $entityParam string the entity param name
 *
 * @return mixed the entity class name
 */
function getEntityClassName($entityParam) {
    global $authorizedEntities, $cipher, $encryptionKey, $iv;

    return $authorizedEntities[$entityParam];
}
