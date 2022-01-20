import {Injectable} from "@angular/core";
import {CanActivate, Router, UrlTree} from "@angular/router";
import {AuthService} from "../http/auth.service";
import {IsAuthenticatedGuard} from "./isAuthenticated.guard";
import {User} from "../../modules/authentication/models/user.model";

// @Injectable({providedIn: "root"})
// export class IsNotAuthenticatedGuard implements CanActivate {
//   constructor(private readonly router: Router, private readonly authService: AuthService) {}
//
//   // canActivate(): boolean | UrlTree {
//   //   // const loggedIn = this.authService.isLoggedIn()
//   //   // if(loggedIn) return this.router.createUrlTree(['/home']);
//   //   // return true;
//   // }
// }
