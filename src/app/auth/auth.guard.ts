import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanLoad, UrlSegment, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Route } from '@angular/compiler/src/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor(private authService: AuthService,
              private router: Router) {}
  canLoad(
    route: Route,
    segment: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    if(!this.authService.userIsAuthenticated)
    {
      this.router.navigate(['/auth/login']);
    }
    return this.authService.userIsAuthenticated;
  }

}
