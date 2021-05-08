import { Injectable } from '@angular/core';
import { Catalogo } from '../models/catalogo';
import { Producto } from '../models/producto';
import { ItemCompra } from '../models/itemcompra';
import { Observable, of, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from  '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CatalogoService {

  constructor(private  httpClient:  HttpClient
    ) { }

  //API_URL  =  'https://mercado-organico.herokuapp.com';
  API_URL  =  'http://localhost:8000';
  private catalogos: Array<Catalogo>;

  private itemsCompra: Array<ItemCompra>;

  getCatalogos(): Observable<Catalogo[]> {
    return this.httpClient.get<Catalogo[]>(`${this.API_URL}/catalogo/`);
  }

  getCatalogo(id: number): Observable<Catalogo> {
    return of(this.catalogos.find(catalogo => catalogo.id === id));
  }

  getItemsCompra(catalogo_id: number): Observable<ItemCompra[]> {
    return this.httpClient.get<ItemCompra[]>(`${this.API_URL}/catalogo/` + catalogo_id + '/items');
  }

  getProducto(catalogo_id: number, item_id): Observable<Producto> {
    return this.httpClient.get<Producto>(`${this.API_URL}/catalogo/` + catalogo_id + '/itemproducto/' + item_id);
  }

}
