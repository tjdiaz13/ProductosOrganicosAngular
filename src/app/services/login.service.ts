import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { Auth } from '../models/auth';

const baseUrl = 'https://mercado-organico-django.herokuapp.com/signin';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  private auth: Auth | undefined;

  get Auth(): Auth {
    return { ...this.Auth! };
  }

  constructor(private http: HttpClient) {
      console.log('Servicio listo para usar');
  }

  create(data): Observable<any> {
    return this.http.post<Auth>(baseUrl, data);
  }

  gettoken(response) {
    this.auth = response;
    console.log(this.auth);
  }
}

