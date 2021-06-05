import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';
import { ItemCarrito } from '../models/itemCarrito';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpResponse } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdenuserService {

  constructor(private  httpClient: HttpClient) { }

  API_URL  =  'https://mercado-organico-django.herokuapp.com';
  //API_URL  =  'http://127.0.0.1:8000';

  getOrderUser(userId: number): Promise<any> {
    return new Promise( (resolve, reject) => {
      this.httpClient.get(`${this.API_URL}/getorden/` + userId).subscribe(
        (response: HttpResponse<any>) => {
          resolve(response);
        }, (err: HttpErrorResponse) => {
          reject(err);
        });
     });
  }
  getOrderOrden(ordenId: number): Promise<any> {
    return new Promise( (resolve, reject) => {
      this.httpClient.get(`${this.API_URL}/get_order_unit/` + ordenId).subscribe(
        (response: HttpResponse<any>) => {
          resolve(response);
        }, (err: HttpErrorResponse) => {
          reject(err);
        });
     });
  }

  
}
