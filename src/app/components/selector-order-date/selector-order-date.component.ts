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
    this.router.navigate(['/select-method']);
  }
}
