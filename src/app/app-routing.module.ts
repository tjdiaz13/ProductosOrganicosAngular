import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { CatalogoAdminComponent } from './components/catalogo-admin/catalogo.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { CarritoItemCompraComponent } from './components/carrito-item-compra/carrito-item-compra.component';
import { CarritoConfirmarCompraComponent } from './components/carrito-confirmar-compra/carrito-confirmar-compra.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { HomeComponent } from './components/home/home.component';
<<<<<<< HEAD
import { OrdenuserComponent } from './components/ordenuser/ordenuser.component';
import { OrdenreviewComponent } from './components/ordenreview/ordenreview.component';

=======
import {PaymentComponent} from './components/payment/payment.component';
import {SelectorOrderDateComponent} from "./components/selector-order-date/selector-order-date.component";
import {SelectorOrderMethodPayComponent} from "./components/selector-order-method-pay/selector-order-method-pay.component";
>>>>>>> dev

const routes: Routes = [
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'catalogoA', component: CatalogoAdminComponent },
  { path: 'carrito', component: CarritoItemCompraComponent },
  { path: 'carritoConfirmar', component: CarritoConfirmarCompraComponent },
  { path: 'add', component: AddClientComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'home', component: HomeComponent },
<<<<<<< HEAD
  { path: 'orden', component: OrdenuserComponent },
  { path: 'ordenreview', component: OrdenreviewComponent },
=======
  { path: 'payment', component: PaymentComponent },
  { path: 'select-date', component: SelectorOrderDateComponent },
  { path: 'select-method', component: SelectorOrderMethodPayComponent },
>>>>>>> dev
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
