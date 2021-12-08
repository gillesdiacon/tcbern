<?php

use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;

final class EntityAction {

    const AUTHORIZED_ENTITIES = array(
        "pages" => "TcBern\\Model\\Page",
        "internationalisation" => "\\TcBern\\Model\\Internationalisation");

    public function __construct() {}

    public function getAll(Request $request, Response $response, $args): Response {
        $entity = $args['entity'];
        $objects = self::AUTHORIZED_ENTITIES[$entity]::all();
        $response = $response->withHeader('Content-Type', 'application/json');
        $response->getBody()->write($objects->toJson());
        return $response;
    }
}