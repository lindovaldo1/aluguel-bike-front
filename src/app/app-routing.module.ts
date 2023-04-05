import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BikeTableComponent } from './components/bike/bike-table/bike-table.component';
import { RentTableComponent } from './components/rent/rent-table/rent-table.component';
import { UserTableComponent } from './components/user/user-table/user-table.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'users', component: UserTableComponent },
  { path: 'bikes', component: BikeTableComponent },
  { path: 'rents', component: RentTableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
