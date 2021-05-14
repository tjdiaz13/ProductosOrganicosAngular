import {Component } from '@angular/core';
import { CarritoItemCompraService } from '../../services/carrito-item-compra.service';
import { Catalogo } from '../../models/catalogo';
import { Carrito } from '../../models/carrito';
import { ItemCompra } from '../../models/itemcompra';
import { CatalogoService } from '../../services/catalogo.service';
import {AddProductService} from '../../services/add-product.service';


@Component({
    selector: 'app-carritoItemCompra',
    templateUrl: './carrito-item-compra.component.html'
})

export class CarritoItemCompraComponent {

    cantidad: number;
    catalogos: Catalogo[];
    carrito: Carrito[];
    itemsCompra: ItemCompra[];
    icSeleccionado: ItemCompra;
    userID: number;
    userNAME: string;

    constructor( private _carritoCompraService:CarritoItemCompraService, private catalogosService: CatalogoService,
        private addProductService: AddProductService) { 
    
    }
  
    ngOnInit(): void {
        this.userID =  Number(localStorage.getItem('userId'));
        this.userNAME = localStorage.getItem('username');
        console.log(localStorage.getItem('token'));
        this.getCarrito();
    }

    getCarrito(): void{
        this._carritoCompraService.getCarrito(this.userID).subscribe(
            carrito => {
                console.log(carrito);
                
            });
    }
    getCatalogos(): void{
        this.catalogosService.getCatalogos().subscribe(
          catalogos => {
            const listadoCatalogos = catalogos;
            this.getItemsCompra(listadoCatalogos[0].id);
          });
      }
    
      getItemsCompra(catalogoId: number): void{
        this.catalogosService.getItemsCompra(catalogoId).subscribe(
        itemsCompra => {
          this.getProductos(catalogoId, itemsCompra, 0);
        });
      }
      getProductos(catalogoId: number, items: ItemCompra[], index: number): void{
        if (index < items.length)
        {
          const item = items[index];
          console.log('test4', item);
          this.catalogosService.getProducto(catalogoId, item.id).subscribe(
          producto => {
            item.producto = producto[0];
            items[index] = item;
            console.log('test3', items[index]);
            index++;
            this.getProductos(catalogoId, items, index);
          });
        }
        else
        {
          this.itemsCompra = items;
          console.log('test', this.itemsCompra);
          return;
        }
    }
    
}