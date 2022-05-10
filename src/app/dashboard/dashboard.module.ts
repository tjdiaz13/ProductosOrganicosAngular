import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { LoadTypeByWeekPeriodComponent } from './components/business-questions/load-type-by-week-period/load-type-by-week-period.component';
import { LoadTypeByPeriodComponent } from './components/business-questions/load-type-by-period/load-type-by-period.component';
import { SharedModule } from '../shared/shared.module';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import {FormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    DashboardComponent,
    LoadTypeByWeekPeriodComponent,
    LoadTypeByPeriodComponent,
    MenuComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    FormsModule,
    MatDialogModule
  ]
})
export class DashboardModule { }
