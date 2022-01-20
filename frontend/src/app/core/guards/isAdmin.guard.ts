import {Injectable} from "@angular/core";
import {CanActivate, Router, UrlTree} from "@angular/router";
import {AuthService} from "../http/auth.service";

@Injectable({providedIn: "root"})
export class IsAdminGuard implements CanActivate {
  constructor(private readonly authService: AuthService, private readonly router: Router) {}

  canActivate(): boolean | UrlTree {
    const isUserAdmin = this.authService.loginInformation.getValue()?.admin;
    if (!isUserAdmin) return this.router.createUrlTree(['/home'])
    return true;
  }
}
