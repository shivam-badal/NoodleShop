import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { ShopModule } from './shop/shop.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, HomeModule, AuthenticationModule, ShopModule],
})
export class ModulesModule {}
