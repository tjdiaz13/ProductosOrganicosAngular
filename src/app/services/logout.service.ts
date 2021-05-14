import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const baseUrl = 'http://127.0.0.1:8000/signout';


@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(private http: HttpClient) {

  }

  logout(token) {
    console.log('Started.. in service');
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Token ' + token);
    return this.http.post(baseUrl, null, {headers}).toPromise()
        .then(res => console.log(res));
  }
}
