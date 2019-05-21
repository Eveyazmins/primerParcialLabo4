<?php
require_once 'actor.php';
require_once 'IApiUsable.php';

class actorApi extends actor /* implements IApiUsable */
{

	public function getAll($request, $response, $args) {
		$todos=actor::TraerTodos();
		$newResponse = $response->withJson($todos, 200);  
	return $newResponse;
}

public function delete($request,$response,$args){
	$id = $args["id"];
	$respuesta = actor::Borrar($id);
	$newResponse = $response->withJson($respuesta,200);
	return $newResponse;
}


public function getOne($request, $response, $args) {
	$id=$args['id'];
	 $retorno = actor::TraerUno($id);
	 $newResponse = $response->withJson($retorno, 200);  
	 return $newResponse;
}

public function getOneName($request, $response, $args) {
	$nombre=$args['nombre'];
	 $retorno = actor::TraerUnoPorNombre($nombre);
	 $newResponse = $response->withJson($retorno, 200);  
	 return $newResponse;
}


    public function CargarUno($request, $response, $args)
    {
        $ArrayDeParametros = $request->getParsedBody();
        //$objDelaRespuesta= new stdclass();

        //Validaciones de campos vacíos
        if (!isset($ArrayDeParametros['nombre'])) 
        {
            return $response->withJson("nombre no puede esta vacio",404);   
        }
        else
        {
            $nombre = $ArrayDeParametros['nombre'];
        }
        
        if (!isset($ArrayDeParametros['apellido'])) 
        {
            return $response->withJson("apellido no puede esta vacio",404);   
        }
        else
        {
            $apellido = $ArrayDeParametros['apellido'];
        }

        if (!isset($ArrayDeParametros['nacionalidad'])) 
        {
            return $response->withJson("nacionalidad no puede esta vacio",404);   
        }
        else
        {
            $nacionalidad = $ArrayDeParametros['nacionalidad'];
        }

        if (!isset($ArrayDeParametros['fecha_nacimiento'])) 
        {
            return $response->withJson("fecha de nacimiento no puede esta vacio",404);   
        }
        else
        {
            $fecha_nacimiento = $ArrayDeParametros['fecha_nacimiento'];
        }
        
        $actorAux = new actor();
        $actorAux->nombre = $nombre;
        $actorAux->apellido = $apellido;
        $actorAux->nacionalidad = $nacionalidad;
        $actorAux->fecha_nacimiento = $fecha_nacimiento;

       // $archivos = $request->getUploadedFiles();
       // $destino="./fotosEmpleado/";
        //var_dump($archivos);
        //var_dump($archivos['foto']);
      /*  if(isset($archivos['foto']))
        {
            $nombreAnterior=$archivos['foto']->getClientFilename();
            $extension= explode(".", $nombreAnterior)  ;
            //var_dump($nombreAnterior);
            $extension=array_reverse($extension);
            $archivos['foto']->moveTo($destino.$usuario.".".$extension[0]);
            $empleadoAux->foto = $destino.$usuario.".".$extension[0];
        } 
        else
        {
            $empleadoAux->foto = "sin foto";
        }
        */
        
        $e = actor::TraerNombre($actorAux->nombre);

        if ($e == null){
            $actorAux->InsertarActorParametros();
            $response->getBody()->write("Se dio de alta actor: ".$actorAux->nombre,202);
            //$response->withJson("Se dio de alta al empleado: ".$nombre);

        }else {
            return $response->withJson("El actor ya existe ",404);
        }

        return $response;   
    }


	/*
 	public function TraerUno($request, $response, $args) {
     	$id=$args['id'];
    	$elCd=cd::TraerUnCd($id);
     	$newResponse = $response->withJson($elCd, 200);  
    	return $newResponse;
    }

      public function CargarUno($request, $response, $args) {
     	 $ArrayDeParametros = $request->getParsedBody();
        //var_dump($ArrayDeParametros);
        $titulo= $ArrayDeParametros['titulo'];
        $cantante= $ArrayDeParametros['cantante'];
        $año= $ArrayDeParametros['anio'];
        
        $micd = new cd();
        $micd->titulo=$titulo;
        $micd->cantante=$cantante;
        $micd->año=$año;
        $micd->InsertarElCdParametros();

        $archivos = $request->getUploadedFiles();
        $destino="./fotos/";
        //var_dump($archivos);
        //var_dump($archivos['foto']);

        $nombreAnterior=$archivos['foto']->getClientFilename();
        $extension= explode(".", $nombreAnterior)  ;
        //var_dump($nombreAnterior);
        $extension=array_reverse($extension);

        $archivos['foto']->moveTo($destino.$titulo.".".$extension[0]);
        $response->getBody()->write("se guardo el cd");

        return $response;
    }

     
     public function ModificarUno($request, $response, $args) {
     	//$response->getBody()->write("<h1>Modificar  uno</h1>");
     	$ArrayDeParametros = $request->getParsedBody();
	    //var_dump($ArrayDeParametros);    	
	    $micd = new cd();
	    $micd->id=$ArrayDeParametros['id'];
	    $micd->titulo=$ArrayDeParametros['titulo'];
	    $micd->cantante=$ArrayDeParametros['cantante'];
	    $micd->año=$ArrayDeParametros['anio'];

	   	$resultado =$micd->ModificarCdParametros();
	   	$objDelaRespuesta= new stdclass();
		//var_dump($resultado);
		$objDelaRespuesta->resultado=$resultado;
		return $response->withJson($objDelaRespuesta, 200);		
		}
		*/


}