import { Injectable } from '@angular/core';
import { Catalogo } from '../models/catalogo';
import { Producto } from '../models/producto';
import { ItemCompra } from '../models/itemcompra';
import { ShoppingCar } from '../models/ShoppingCar';
//import { DEPORTISTAS } from './mock-deportistas';
import { Observable, of } from 'rxjs';
import { HttpClient } from  '@angular/common/http';


@Injectable()

export class CarritoItemCompraService {

  constructor(private  httpClient:  HttpClient
    ) { }

  API_URL  =  'http://localhost:8000';
  private catalogos: Array<Catalogo>;

  private itemsCompra: Array<ItemCompra>;

  getCatalogos(): Observable<Catalogo[]> {
    return this.httpClient.get<Catalogo[]>(`${this.API_URL}/catalogo/`);
  }

  getCarrito(_id: number): Observable<ItemCompra[]> {
    return this.httpClient.get<ItemCompra[]>(`${this.API_URL}/itemcarrito/` + _id);
  }

  getProducto(_id: number, item_id): Observable<Producto> {
    return this.httpClient.get<Producto>(`${this.API_URL}/catalogo/` + _id + '/itemproducto/' + item_id);
  }
}