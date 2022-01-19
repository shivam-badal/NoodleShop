import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {LoginDTO} from "../../../../core/http/dto/login.dto";
import {RegisterDTO} from "../../../../core/http/dto/register.dto";
import {AuthService} from "../../../../core/http/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  regexPattern = "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&]).{8,}"
  constructor(private readonly authService: AuthService, private readonly router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(registerForm: NgForm) {
    if (registerForm.invalid) return;

    const values: RegisterDTO = registerForm.value;
    this.authService
      .register(values)
      .subscribe(() => {
        this.router.navigate(['/login']).then()
      })
  }
}
