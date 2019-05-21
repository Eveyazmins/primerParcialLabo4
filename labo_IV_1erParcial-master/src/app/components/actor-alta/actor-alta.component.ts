import { Component, OnInit } from '@angular/core';
import { Actor } from './../../class/actor';
import { ActorService } from '../../services/actor.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.css']
})
export class ActorAltaComponent implements OnInit {

  public actor: Actor;
  enviado: boolean;
  invalido: boolean;

  constructor(private actorService: ActorService) {
    this.actor = new Actor();
   }

     /*Una vez completos los campos de alta, el boton agregar actor actua como un enviar llamando al
  metodo onSubmit.
  Si todo es válido, se llama al servicio Agregar actor enviando como parámetro el Objeto pelicula
  creado en este componente y completo desde el formulario con NgModel.
  
  */


  onSubmit(miform: NgForm) {
    console.log(miform);
    console.log(this.actor);
    this.invalido = false;
    if (miform.valid) {
      console.log('formulario valido');
      this.actorService.AgregarActor(this.actor)
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

  ngOnInit() {
  }

}
