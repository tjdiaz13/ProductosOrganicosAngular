import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from './components/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MaterialModule} from '../material/material.module';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MaterialModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    MaterialModule
  ]
})
export class SharedModule { }
