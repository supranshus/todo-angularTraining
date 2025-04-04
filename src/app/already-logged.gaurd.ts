import { inject, Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";


@Injectable({
    providedIn:'root'
})
export class AlreadyLogged implements CanActivate{
   
    private router=inject(Router)
    private snack=inject(MatSnackBar)


    canActivate(): UrlTree| boolean {
        
            const loggedIn= !!localStorage.getItem('username');
            if(loggedIn ){
                this.snack.open('Account already logged in, Logout First!','OK',{duration:3500})
                return this.router.parseUrl('/todos')
            }
            else{
                return true
                
            }
        
    }


}