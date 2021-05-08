import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import {AddProductComponent} from './components/add-product/add-product.component';

const routes: Routes = [
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'add', component: AddClientComponent },
  { path: 'catalogo/:id', component: AddProductComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
