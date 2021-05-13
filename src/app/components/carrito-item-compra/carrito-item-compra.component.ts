import {Component } from '@angular/core';
import { CarritoItemCompraService } from '../../services/carrito-item-compra.service';
import { ItemCompra } from '../../models/itemCompra';
import { Catalogo } from '../../models/catalogo';
import { CatalogoService } from '../../services/catalogo.service';
import {AddProductService} from '../../services/add-product.service';


@Component({
    selector: 'app-carritoItemCompra',
    templateUrl: './carrito-item-compra.component.html'
})

export class CarritoItemCompraComponent {

    cantidad: number;
    //catalogos: Catalogo[];
    itemsCompra: ItemCompra[];
    icSeleccionado: ItemCompra;

    constructor( private _carritoCompraService:CarritoItemCompraService, private catalogosService: CatalogoService,
        private addProductService: AddProductService) { 
    
    }
  
    ngOnInit(): void {
       // this.getCarrito();
    }

    
  

}