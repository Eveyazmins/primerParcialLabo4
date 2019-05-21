import { Injectable } from '@angular/core';
import { Actor } from '../class/actor';
import { Observable } from 'rxjs';
import { HttpRouteBaseService } from '../services/http-route-base.service';

@Injectable({
  providedIn: 'root'
})
export class ActorService {
  public Actores: Actor;

  constructor(public miHttp: HttpRouteBaseService) { }

  public listar(): Promise<Array<any>> {
    return this.miHttp.httpGetP('/actores/')
      .then(data => {
        return data;
      })
      .catch(err => {
        console.log( 'error de listar ===> ', err);
        return null;
      });
  }

  /*
  Este método Agregar Pelicula consume el metodo httpPostP enviando la url del servidor + el objeto pelicula.
  recibido como parametro
  */

 public AgregarActor(actor: Actor):Promise<object> {
  //const headers = this.createHeaders();
  return this.miHttp.httpPostP('/actores/alta', actor)
  //.toPromise()
  .then( r => {
    console.log(r);
    return r;
  })
  .catch( e => {
    console.log(e);
    return null;
  });
}

}
