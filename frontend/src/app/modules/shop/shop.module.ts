import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './pages/shop/shop.component';
import { ShopRoutingModule } from './shop-routing.module';
import { ProductCardComponent } from './components/product-card/product-card.component';

@NgModule({
  declarations: [ShopComponent, ProductCardComponent],
  imports: [CommonModule, ShopRoutingModule],
})
export class ShopModule {}
