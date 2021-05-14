import {Component } from '@angular/core';
import { CarritoItemCompraService } from '../../services/carrito-item-compra.service';
import { ItemCarrito } from '../../models/itemcarrito';


@Component({
    selector: 'app-carritoItemCompra',
    templateUrl: './carrito-item-compra.component.html'
})

export class CarritoItemCompraComponent {

    itemsCarrito: ItemCarrito[];
    userID: number;

    constructor( private carritoService:CarritoItemCompraService) {

    }

    ngOnInit(): void {
        this.userID =  Number(localStorage.getItem('userId'));
        this.getItemsCarrito();
    }

    async getItemsCarrito(): Promise<any>{
        const carrito = await this.carritoService.getShoppingCart(this.userID);
        console.log('algo2', carrito[0].item_compras);
        this.getProductos(carrito[0].item_compras, 0);
    }

    getProductos(items: ItemCarrito[], index: number): void{
      if (index < items.length)
      {
        const item = items[index];
        this.carritoService.getProducto(item.item_compra_id).subscribe(
        producto => {
          item.producto = producto[0];
          items[index] = item;
          index++;
          this.getProductos(items, index);
        });
      }
      else
      {
        this.itemsCarrito = items;
        console.log('test5', this.itemsCarrito);
        return;
      }
  }


}
