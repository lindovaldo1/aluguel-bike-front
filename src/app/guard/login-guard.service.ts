import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardService implements CanActivate{

  constructor(
    private router: Router,
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let url: string = state.url;
    return this.verifyLogin(next, url);
  }
    verifyLogin(route: ActivatedRouteSnapshot, url: any): boolean {

      const auth = localStorage.getItem('auth');

      if (auth == 'true') {
        return true;
      }
      alert("Você não está logado");
      this.router.navigate(['/login']);

      return false;
    }
}
