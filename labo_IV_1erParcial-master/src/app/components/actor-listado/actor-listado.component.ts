import { Actor } from './../../class/actor';
import { Component, OnInit } from '@angular/core';
import { ActorService } from '../../services/actor.service';

@Component({
  selector: 'app-actor-listado',
  templateUrl: './actor-listado.component.html',
  styleUrls: ['./actor-listado.component.css']
})
export class ActorListadoComponent implements OnInit {

  public listado: Actor[];

  constructor(private actorService: ActorService) { }

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



  ngOnInit() {

    this.cargarLista();
  }

}
