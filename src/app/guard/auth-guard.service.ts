import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(
    private router: Router,
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let url: string = state.url;
    return this.checkUserLogin(next, url);
  }

  checkUserLogin(route: ActivatedRouteSnapshot, url: any): boolean {

    // const userRole = localStorage.getItem('role');
    // const auth = localStorage.getItem('auth');
    // const role = "adm"


    //   if (role != userRole) {
    //     this.router.navigate(['/users']);
    //     // alert("Você não tem permissão para acessar essa página")
    //     return false;
    //   }


    // this.router.navigate(['/login']);
    return false;
  }
}
