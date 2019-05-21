import { Injectable } from '@angular/core';
import { Pelicula } from '../class/pelicula';
import { Observable } from 'rxjs';
import { HttpRouteBaseService } from '../services/http-route-base.service';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  public Peliculas: Pelicula;

  constructor(public miHttp: HttpRouteBaseService) { }

  public listar(): Promise<Array<any>> {
    return this.miHttp.httpGetP('/peliculas/')
      .then(data => {
        return data;
      })
      .catch(err => {
        console.log( 'error de listar ===> ', err);
        return null;
      });
  }

  public Eliminar(id: number): Promise<object> {
    return this.miHttp.httpDeleteP('/peliculas/' + id);
  } 
  
  /*
  public TraerPorDescrip(descripcion: string): Observable<Pelicula> {
    return this.miHttp.httpGetO<Pelicula>('/peliculas/descripcion/' + '"' + descripcion + '"');
  }¨
  */


  /*
  Este método consume el el metodo httpGetO enviando la url del servidor + el nombre de la pelicula
  recibido como parametro.
  */
  public TraerPorNombre(nombre: string): Observable<Pelicula> {
    return this.miHttp.httpGetO<Pelicula>('/peliculas/nombre/' + nombre);
  }

  /*
  Este método Agregar Pelicula consume el metodo httpPostP enviando la url del servidor + el objeto pelicula.
  recibido como parametro
  */

  public AgregarPelicula(pelicula: Pelicula):Promise<object> {
    //const headers = this.createHeaders();
    return this.miHttp.httpPostP('/peliculas/alta', pelicula)
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


  /*

  public TraerUno(id: string): Observable<Producto> {
    return this.miHttp.httpGetO<Producto>('/productos/' + '"' + id + '"');
  }

*/
}
