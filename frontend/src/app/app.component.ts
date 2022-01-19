import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from "./core/http/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'NoodleShop';


  constructor(private readonly authService: AuthService) {}

  ngOnInit(): void {
    this.authService.autoLogin()
  }
}
