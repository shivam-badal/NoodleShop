import {Injectable} from "@angular/core";
import {CanActivate, Router, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {VerificationInfoDTO} from "../http/dto/verification-info.dto";
import {AuthService} from "../http/auth.service";

@Injectable({providedIn: "root"})
export class IsAuthenticatedGuard implements CanActivate {
  constructor(private readonly router: Router, private readonly authService: AuthService) {}

  canActivate(): boolean | UrlTree {
    const loggedIn = this.authService.isLoggedIn()
    if(!loggedIn) return this.router.createUrlTree(['/login']);
    return true;
  }
}
