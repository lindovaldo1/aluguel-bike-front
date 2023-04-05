import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
// import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BikeDialogComponent } from './components/bike/bike-dialog/bike-dialog.component';
import { BikeTableComponent } from './components/bike/bike-table/bike-table.component';
import { RentDialogComponent } from './components/rent/rent-dialog/rent-dialog.component';
import { RentTableComponent } from './components/rent/rent-table/rent-table.component';
import { UserDialogComponent } from './components/user/user-dialog/user-dialog.component';
import { UserTableComponent } from './components/user/user-table/user-table.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { LocalDateTimePipe } from './shared/pipe/local-date-time.pipe';
import { LocalDatePipe } from './shared/pipe/local-date.pipe';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UserDialogComponent,
    UserTableComponent,
    BikeDialogComponent,
    BikeTableComponent,
    LocalDateTimePipe,
    LocalDatePipe,
    RentDialogComponent,
    RentTableComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
  ],
  providers: [
    LocalDateTimePipe,
    LocalDatePipe,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
