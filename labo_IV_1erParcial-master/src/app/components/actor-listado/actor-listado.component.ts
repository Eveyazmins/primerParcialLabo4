import { Actor } from './../../class/actor';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActorService } from '../../services/actor.service';
import { Pelicula } from 'src/app/class/pelicula';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-actor-listado',
  templateUrl: './actor-listado.component.html',
  styleUrls: ['./actor-listado.component.css']
})
export class ActorListadoComponent implements OnInit {

  public listado: Actor[];
  public listadoPeliculas:Pelicula[];
  @Input() actorPeli: Actor;
  public actorPeli2 : Actor;

  constructor(private actorService: ActorService, private peliculaService: PeliculasService) { 
    this.actorPeli2 = new Actor();
  }

    /*Metodo para traer todas las estrellas de pelicula cargadas.
  Llamo al método Listar() de mi servicio de actor. 
  Guardo los datos recuperados en variable datos (la muestro por consola). 
  Luego el contenido de datos lo paso a mi listado 
  */

 traerTodos() {
  this.actorService.listar()
  .then(datos => {
    console.log('listado de actores:', datos);
    this.listado = datos;
  });
 }


 public cargarLista() {
  this.actorService.listar()
  .then(datos => {
    console.log('listado de actores:', datos);
    this.listado = datos;
  });
 }

 public cargarPeliculasActor()
 {
   console.log("llego"+ this.actorPeli2.nombre);
  this.peliculaService.listarPorActor(this.actorPeli2.nombre)
  .then(datos => {
    console.log('listado de peliculas:', datos);
    this.listadoPeliculas = datos;
  });

 }


 /*
   borrar(){
    console.log(this.productoBorrar);
    this.serv.Eliminar(this.productoBorrar.id).then( () => {
      this.cargalista.emit();
      // this.cargarLista();
      console.log('id a borrar:' + this.productoBorrar.id);
    });
  }
 */



  ngOnInit() {

    this.cargarLista();
    //this.cargarPeliculasActor();
  }

}
