import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import Swal from "sweetalert2";
import {CraftByMonth} from "../../../../models/craftByMonth";
import {BusinessquestionService} from "../../../../services/businessquestion.service";
import * as moment from "../load-type-by-period/load-type-by-period.component";
import {Constants} from "../../../../utils/constants";

@Component({
  selector: 'app-load-type-by-week-period',
  templateUrl: './load-type-by-week-period.component.html',
  styleUrls: ['./load-type-by-week-period.component.scss']
})
export class LoadTypeByWeekPeriodComponent implements OnInit {

  searching: boolean;
  selectedValue: string;
  dataSource: any;
  displayedColumns: any;
  stateList: string[] = [];

  constructor(
    private businessquestion: BusinessquestionService
  ) {
    this.searching = false;
    this.selectedValue = '';
  }

  async ngOnInit(): Promise<void> {
    this.stateList = Constants.stateListEmbarcacion;
  }

  async goToQuery(): Promise<any> {
    try {
      this.searching = true;
      this.dataSource = null;
      Swal.fire('Consultando información');
      Swal.showLoading();

      const result = await this.getLoadTypeRelation(this.selectedValue);
      this.displayedColumns = ['tipocarga', 'diasemana', 'ano', 'total'];
      this.dataSource = result;

      Swal.close();
      this.searching = false;
    } catch (e) {
      this.searching = false;
      this.showModal('Ha ocurrido un error', 'Inténtalo más tarde', 'error');
    }
  }

  async getLoadTypeRelation(state: string): Promise<any> {
    return await this.businessquestion.getLoadTypeWeekRelation(state);
  }

  showModal(tittle: string, message: string, icon: any): void {
    Swal.fire(
      tittle,
      message,
      icon
    );
  }
}
