import { Component, OnInit } from '@angular/core';
import { Catalogo } from '../../models/catalogo';
import { ItemCompra } from '../../models/itemcompra';
import { CatalogoService } from '../../services/catalogo.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo-admin.component.html',
  styleUrls: ['./catalogo.component.scss']
})
export class CatalogoAdminComponent implements OnInit {

  catalogos: Catalogo[];
  itemsCompra: ItemCompra[];
  constructor(private catalogosService: CatalogoService) { }

  ngOnInit(): void {
    this.getCatalogos();
  }

  getCatalogos(){
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

  updatePrice(productId: number, precio:number): void{
    // this.catalogosService.updatePrice(productId, precio);
  }

  remove(itemCompraId: number): void{
    // this.catalogosService.remove(itemCompraId);
  }
}
