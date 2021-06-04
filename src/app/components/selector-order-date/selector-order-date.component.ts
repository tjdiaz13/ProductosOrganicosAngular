import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-selector-order-date',
  templateUrl: './selector-order-date.component.html',
  styleUrls: ['./selector-order-date.component.scss']
})
export class SelectorOrderDateComponent implements OnInit {
  todayDate: Date;
  tomorrowDate: Date;
  pastTomorrowDate: Date;
  delivDate: string;
  delivTime: string;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.todayDate = new Date();
    this.tomorrowDate = new Date();
    this.tomorrowDate.setDate(new Date().getDate() + 1);
    this.pastTomorrowDate = new Date();
    this.pastTomorrowDate.setDate(new Date().getDate() + 2);
  }

  goToPayMethod(): void{
    if (!this.delivDate || !this.delivTime) {
      window.alert('Selecciona la Fecha y Hora de entrega');
    } else {
      const storage = sessionStorage.getItem('paymentData');
      const storageJson = JSON.parse(storage);
      storageJson.deliveryDate = this.delivDate;
      storageJson.deliveryTime = this.delivTime;
      sessionStorage.setItem('paymentData', JSON.stringify(storageJson));
      this.router.navigate(['/select-method']);
    }
  }

  selectHour(value): void {
    this.delivTime = value;
  }
  selectDate(value: any): void {
    this.delivDate = value;
  }
}
