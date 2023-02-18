import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
<<<<<<< HEAD
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
=======
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

>>>>>>> 2652cef428af23f2d3ac793f9cc335b582b8fac5
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-router.module';
import { TripListingComponent } from './trip-listing/trip-listing.component';
import { TripCardComponent } from './trip-card/trip-card.component';
import { TripDataService } from './services/trip-data.service';
import { AddTripComponent } from './add-trip/add-trip.component';
import { EditTripComponent } from './edit-trip/edit-trip.component';
<<<<<<< HEAD
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
=======
import { DeleteTripComponent } from './delete-trip/delete-trip.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
>>>>>>> 2652cef428af23f2d3ac793f9cc335b582b8fac5

@NgModule({
  declarations: [
    AppComponent,
    TripListingComponent,
    TripCardComponent,
    AddTripComponent,
    EditTripComponent,
<<<<<<< HEAD
    NavbarComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
=======
    DeleteTripComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
>>>>>>> 2652cef428af23f2d3ac793f9cc335b582b8fac5
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    TripDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
