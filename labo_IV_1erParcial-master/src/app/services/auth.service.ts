import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import {isNullOrUndefined} from "util"; 
import {UserInterface} from '../models/user-interface';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  headers : HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });


  constructor(private http: HttpClient) {}

  loginuser(email:string, password:string):Observable<any>
  {
    const url_api = "http://localhost:8080/api_peliculas/index.php/login/";
    return this.http.post<UserInterface>(url_api, {email, password}, {headers: this.headers})
    .pipe(map(data=>data));
  }

  setUser(user):void
  {
    let user_string = JSON.stringify(user);
    localStorage.setItem("currentUser", user_string)
  }

  setToken(token):void
  {
    localStorage.setItem("accessToken", token);
  }

  getToken()
  {
    return localStorage.getItem("accessToken");
  }

  getCurrentUser():UserInterface
  {
    let user_string = localStorage.getItem("currentUser");
    if(isNullOrUndefined(user_string)){
      let user:UserInterface = JSON.parse(user_string);
      return user;
    }else
    {
      return null;
    }
    
  }




}