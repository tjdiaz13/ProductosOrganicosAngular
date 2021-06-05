import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private  http: HttpClient
  ) { }

  API_URL  =  'https://mercado-organico-django.herokuapp.com';
  // API_URL  =  'http://localhost:8000';

  createOrder(data: any): Promise<any> {
    const headers = { 'content-type': 'application/json'};
    return new Promise( (resolve, reject) => {
      this.http.post(`${this.API_URL}/orden/`,
        {
          precio_total: data.total_price,
          fecha_compra: data.shopping_date,
          fecha_entrega: data.delivery_date,
          hora_entrega: data.delivery_time,
          ciudad_entrega: data.city,
          direccion_entrega: data.address,
          metodo_pago: data.pay_method,
          numero_tarjeta: data.card_number,
          numero_cuota: data.quota,
          carrito: data.user_id
       },
      ).subscribe(
        (response) => {
          resolve(response);
        }, (err: HttpErrorResponse) => {
          reject(err);
        });
    });
  }
}
