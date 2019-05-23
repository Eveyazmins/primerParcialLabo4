import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from './../../class/pelicula';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-boton-actorpelicula',
  templateUrl: './boton-actorpelicula.component.html',
  styleUrls: ['./boton-actorpelicula.component.css']
})
export class BotonActorpeliculaComponent implements OnInit {

  @Input() actorPelicula: Pelicula;
  public listado: Pelicula[];
 // @Output() cargalista = new EventEmitter();

  constructor(private serv: PeliculasService) { }

  listarPeliculaPorActor(){
    console.log(this.actorPelicula);
    this.serv.listarPorActor(this.actorPelicula.nombre).then(datos => {
    this.listado = datos;
      console.log('nombre a mostrar:' + this.actorPelicula.nombre);
      console.log(this.listado);
    });
  }

  ngOnInit() {
  }

}
