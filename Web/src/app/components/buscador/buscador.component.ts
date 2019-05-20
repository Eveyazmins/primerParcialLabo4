import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Pelicula } from './../../class/pelicula';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {


  @Output() encontroArt = new EventEmitter();
  public pelicula: Pelicula;
  public peliNull: Pelicula;

  constructor(private serv: PeliculasService) { 
    this.pelicula = new Pelicula(0, '', '', '', 0, '');
    this.peliNull = new Pelicula(0, '', '', '', 0, '');
   }





public traerPordesc() {
  console.log( '=>', this.pelicula.nombre);
  this.serv.TraerPorDescrip(this.pelicula.nombre).subscribe(response => {
    if(response.nombre){
      this.pelicula = response;
      this.encontroArt.emit({prod: this.pelicula});
    } else {
      this.pelicula = this.peliNull;
    }

    console.log(response);
  },
      error => {
          console.error(error);
      });
}

  ngOnInit() {
  }

}

   /*
  public traerUno() {
    console.log(this.pelicula.id);
    this.ProductoService.TraerUno(this.pelicula.id).subscribe(response => {
        console.log(response);
    },
        error => {
            console.error(error);
        });
}*/
