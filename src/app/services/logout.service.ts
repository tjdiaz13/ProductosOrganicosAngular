import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';

const baseUrl = 'http://127.0.0.1:8000/signout';


@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(private http: HttpClient) { }

  API_URL  =  'http://localhost:8000/';

  logout() {
    const headers = { 'content-type': 'application/json'};
    return new Promise( (resolve, reject) => {
     this.http.post(`${this.API_URL}/signout/`,
       {
        
      },
      {headers}
     ).subscribe(
       (response) => {
         resolve(response);
       }, (err: 0) => {
         reject(err);
       });
    });
  }

}
