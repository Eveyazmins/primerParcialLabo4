<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require './composer/vendor/autoload.php';
require './AccesoDatos.php';
require './peliculas/peliculaApi.php';
require './peliculas/actorApi.php';

$config['displayErrorDetails'] = true;
$config['addContentLengthHeader'] = false;

$app = new \Slim\App(["settings" => $config]);

$app->get("/test", function() {
	echo "Hola mundo desde la API";
});

$app->group('/peliculas', function () {
 
  $this->get('/', \peliculaApi::class . ':getAll');

  $this->delete('/{id}[/]', \peliculaApi::class . ':delete');

  $this->get('/{id}', \peliculaApi::class . ':getOne');

  $this->get('/nombre/{nombre}', \peliculaApi::class . ':getOneName');
  
  $this->get('/actor/{actor_principal}', \peliculaApi::class . ':getAllActor');
  
  $this->post('/alta[/]', \peliculaApi::class . ':CargarUno');

  /*

 
  $this->get('/{id}', \cdApi::class . ':traerUno');

  $this->post('/', \cdApi::class . ':CargarUno');


  $this->put('/', \cdApi::class . ':ModificarUno');
  */
     
});

$app->group('/actores', function () {
 
  $this->get('/', \actorApi::class . ':getAll');

  $this->delete('/{id}[/]', \actorApi::class . ':delete');

  $this->get('/{id}', \actorApi::class . ':getOne');

  $this->get('/nombre/{nombre}', \actorApi::class . ':getOneName');
  
  $this->post('/alta[/]', \actorApi::class . ':CargarUno');
     
});

// cors habilitadas
$app->add(function ($req, $res, $next) {
  $response = $next($req, $res);
  return $response
          ->withHeader('Access-Control-Allow-Origin', 'http://localhost:4200')
          ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
          ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
});

$app->run();