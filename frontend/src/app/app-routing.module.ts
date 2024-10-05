import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { CartPageComponent } from './components/pages/cart/cart.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cart', component: CartPageComponent },
  // other routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
