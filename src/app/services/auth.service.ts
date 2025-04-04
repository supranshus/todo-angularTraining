import {  Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInSubject=new BehaviorSubject<boolean>(false);
  isLoggedin=this.loggedInSubject.asObservable();

  private userSubject=new BehaviorSubject<string | null>(null);
  user=this.userSubject.asObservable();

  constructor(){
    this.initialize();
  }

  private initialize():void{

    if(typeof window !=='undefined'){
      this.userSubject.next(localStorage.getItem('username'));
      this.loggedInSubject.next(!!localStorage.getItem('username'));
    }
  }


  private getStoredUsername(): string | null {
    return typeof window !== 'undefined' ? localStorage.getItem('username') : null;
  }

  check():boolean{
    return !!localStorage.getItem('username');
  }

  login(username:string){
    localStorage.setItem('username',username);
    this.userSubject.next(username);
    this.loggedInSubject.next(true);
  }

  logout(){
    localStorage.removeItem('username');
    this.userSubject.next(null);
    this.loggedInSubject.next(false);
  }

  getUsername():string|null{
    return localStorage.getItem('username');
  }
  
}
