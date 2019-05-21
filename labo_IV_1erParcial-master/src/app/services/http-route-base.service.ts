import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpRouteBaseService {

  public urlBase: string;

  constructor(public http: HttpClient) {
    // hostinger test hosting
    // this.urlBase = 'http://juntasmeyro.000webhostapp.com/api/index.php';

    /* localhost
    Aca conecta con mi servidor
    */
    //this.urlBase = 'http://localhost/api_parcial/index.php';
    //this.urlBase = 'http://localhost:8080/laboparcial_19/server/index.php';
    //this.urlBase = 'http://localhost:8080/api_peliculas/index.php'; --> uso este para casa

    //uso este para note trabajo
    this.urlBase = 'http://localhost:80/api_peliculas/index.php';
  }

  private createHeaders() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return headers;
  }

  /*Punto 1 (Obtener P)
  Este método conecta con mi base + url que recibe por parametro y obtiene los datos, en este caso 
  de peliculas.
  Los retorna como response mediante metodo ExtractData.
  */
  public httpGetP( url: string) {
    return this.http
    .get( this.urlBase + url )
    .toPromise()
    .then( this.extractData )
    .catch( this.handleError );
  }

  //Punto 2 (Borrar P)
  
  public httpDeleteP( url: string) {
    return this.http
    .delete( this.urlBase + url )
    .toPromise()
    .then( this.extractData )
    .catch( this.handleError );
  }

/*
Metodo para Post (Alta pelicula / alta actor)
Recibe url + objeto
*/
  public httpPostP( url: string, request: Object) {
    const headers = this.createHeaders();
    return this.http.post( this.urlBase + url, request, { headers: headers }).toPromise();
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
