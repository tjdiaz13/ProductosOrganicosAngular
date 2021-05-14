import { Injectable } from '@angular/core';
import { Catalogo } from '../models/catalogo';
import { Producto } from '../models/producto';
import { ItemCompras } from '../models/itemCarrito';
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

  private itemsCompra: Array<ItemCompras>;

  getCarrito(_id: number): Observable<ItemCompras[]> {
    return this.httpClient.get<ItemCompras[]>(`${this.API_URL}/itemcarrito/` + _id);
  }
  getCatalogos(): Observable<Catalogo[]> {
    return this.httpClient.get<Catalogo[]>(`${this.API_URL}/catalogo/`);
  }

  getCatalogo(id: number): Observable<Catalogo> {
    return of(this.catalogos.find(catalogo => catalogo.id === id));
  }

  getItemsCompra(catalogo_id: number): Observable<ItemCompras[]> {
    return this.httpClient.get<ItemCompras[]>(`${this.API_URL}/catalogo/` + catalogo_id + '/items');
  }

  getProducto(catalogo_id: number, item_id): Observable<Producto> {
    return this.httpClient.get<Producto>(`${this.API_URL}/catalogo/` + catalogo_id + '/itemproducto/' + item_id);
  }
  
}