import { Component, OnInit } from '@angular/core';
import { OrdenuserService } from '../../services/ordenuser.service';
import {Orden} from '../../models/orden';
import { Router, RouterModule } from '@angular/router';
// Import pdfmake-wrapper and the fonts to use
import { PdfMakeWrapper, Txt } from 'pdfmake-wrapper';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas'; // Todavía no lo usamos
import { CarritoItemCompraService } from '../../services/carrito-item-compra.service';
import {ItemCarrito} from '../../models/itemCarrito';



@Component({
  selector: 'app-ordenuser',
  templateUrl: './ordenuser.component.html'
})
export class OrdenuserComponent implements OnInit {

  itemsCarrito: ItemCarrito[];
  ordenCarrito: Orden[];
  userID: number;
  ordenID: number;
  precioTotal: number;
  status: string;

  constructor(
    private router: Router,
    private carritoService: CarritoItemCompraService,
    private ordenCompra: OrdenuserService
    ) { }

  ngOnInit(): void {
    this.userID =  Number(localStorage.getItem('userId'));
    this.getOrden();
    this.getItemsCarrito();
  }

  async getOrden(): Promise<any>{
    const orden = await this.ordenCompra.getOrderUser(this.userID);
    this.ordenCarrito = orden;
  }

  revCarrito(Id: number): void{
    this.router.navigate(['/ordenreview']);
  }

  async desCarrito(Id: number): Promise<any>{


    this.ordenID = Id;
    const orden = await this.ordenCompra.getOrderOrden(this.ordenID);

    const doc = new jsPDF();
    doc.text('Resumen De Compra' + '', 80, 10);
    doc.text('Numero de Orden: ' + orden[0].id + '', 10, 20);
    doc.text('Fecha de la Orden: '+ orden[0].fecha_compra + '', 10, 30);
    doc.text('Recibo compra: '+ orden[0].carrito + '', 10, 40);
    doc.text('Metodo de Pago: '+ orden[0].metodo_pago + '', 10, 50);
    doc.text('Informacion de los productos de la compra: ', 10, 60);
    doc.text('_______________________________________________________________', 10, 70);
    let total = 100;
    let ittotal = 1;
    this.itemsCarrito.forEach((item) => {
      doc.text('Producto'+ ittotal + ': ' + item.producto.nombre + '', 10, total);
      doc.text('Cantidad'+ ': ' + item.cantidad + '', 90, total);
      doc.text('Precio'+ ': ' + item.producto.precio + '   COP', 130, total);
      total = total + 10;
      ittotal = ittotal + 1;
    });
    doc.text('_______________________________________________________________' + '', 10, total+20);
    doc.text('Total de la compra: '+ orden[0].precio_total + '', 10, total+30);
    doc.save('Reporte' + orden[0].id + 'compra.pdf');
  }

  async getItemsCarrito(): Promise<any>{
    const carrito = await this.carritoService.getShoppingCart(this.userID);
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
    }
   }

}
