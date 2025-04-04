  import { Component, inject, OnInit } from '@angular/core';
  import { MatSnackBar } from '@angular/material/snack-bar';
  import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
  import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

  @Component({
    selector: 'app-login',
    standalone: false,
    templateUrl: './login.component.html',
    styleUrl: './login.component.css'
  })
  export class LoginComponent implements OnInit {
    login:FormGroup;
    private snack=inject(MatSnackBar);
    private fb=inject(FormBuilder)
    private router=inject(Router)
    private service=inject(AuthService);

    constructor(){
      this.login = this.fb.group({
        username: ['', [Validators.required, Validators.minLength(6)]], 
        password: ['', [Validators.required, Validators.minLength(6)]]  
      });
    }
    ngOnInit(): void {
      
    }




    doLogin():void{

      if(this.login.valid){
        const username=this.login.get('username')?.value;
        const password=this.login.get('password')?.value;

        if(username=='supranshu' && password=='supra123'){
          this.snack.open("Login Successfull","OK",{duration:3000})
          this.service.login(username);
          this.router.navigateByUrl('/todos')

          
        }
        else if(username=='supranshu' && password!='supra123'){
          this.snack.open("Wrong Password","OK",{duration:3000})
        }
        else if(username!='supranshu' && password=='supra123'){
          this.snack.open("Wrong Username","OK",{duration:3000})
        }
        else{
          this.snack.open("Wrong Username and Password","OK",{duration:3000})
        }

      }
      else{
        this.snack.open("Please correct the form errors.", "OK", { duration: 3000 });
      }
    }


    getUsername():FormControl{
      return this.login.get('username') as FormControl;
    }

    getPassword():FormControl{
      return this.login.get('password') as FormControl;
    }
  }
