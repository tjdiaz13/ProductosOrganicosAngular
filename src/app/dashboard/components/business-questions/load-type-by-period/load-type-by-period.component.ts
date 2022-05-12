import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import Swal from "sweetalert2";
import {BusinessquestionService} from "../../../../services/businessquestion.service";
import * as moment from 'moment';
import {timeInterval} from "rxjs/operators";


@Component({
  selector: 'app-load-type-by-period',
  templateUrl: './load-type-by-period.component.html',
  styleUrls: ['./load-type-by-period.component.scss']
})
export class LoadTypeByPeriodComponent implements OnInit {

  searching: boolean;
  selectDate: string;
  selectHour: string;
  email = new FormControl('', [Validators.required, Validators.email]);

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };


  // [disabled]="!range.value.end || searching"
  constructor(
    private businessquestion: BusinessquestionService
  ) {
    this.searching = false;
  }

  ngOnInit(): void {
  }

  async goToQuery(): Promise<any> {
    try {
      const date = moment(this.selectDate).format('YYYY-MM-DD')
      console.log('start date: ' + this.selectHour);
      this.searching = true;
      Swal.fire('Agendando Cita');
      Swal.showLoading();

      await this.sleep(5000);
      Swal.close();
      this.showModal('Solicitud Recibida', 'Te enviaremos a tu correo la cotización del servicio', 'success');
      this.searching = false;
    } catch (e) {
      this.searching = false;
      this.showModal('Ha ocurrido un error', 'Inténtalo más tarde', 'error');
    }
  }

  sleep(ms): Promise<any> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async getLoadTypeByPeriod(startDate: any, endDate: any): Promise<any> {
    console.log('start date: ' + startDate);
    console.log('end date: ' + endDate);
    return await this.businessquestion.getLoadTypeByPeriod(startDate, endDate);
  }

  showModal(tittle: string, message: string, icon: any): void {
    Swal.fire(
      tittle,
      message,
      icon
    );
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Debes ingresar un valor';
    }

    return this.email.hasError('email') ? 'Correo no válido' : '';
  }
}
