import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import Swal from "sweetalert2";
import {BusinessquestionService} from "../../../../services/businessquestion.service";
import * as moment from 'moment';


@Component({
  selector: 'app-load-type-by-period',
  templateUrl: './load-type-by-period.component.html',
  styleUrls: ['./load-type-by-period.component.scss']
})
export class LoadTypeByPeriodComponent implements OnInit {

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });
  searching: boolean;

  dataSource: any;
  displayedColumns: any;

  constructor(
    private businessquestion: BusinessquestionService
  ) {
    this.searching = false;
  }

  ngOnInit(): void {
  }

  async goToQuery(): Promise<any> {
    try {
      const startDate = moment(this.range.value.start).format('YYYY-MM-DD');
      const endDate = moment(this.range.value.end).format('YYYY-MM-DD');

      this.searching = true;
      this.dataSource = null;
      Swal.fire('Consultando información');
      Swal.showLoading();

      const result = await this.getLoadTypeByPeriod(startDate, endDate);
      this.displayedColumns = ['estado', 'tipocarga'];
      this.dataSource = result.result;

      Swal.close();
      this.searching = false;
    } catch (e) {
      this.searching = false;
      this.showModal('Ha ocurrido un error', 'Inténtalo más tarde', 'error');
    }
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
}
