import { Component, OnInit } from '@angular/core';
import {AddProductService} from '../../services/add-product.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private addProductService: AddProductService
  ) {
  }

  ngOnInit(): void {
  }

  addProduct(): void {
    console.log('Añadir Producto');

  }

  async addToCart(): Promise<any> {
    const userId = +this.route.snapshot.paramMap.get('id');
    const itemId = 3;
    let shoppingCart = await this.addProductService.getShoppingCart(userId);

    if (shoppingCart && !shoppingCart.length) {
      shoppingCart = await this.addProductService.createShoppingCart(userId);
    }
    console.log(shoppingCart);
    await this.addProductService.addItem(userId, itemId);
    window.alert('Su producto ha sido agregado al carrito de compras!');
  }
}
