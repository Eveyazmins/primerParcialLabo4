<?php
require_once 'pelicula.php';
require_once 'IApiUsable.php';

class peliculaApi extends pelicula /* implements IApiUsable */
{

	public function getAll($request, $response, $args) {
		$todos=pelicula::TraerTodos();
		$newResponse = $response->withJson($todos, 200);  
	return $newResponse;
}

public function delete($request,$response,$args){
	$id = $args["id"];
	$respuesta = pelicula::Borrar($id);
	$newResponse = $response->withJson($respuesta,200);
	return $newResponse;
}


public function getOne($request, $response, $args) {
	$id=$args['id'];
	 $retorno = pelicula::TraerUno($id);
	 $newResponse = $response->withJson($retorno, 200);  
	 return $newResponse;
}

public function getOneName($request, $response, $args) {
	$nombre=$args['nombre'];
	 $retorno = pelicula::TraerUnoPorNombre($nombre);
	 $newResponse = $response->withJson($retorno, 200);  
	 return $newResponse;
}

//TraerTodosPorActor($actor){

	public function getAllActor($request, $response, $args) {
		$actor_principal=$args['actor_principal'];
		$todos=pelicula::TraerTodosPorActor($actor_principal);
		$newResponse = $response->withJson($todos, 200);  
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
        
        if (!isset($ArrayDeParametros['tipo'])) 
        {
            return $response->withJson("tipo no puede esta vacio",404);   
        }
        else
        {
            $tipo = $ArrayDeParametros['tipo'];
        }

        if (!isset($ArrayDeParametros['fecha_estreno'])) 
        {
            return $response->withJson("fecha de estreno no puede esta vacio",404);   
        }
        else
        {
            $fecha_estreno = $ArrayDeParametros['fecha_estreno'];
        }

        if (!isset($ArrayDeParametros['cant_publico'])) 
        {
            return $response->withJson("cantidad de publico no puede esta vacio",404);   
        }
        else
        {
            $cant_publico = $ArrayDeParametros['cant_publico'];
        }
        
		if (!isset($ArrayDeParametros['actor_principal'])) 
        {
            return $response->withJson("Actor principal no puede esta vacio",404);   
        }
        else
        {
            $actor_principal = $ArrayDeParametros['actor_principal'];
        }
		
		
        $peliAux = new pelicula();
        $peliAux->nombre = $nombre;
        $peliAux->tipo = $tipo;
        $peliAux->fecha_estreno = $fecha_estreno;
        $peliAux->cant_publico = $cant_publico;
		$peliAux->actor_principal = $actor_principal;
		
		
		$archivos = $request->getUploadedFiles();
        $destino= "./fotosPelicula/";
		$default = "./fotoDefault/defecto.png";
		var_dump($archivos);
       
        if($archivos != NULL)
        {
			$nombreAnterior=$archivos['foto']->getClientFilename();
            $extension= explode(".", $nombreAnterior)  ;
            //var_dump($nombreAnterior);
            $extension=array_reverse($extension);
            $archivos['foto']->moveTo($destino.$nombre.".".$extension[0]);
            $peliAux->foto = $destino.$nombre.".".$extension[0];
        } 
        else
        {
			$peliAux->foto = $default;
        }
		

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
        
        $e = pelicula::TraerNombre($peliAux->nombre);

        if ($e == null){
            $peliAux->InsertarPeliculaParametros();
            $response->getBody()->write("Se dio de alta la pelicula: ".$peliAux->nombre,202);
            //$response->withJson("Se dio de alta al empleado: ".$nombre);

        }else {
            return $response->withJson("La pelicula ya existe ",404);
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