import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HookPageComponent } from './components/hook-page/hook-page.component';
import {ShopModule} from "../shop/shop.module";

@NgModule({
  declarations: [HomeComponent, HookPageComponent],
  imports: [CommonModule, HomeRoutingModule, ShopModule],
})
export class HomeModule {}
