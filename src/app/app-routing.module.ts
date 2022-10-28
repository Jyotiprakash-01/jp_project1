import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './authentication/dashboard/dashboard.component';
import { ListComponent } from './authentication/list/list.component';
import { LoginComponent } from './authentication/login/login.component';
import { PasswordComponent } from './authentication/password/password.component';
// import { ClassComponent } from './students/class/class.component';
 import { RegisterComponent } from './authentication/register/register.component';



const routes: Routes = [
   {path: "register", component: RegisterComponent},
   {path: "login", component: LoginComponent},
   {path: "password", component: PasswordComponent},
   {path: "dashboard", component: DashboardComponent},
   {path: "list", component: ListComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
