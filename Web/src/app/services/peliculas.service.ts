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
  
  public TraerPorDescrip(descripcion: string): Observable<Pelicula> {
    return this.miHttp.httpGetO<Pelicula>('/peliculas/descripcion/' + '"' + descripcion + '"');
  }
  /*



  public TraerUno(id: string): Observable<Producto> {
    return this.miHttp.httpGetO<Producto>('/productos/' + '"' + id + '"');
  }


*/
}
