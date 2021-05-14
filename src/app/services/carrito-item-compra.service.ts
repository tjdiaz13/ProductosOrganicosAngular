import { Injectable } from '@angular/core';
import { Catalogo } from '../models/catalogo';
import { Producto } from '../models/producto';
import { ItemCarrito } from '../models/itemCarrito';
import { Carrito } from '../models/carrito';
import { ShoppingCar } from '../models/ShoppingCar';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpResponse } from  '@angular/common/http';


@Injectable()

export class CarritoItemCompraService {

  constructor(private  httpClient:  HttpClient
    ) { }

  API_URL  =  'http://localhost:8000';

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

  getProducto(item_id): Observable<Producto> {
    return this.httpClient.get<Producto>(`${this.API_URL}/itemproducto/` + item_id);
  }

  delProducto(user_id: number, item_id): Observable<ItemCarrito> {
    return this.httpClient.delete<ItemCarrito>(`${this.API_URL}/itemcarrito/` + user_id + '/itemcompra/' + item_id);
  }

}