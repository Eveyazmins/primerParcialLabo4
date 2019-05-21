import { Injectable } from '@angular/core';
import { Producto } from '../class/producto';
import { Observable } from 'rxjs';
import { HttpRouteBaseService } from '../services/http-route-base.service';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  public Productos: Producto;

  constructor(public miHttp: HttpRouteBaseService) { }

  public listar(): Promise<Array<any>> {
    return this.miHttp.httpGetP('/productos/')
      .then(data => {
        return data;
      })
      .catch(err => {
        console.log( 'error de listar ===> ', err);
        return null;
      });
  }

  public Eliminar(id: string): Promise<object> {
    return this.miHttp.httpDeleteP('/productos/' + id);
  }

  public TraerUno(id: string): Observable<Producto> {
    return this.miHttp.httpGetO<Producto>('/productos/' + '"' + id + '"');
  }

  public TraerPorDescrip(descripcion: string): Observable<Producto> {
    return this.miHttp.httpGetO<Producto>('/productos/descripcion/' + '"' + descripcion + '"');
  }

}
