import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HookPageComponent } from './components/hook-page/hook-page.component';

@NgModule({
  declarations: [HomeComponent, AboutComponent, ContactComponent, HookPageComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
