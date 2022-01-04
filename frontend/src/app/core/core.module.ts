import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from './authentication/authentication.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AuthenticationComponent, FooterComponent, HeaderComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, FooterComponent, AuthenticationComponent],
})
export class CoreModule {}
