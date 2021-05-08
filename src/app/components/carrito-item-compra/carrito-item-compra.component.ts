import {Component } from '@angular/core';
import { CarritoItemCompraService } from '../../services/carrito-item-compra.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-carritoItemCompra',
    templateUrl: './carrito-item-compra.component.html',
    styleUrls: ['./carrito-item-compra.component.scss']
})

export class CarritoItemCompraComponent{

    constructor(private _carritoItemCompra:CarritoItemCompraService) { 

    
    }

}