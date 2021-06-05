import { Component, OnInit } from '@angular/core';
import { OrdenuserService } from '../../services/ordenuser.service';
import {Orden} from '../../models/orden';
// Import pdfmake-wrapper and the fonts to use
import { PdfMakeWrapper, Txt } from 'pdfmake-wrapper';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas'; // Todavía no lo usamos



@Component({
  selector: 'app-ordenuser',
  templateUrl: './ordenuser.component.html'
})
export class OrdenuserComponent implements OnInit {


  //itemsCarrito: ItemCarrito[];
  ordenCarrito: Orden[];
  userID: number;
  ordenID: number;
  precioTotal: number;
  status: string;

  constructor(private ordenCompra: OrdenuserService) { 
    
  }

  ngOnInit(): void {
    this.userID =  Number(localStorage.getItem('userId'));
    this.getOrden();
  }

  async getOrden(): Promise<any>{
    const orden = await this.ordenCompra.getOrderUser(this.userID);
    this.ordenCarrito = orden; 
  }

  revCarrito(Id: number): void{
    
  }

  async desCarrito(Id: number): Promise<any>{
    
    
    this.ordenID = Id; 
    const orden = await this.ordenCompra.getOrderOrden(this.ordenID);
    
    const doc = new jsPDF();
    doc.text('Numero de Orden: ' + orden[0].id + '', 10, 10);
    doc.text('Fecha de la Orden: '+ orden[0].fecha_compra + '', 10, 20);
    doc.save('Reporte' + orden[0].id + 'compra.pdf');
  }

}
