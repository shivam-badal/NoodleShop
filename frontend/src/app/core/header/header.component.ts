import { Component, OnInit } from '@angular/core';
import {AuthService} from "../http/auth.service";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private loginInformation: Subscription = new Subscription();
  loggedIn: boolean = false;
  isAdmin: boolean = false;
  constructor(private readonly authService: AuthService) { }

  ngOnInit(): void {
    this.loginInformation = this.authService.loginInformation
      .subscribe((loginInformation) => {
        this.loggedIn = !!loginInformation;
        this.isAdmin = !!loginInformation?.admin
        console.log("ADMIN", this.isAdmin)

      })
  }

  logOut(): void {
    this.authService.logout().subscribe()
  }

}
