import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BikeTableComponent } from './components/bike/bike-table/bike-table.component';
import { ProfileComponent } from './components/profile/profile/profile.component';
import { RentTableComponent } from './components/rent/rent-table/rent-table.component';
import { UserTableComponent } from './components/user/user-table/user-table.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'users', component: UserTableComponent },
  { path: 'bikes', component: BikeTableComponent },
  { path: 'rents', component: RentTableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
