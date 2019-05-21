import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Pelicula } from './../../class/pelicula';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

/*
Si encuentra la pelicula, el metodo Output (evento emit) envia un objeto de tipo Pelicula con los datos 
de la misma recuperados del servidor. Los recibe el componente Detalle para completar el form.
*/
  @Output() encontroPeli = new EventEmitter();
  public pelicula: Pelicula;
  public peliNull: Pelicula;

  constructor(private serv: PeliculasService) { 
    this.pelicula = new Pelicula();
    this.peliNull = new Pelicula();
   }


/*
El metodo traerPorNombre invoca al metodo TraerPorNombre del servicio de peliculas enviando el nombre
de la pelicula recuperado del form con NgModel.
Si el servicio retorna un response OK (objeto Pelicula encontrado), va a asignar el objeto recuperado
a mi objeto pelicula y lanza el evento emit. 
*/
public traerPorNombre() {
  console.log( '=>', this.pelicula.nombre);
  this.serv.TraerPorNombre(this.pelicula.nombre).subscribe(response => {
    if(response.nombre){
      this.pelicula = response;
      this.encontroPeli.emit({prod: this.pelicula});
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
