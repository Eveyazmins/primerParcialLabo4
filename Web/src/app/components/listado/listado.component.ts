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

  constructor( private peliculasService: PeliculasService ) { }

   traerTodos() {
    this.peliculasService.listar()
    .then(datos => {
      console.log('listado de productos:', datos);
      this.listado = datos;
    });
   }

   public cargarLista() {
    this.peliculasService.listar()
    .then(datos => {
      console.log('listado de productos:', datos);
      this.listado = datos;
    });
   }

   public mostarProd(event){
      console.log(event.descripcion);
   }

  ngOnInit() {
    this.cargarLista();
  }

}
