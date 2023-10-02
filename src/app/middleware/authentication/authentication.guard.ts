import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from 'src/app/services/authService/auth-service.service';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private AuthService: AuthServiceService, private Router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const url = state.url;

    if (this.AuthService.GetToken()) {
      if (url.includes('auth')) {
        this.Router.navigateByUrl('/home');
        return false;
      } else {
        return true;
      }
    } else {
      if (url.includes('auth')) {
        return true;
      } else {
        this.Router.navigateByUrl('/login');
        return false;
      }
    }
  }

}
