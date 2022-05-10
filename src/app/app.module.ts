import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';


// rutas
import { AppRoutingModule } from './app-routing.module';

// servicios

import { AddProductService } from './services/add-product.service';
import { CarritoConfirmarCompraService } from './services/carrito-confirmar-compra.service';
import { CarritoItemCompraService } from './services/carrito-item-compra.service';
import { CatalogoService } from './services/catalogo.service';
import { LoginService } from './services/login.service';
import { RegisterService } from './services/register.service';
import { ClientService } from './services/client.service';
import { LogoutService } from './services/logout.service';

// componentes
import { AppComponent } from './app.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { CatalogoAdminComponent } from './components/catalogo-admin/catalogo.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { CarritoItemCompraComponent } from './components/carrito-item-compra/carrito-item-compra.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CarritoConfirmarCompraComponent } from './components/carrito-confirmar-compra/carrito-confirmar-compra.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { OrdenuserComponent } from './components/ordenuser/ordenuser.component';
import { OrdenreviewComponent } from './components/ordenreview/ordenreview.component';
import { PaymentComponent } from './components/payment/payment.component';
import { SelectorOrderDateComponent } from './components/selector-order-date/selector-order-date.component';
import { SelectorOrderMethodPayComponent } from './components/selector-order-method-pay/selector-order-method-pay.component';
import { AlphabetOnlyDirective } from './components/payment/alphabet-only.directive';
import {BackButtonDisableModule} from "angular-disable-browser-back-button";


@NgModule({
  declarations: [
    AppComponent,
    CatalogoComponent,
    CatalogoAdminComponent,
    CarritoItemCompraComponent,
    AddClientComponent,
    CarritoConfirmarCompraComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent,
    OrdenuserComponent,
    OrdenreviewComponent,
    PaymentComponent,
    SelectorOrderDateComponent,
    SelectorOrderMethodPayComponent,
    AlphabetOnlyDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BackButtonDisableModule.forRoot({
      preserveScrollPosition: true
    })
  ],
  providers: [
    ClientService,
    CarritoConfirmarCompraService,
    AddProductService,
    LoginService,
    LogoutService,
    CatalogoService,
    RegisterService,
    CarritoItemCompraService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
