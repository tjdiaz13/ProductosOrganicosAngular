import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://127.0.0.1:8000/signin';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private http: HttpClient) { 
    
      console.log("Servicio listo para usar"); 
  }

  create(data): Observable<any> {
    return this.http.post(baseUrl, data);
  }
}

