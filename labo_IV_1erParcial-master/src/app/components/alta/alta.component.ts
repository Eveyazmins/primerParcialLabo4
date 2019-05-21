import { Component, OnInit } from '@angular/core';
import { Pelicula } from './../../class/pelicula';
import { PeliculasService } from '../../services/peliculas.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.css']
})
export class AltaComponent implements OnInit {

  public pelicula: Pelicula;
  enviado: boolean;
  invalido: boolean;

  constructor(private peliculasService: PeliculasService) { 
    this.pelicula = new Pelicula();
  }


  /*Una vez completos los campos de alta, el boton agregar pelicula actua como un enviar llamando al
  metodo onSubmit.
  Si todo es válido, se llama al servicio Agregar pelicula enviando como parámetro el Objeto pelicula
  creado en este componente y completo desde el formulario con NgModel.
  
  */


  onSubmit(miform: NgForm) {
    console.log(miform);
    console.log(this.pelicula);
    this.invalido = false;
    if (miform.valid) {
      console.log('formulario valido');
      this.peliculasService.AgregarPelicula(this.pelicula)
      .then( r => {
        this.enviado = true;
      })
      .catch( e => {
        console.log(e);
      });
    } else {
      this.invalido = true;
    }
  }

/*
     traerTodos() {
    this.peliculasService.listar()
    .then(datos => {
      console.log('listado de peliculas:', datos);
      this.listado = datos;
    });
   }
  */
  ngOnInit() {
  }

}
