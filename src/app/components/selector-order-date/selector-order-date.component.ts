import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';


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
      this.showModal();
    } else {
      const storage = sessionStorage.getItem('paymentData');
      const storageJson = JSON.parse(storage);
      storageJson.deliveryDate = this.delivDate;
      storageJson.deliveryTime = this.delivTime;
      sessionStorage.setItem('paymentData', JSON.stringify(storageJson));
      this.router.navigate(['/select-method']);
    }
  }

  selectHour(value, event: any): void {
    this.delivTime = value;
    const defaultClass = 'btn btn-date-fill mb-4 btn-md pl-5 pr-5 margin-buttons';
    const selectedClass = 'btn btn-primary mb-4 btn-md pl-5 pr-5 margin-buttons';
    const buttonDate = document.getElementsByName('btns-time');
    buttonDate.forEach(sub => sub.className = defaultClass);
    (document.getElementById(event.id) as HTMLInputElement).className = selectedClass;
  }

  selectDate(value: any, event: any): void {
    this.delivDate = value;
    const defaultClass = 'btn btn-date-fill mb-4 btn-md pl-5 pr-5 margin-buttons';
    const selectedClass = 'btn btn-primary mb-4 btn-md pl-5 pr-5 margin-buttons';
    const buttonDate = document.getElementsByName('btns-date');
    buttonDate.forEach(sub => sub.className = defaultClass);
    (document.getElementById(event.id) as HTMLInputElement).className = selectedClass;
  }

  showModal(): void {
    Swal.fire(
      'Datos Incompletos!',
      'Selecciona la Fecha y Hora de entrega',
      'warning'
    );
  }
}
