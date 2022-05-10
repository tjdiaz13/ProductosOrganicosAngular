import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {LoadTypeByPeriodComponent} from './components/business-questions/load-type-by-period/load-type-by-period.component';
import {LoadTypeByWeekPeriodComponent} from './components/business-questions/load-type-by-week-period/load-type-by-week-period.component';
import {HomeComponent} from './components/home/home.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'load-type-by-period', component: LoadTypeByPeriodComponent },
      { path: 'load-type-by-week-period', component: LoadTypeByWeekPeriodComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
