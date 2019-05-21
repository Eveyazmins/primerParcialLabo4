import { Pelicula } from './../../class/pelicula';
import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  public listado: Pelicula[];

  //En constructor, setear servicio de peliculas
  constructor( private peliculasService: PeliculasService ) { }

  /*Metodo para traer todas peliculas
  Llamo al método Listar() de mi servicio de peliculas. 
  Guardo los datos recuperados en variable datos (la muestro por consola). 
  Luego el contenido de datos lo paso a mi listado 
  */

   traerTodos() {
    this.peliculasService.listar()
    .then(datos => {
      console.log('listado de peliculas:', datos);
      this.listado = datos;
    });
   }

  /*
  Punto 1:
  Metodo para traer todas peliculas
  Llamo al método Listar() de mi servicio de peliculas. 
  Guardo los datos recuperados en variable datos (la muestro por consola). 
  Luego el contenido de datos lo paso a mi listado 
  */

   public cargarLista() {
    this.peliculasService.listar()
    .then(datos => {
      console.log('listado de peliculas:', datos);
      this.listado = datos;
    });
   }

   public mostarProd(event){
      console.log(event.descripcion);
   }

  //Al iniciar, llamo al método CargarLista que utiliza el servicio de peliculas
  ngOnInit() {
    this.cargarLista();
  }

}
