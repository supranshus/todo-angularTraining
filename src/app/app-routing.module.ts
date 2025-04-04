import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { TodosComponent } from './components/todos/todos.component';
import { AboutComponent } from './components/about/about.component';
import { NopageComponent } from './components/nopage/nopage.component';
import { SecuredComponent } from './components/secured/secured.component';
import { AuthGaurd } from './auth.gaurd';
import { AlreadyLogged } from './already-logged.gaurd';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent,
    canActivate:[AlreadyLogged]
  },
  {
    path:'todos',
    component:TodosComponent,  
    canActivate:[AuthGaurd]  
  },
  {
    path:'about',
    component:AboutComponent,
  },
  {
    path:'secured',
    pathMatch:'full',
    component:SecuredComponent,
    canActivate:[AuthGaurd]
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo:'login'
  },
  {
    path:'**',
    component:NopageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
