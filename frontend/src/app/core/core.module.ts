import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

@NgModule({
  declarations: [FooterComponent, HeaderComponent],
    imports: [CommonModule, RouterModule, FontAwesomeModule],
  exports: [HeaderComponent, FooterComponent],
})
export class CoreModule {}
