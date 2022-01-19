import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './pages/shop/shop.component';
import {ProductInfoComponent} from "./components/product-info/product-info.component";

const routes: Routes = [
  {
    path: 'products',
    component: ShopComponent,
  },
  {
    path: 'products/:id',
    component: ProductInfoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class ShopRoutingModule {}
