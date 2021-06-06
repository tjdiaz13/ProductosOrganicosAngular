import { Component, OnInit } from '@angular/core';
import { CatalogoService } from '../../services/catalogo.service';
import { AddProductService } from '../../services/add-product.service';
import { Router, RouterModule } from '@angular/router';
import { ItemCompra } from '../../models/itemCompra';
import { Catalogo } from '../../models/catalogo';


@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})
export class CatalogoComponent implements OnInit {
  cantidad: number;
  catalogos: Catalogo[];
  itemsCompra: ItemCompra[];
  icSeleccionado: ItemCompra;
  cantidadSeleccionada = 0;
  subtotal = 0;
  disponibilidad: number;
  admin = false;

  constructor(
    private catalogosService: CatalogoService,
    private router: Router,
    private addProductService: AddProductService
  ) { }

  ngOnInit(): void {
    console.log(localStorage.getItem('token'));
    this.checkAdmin();
    this.getCatalogos();
  }

  checkAdmin(): void {
    if(localStorage.getItem('username').indexOf('dmin')!=-1){
      this.admin = true;
    }
    else{
      this.admin = false;
    }
  }

  getCatalogos(): void {
    this.catalogosService.getCatalogos().subscribe(
      catalogos => {
        const listadoCatalogos = catalogos;
        this.catalogos = catalogos;
        this.getItemsCompra(listadoCatalogos[0].id);
      });
  }

  getItemsCompra(catalogoId: number): void {
    this.catalogosService.getItemsCompra(catalogoId).subscribe(
      itemsCompra => {
        this.getProductos(catalogoId, itemsCompra, 0);
      });
  }

  getProductos(catalogoId: number, items: ItemCompra[], index: number): void {
    if (index < items.length) {
      const item = items[index];
      this.catalogosService.getProducto(catalogoId, item.id).subscribe(
        producto => {
          item.producto = producto[0];
          items[index] = item;
          index++;
          this.getProductos(catalogoId, items, index);
        });
    }
    else {
      this.itemsCompra = items;
      console.log('test', this.itemsCompra);
      return;
    }
  }

  selectedProduct(ic: ItemCompra): void {
    this.icSeleccionado = ic;
    this.updateDisponibilidad();
    this.updateSubTotal();
  }

  unselect(): void {
    this.icSeleccionado = null;
    this.router.navigate(['/catalogo']);
  }

  async addToCart(item: ItemCompra): Promise<any> {
    if (this.cantidadSeleccionada < 1) {
      window.alert('Cantidad no válida');
    } else {
      const userId = Number(localStorage.getItem('userId'));
      let shoppingCart = await this.addProductService.getShoppingCart(userId);

      if (shoppingCart && !shoppingCart.length) {
        shoppingCart = await this.addProductService.createShoppingCart(userId);
      }
      console.log(shoppingCart);
      await this.addProductService.addItem(userId, item.id, this.cantidadSeleccionada);
      window.alert('Su producto ha sido agregado al carrito de compras!');
      this.decrease(item);
    }
  }

  decrease(item: ItemCompra): void{
      this.addProductService.decItem(item.producto.id, this.cantidadSeleccionada).subscribe(
      producto => {

      });
      this.itemsCompra[item.id - 1].producto.cantidad -= this.cantidadSeleccionada;
      this.icSeleccionado.producto.cantidad = this.itemsCompra[item.id - 1].producto.cantidad;
      this.cantidadSeleccionada = 0;
      this.updateDisponibilidad();
      this.updateSubTotal();
  }

  remove(itemC: ItemCompra): void{
    this.catalogosService.remove(this.catalogos[0].id, itemC.id).subscribe(
    item => {
    this.itemsCompra[itemC.id - 1].visibilidad = false;
    });
  }

  add(itemC: ItemCompra): void{
    this.catalogosService.add(this.catalogos[0].id, itemC.id).subscribe(
    item => {
    this.itemsCompra[itemC.id - 1].visibilidad = true;
    });
  }

  updateDisponibilidad() {
    this.disponibilidad = this.icSeleccionado.producto.cantidad;
  }

  cantidad_up() {
    var cantidadValida = this.cantidadSeleccionada + 1
    if (cantidadValida<=this.icSeleccionado.producto.cantidad) {
      this.cantidadSeleccionada+=1;
    }
    else{
      this.cantidadSeleccionada=this.icSeleccionado.producto.cantidad;
    }
    this.updateSubTotal();
  }

  cantidad_down() {
    var cantidadValida = this.cantidadSeleccionada - 1
    if (cantidadValida >= 0) {
      this.cantidadSeleccionada-=1;
    }
    else{
      this.cantidadSeleccionada = 0;
    }
    this.updateSubTotal();
  }

  updateSubTotal() {​​​
    this.subtotal = ​this.cantidadSeleccionada * this.icSeleccionado.producto.precio;
  }
}
