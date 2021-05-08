import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'add', component: AddClientComponent },
  { path: 'catalogo/:id', component: AddProductComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
