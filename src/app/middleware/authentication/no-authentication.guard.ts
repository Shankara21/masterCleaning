import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from 'src/app/services/authService/auth-service.service';


@Injectable({
  providedIn: 'root'
})
export class NoAuthenticationGuard implements CanActivate {
  constructor(private AuthService: AuthServiceService, private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const url = state.url;

    if (!this.AuthService.GetToken()) {
     return true
    } else {
      this.router.navigateByUrl('/')
     return false
    }
  }

}
