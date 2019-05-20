import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpRouteBaseService {

  public urlBase: string;

  constructor(public http: HttpClient) {
    // hostinger test hosting
    // this.urlBase = 'http://juntasmeyro.000webhostapp.com/api/index.php';

    // localhost
    this.urlBase = 'http://localhost/api_parcial/index.php';
  // this.urlBase = 'http://localhost:8080/laboparcial_19/server/index.php';
  }


  public httpGetP( url: string) {
    return this.http
    .get( this.urlBase + url )
    .toPromise()
    .then( this.extractData )
    .catch( this.handleError );
  }

  public httpDeleteP( url: string) {
    return this.http
    .delete( this.urlBase + url )
    .toPromise()
    .then( this.extractData )
    .catch( this.handleError );
  }

  public httpPostP( url: string, request: Object) {
    return this.http.post( this.urlBase + url, request).toPromise();
  }

  public httpGetO<T>( url: string) {
    return this.http.get<T>( this.urlBase + url );
  }

  private extractData( res: Response ) {
    return res || {};
  }

  private handleError( error: Response | any ) {
    return error;
  }
}
