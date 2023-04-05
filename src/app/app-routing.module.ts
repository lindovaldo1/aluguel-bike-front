import { LoginGuardService } from './guard/login-guard.service';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BikeTableComponent } from './components/bike/bike-table/bike-table.component';
import { RentTableComponent } from './components/rent/rent-table/rent-table.component';
import { UserTableComponent } from './components/user/user-table/user-table.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
   },
  {
    path: 'users',
    component: UserTableComponent,
    canActivate: [LoginGuardService],
  },
  {
    path: 'bikes',
    component: BikeTableComponent,
    canActivate: [LoginGuardService],
  },
  {
    path: 'rents',
    component: RentTableComponent,
    canActivate: [LoginGuardService],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
