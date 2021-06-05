import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';
import { ItemCarrito } from '../models/itemCarrito';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpResponse } from  '@angular/common/http';


@Injectable()

export class CarritoItemCompraService {

  constructor(private  httpClient: HttpClient
    ) { }

  API_URL = 'https://mercado-organico-django.herokuapp.com';
  //API_URL = 'http://localhost:8000';

  getShoppingCart(userId: number): Promise<any> {
    return new Promise( (resolve, reject) => {
      this.httpClient.get(`${this.API_URL}/itemcarrito/` + userId).subscribe(
        (response: HttpResponse<any>) => {
          resolve(response);
        }, (err: HttpErrorResponse) => {
          reject(err);
        });
     });
  }

  getProducto(itemId): Observable<Producto> {
    return this.httpClient.get<Producto>(`${this.API_URL}/itemproducto/` + itemId);
  }

  delProducto(userId: number, itemId): Observable<ItemCarrito> {
    return this.httpClient.delete<ItemCarrito>(`${this.API_URL}/itemcarrito/` + userId + '/itemcompra/' + itemId);
  }

}
