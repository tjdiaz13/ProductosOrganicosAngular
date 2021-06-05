import { Injectable } from '@angular/core';
import { Catalogo } from '../models/catalogo';
import { Producto } from '../models/producto';
import { Observable, of, pipe } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ItemCompra } from '../models/itemCompra';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {

  constructor(private httpClient: HttpClient
  ) { }

  API_URL = 'https://mercado-organico-django.herokuapp.com';

  private catalogos: Array<Catalogo>;

  private itemsCompra: Array<ItemCompra>;

  getCatalogos(): Observable<Catalogo[]> {
    return this.httpClient.get<Catalogo[]>(`${this.API_URL}/catalogo/`);
  }

  getCatalogo(id: number): Observable<Catalogo> {
    return of(this.catalogos.find(catalogo => catalogo.id === id));
  }

  getItemsCompra(catalogoId: number): Observable<ItemCompra[]> {
    return this.httpClient.get<ItemCompra[]>(`${this.API_URL}/catalogo/` + catalogoId + '/items');
  }

  getProducto(catalogoId: number, itemId): Observable<Producto> {
    return this.httpClient.get<Producto>(`${this.API_URL}/catalogo/` + catalogoId + '/itemproducto/' + itemId);
  }

}
