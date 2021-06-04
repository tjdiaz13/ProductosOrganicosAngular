import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selector-order-method-pay',
  templateUrl: './selector-order-method-pay.component.html',
  styleUrls: ['./selector-order-method-pay.component.scss']
})
export class SelectorOrderMethodPayComponent implements OnInit {

  selectedMethod: string;
  quotaNum: number;
  cardNum: number;
  constructor() { }

  ngOnInit(): void {
    this.selectedMethod = 'efectivo';
  }

  goToPayment(): void {
    if (this.selectedMethod !== 'efectivo' && !this.cardNum) {
      window.alert('Diligencia el número de tarjeta');
    } else if(this.selectedMethod === 'credito' && !this.quotaNum) {
      window.alert('Diligencia el número de cuotas');
    }
  }
}
