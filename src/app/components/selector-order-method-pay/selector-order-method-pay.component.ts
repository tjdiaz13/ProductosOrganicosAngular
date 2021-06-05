import { Component, OnInit } from '@angular/core';
import {OrderService} from '../../services/order.service';
import * as moment from 'moment';
import {Router} from "@angular/router";

@Component({
  selector: 'app-selector-order-method-pay',
  templateUrl: './selector-order-method-pay.component.html',
  styleUrls: ['./selector-order-method-pay.component.scss']
})
export class SelectorOrderMethodPayComponent implements OnInit {

  selectedMethod: string;
  quotaNum: number;
  cardNum: number;

  constructor(
    private orderService: OrderService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.quotaNum = null;
    this.cardNum = null;
    this.selectedMethod = 'efectivo';
  }

  async goToPayment(): Promise<any> {
    this.cleanInputs();
    if (this.selectedMethod !== 'efectivo' && !this.cardNum) {
      window.alert('Diligencia el número de tarjeta');
    } else if (this.selectedMethod === 'credito' && !this.quotaNum) {
      window.alert('Diligencia el número de cuotas');
    } else {
      const response = await this.callOrderService();
      console.log(response);
      if (response) {
        window.alert('Su compra ha sido realizada con éxito');
        this.router.navigate(['/home']);
      }
    }
  }

  cleanInputs(): void {
    if (this.selectedMethod === 'efectivo') {
      this.cardNum = null;
      this.quotaNum = null;
    } else if (this.selectedMethod === 'debito') {
      this.quotaNum = null;
    }
  }

  async callOrderService(): Promise<any> {
    try {
      const storage = sessionStorage.getItem('paymentData');
      const storageJson = JSON.parse(storage);
      const now = moment().format('YYYY-MM-DD hh:mm:ss');
      const userId = Number(localStorage.getItem('userId'));

      const data = {
        shopping_date: now,
        delivery_date: moment(storageJson.deliveryDate).format('YYYY-MM-DD'),
        delivery_time: storageJson.deliveryTime,
        city: storageJson.city,
        address: storageJson.address,
        pay_method: this.selectedMethod,
        card_number: this.cardNum,
        quota: this.quotaNum,
        user_id: userId
      };
      return await this.orderService.createOrder(data);
    } catch (e) {
      window.alert('Error realizando pago');
    }
  }
}
