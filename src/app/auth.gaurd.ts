import { inject, Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";



@Injectable({
    providedIn:'root'
})
export class AuthGaurd implements CanActivate{
    private router=inject(Router)
    canActivate():  boolean | UrlTree {
    
      const isLoggedIn = !!localStorage.getItem('username');
    
        if (isLoggedIn) {
          return true;
        } else {
          return this.router.parseUrl(`/login`);
        }
      }

}

  
