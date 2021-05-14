import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';

const baseUrl = 'http://127.0.0.1:8000/signout';


@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(private http: HttpClient) { 
    
  }

  logout(token) {
    return this.http.post(baseUrl, token);
  }

}
