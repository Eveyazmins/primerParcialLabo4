import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from './../../class/pelicula';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-boton-borrar',
  templateUrl: './boton-borrar.component.html',
  styleUrls: ['./boton-borrar.component.css']
})
export class BotonBorrarComponent implements OnInit {

  @Input() productoBorrar: Pelicula;
  @Output() cargalista = new EventEmitter();

  constructor(private serv: PeliculasService) { }

  borrar(){
    console.log(this.productoBorrar);
    this.serv.Eliminar(this.productoBorrar.id).then( () => {
      this.cargalista.emit();
      // this.cargarLista();
      console.log('id a borrar:' + this.productoBorrar.id);
    });
  }





  ngOnInit() {
  }

}
