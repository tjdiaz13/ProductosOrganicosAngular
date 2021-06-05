import { Component, OnInit } from '@angular/core';
import {OrderService} from '../../services/order.service';
import * as moment from 'moment';
import {Router} from "@angular/router";
import Swal from "sweetalert2";

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
      this.showModal('Datos Incompletos!', 'Diligencia el número de tarjeta', 'warning');
    } else if (this.selectedMethod === 'credito' && !this.quotaNum) {
      this.showModal('Datos Incompletos!', 'Diligencia el número de cuotas', 'warning');
    } else {
      const response = await this.callOrderService();
      console.log(response);
      if (response) {
        this.showModal('Felicitaciones', 'Su compra ha sido realizada con éxito', 'success');
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
        user_id: 1
      };
      return await this.orderService.createOrder(data);
    } catch (e) {
      this.showModal('Ha ocurrido un error', 'Error realizando pago', 'error');
    }
  }

  showModal(tittle: string, message: string, icon: any): void {
    Swal.fire(
      tittle,
      message,
      icon
    );
  }
}
