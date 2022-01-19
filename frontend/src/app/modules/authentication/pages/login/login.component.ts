import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {LoginDTO} from "../../../../core/http/dto/login.dto";
import {AuthService} from "../../../../core/http/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private readonly authService: AuthService, private readonly router: Router,) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
    if (form.invalid) return;

    const values: LoginDTO = form.value;
    this.authService
      .login(values)
      .subscribe(() => {
        this.router.navigate(["/products"]).then();
      })
  }

}
