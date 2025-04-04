import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit, OnDestroy {

  private router=inject(Router)
  loggedIn:boolean=false
  username: string | null = null;

  private service=inject(AuthService);
  private serviceSub:Subscription | undefined;

  ngOnInit(): void {
    this.serviceSub=this.service.isLoggedin.subscribe(loggedIn=>{
      this.loggedIn=loggedIn
    });

    this.serviceSub.add(this.service.user.subscribe(username => {
      this.username = username;
    }));

  }

  ngOnDestroy(): void {
    if(this.serviceSub){
      this.serviceSub.unsubscribe();
    }
  }



  checkLogin():void{
    this.username=localStorage.getItem('username');
    this.loggedIn=!!this.username
  }
  logout():void{
    this.service.logout();
    this.router.navigateByUrl('/login')
  }

}
