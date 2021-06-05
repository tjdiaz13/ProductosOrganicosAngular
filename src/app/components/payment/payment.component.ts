import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import * as moment from 'moment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  cityText: string;
  addressText: string;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  goToSelectDate(): void {
    if (!this.cityText || !this.addressText) {
      this.showModal();
    } else {
      console.log('continua');
      const paymentData = {
        city : this.cityText,
        address: this.addressText
      };
      sessionStorage.setItem('paymentData', JSON.stringify(paymentData));
      this.router.navigate(['/select-date']);
    }
  }

  showModal(): void {
    Swal.fire(
      'Datos Incompletos!',
      'Diligencia la información requerida',
      'warning'
    );
  }
}
