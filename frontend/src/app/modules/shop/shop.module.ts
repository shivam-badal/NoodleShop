import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './pages/shop/shop.component';
import { ShopRoutingModule } from './shop-routing.module';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductInfoComponent } from './components/product-info/product-info.component';

@NgModule({
  declarations: [ShopComponent, ProductCardComponent, ProductInfoComponent],
  imports: [CommonModule, ShopRoutingModule],
})
export class ShopModule {}
