import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Trip } from '../models/trip';
import { AuthenticationService } from '../services/authentication.service';

@Component({
    selector: 'app-trip-card',
    templateUrl: './trip-card.component.html',
    styleUrls: ['./trip-card.component.css']
})

export class TripCardComponent implements OnInit {

    @Input('trip') trip: Trip;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) { }

    ngOnInit(): void {
    }
<<<<<<< HEAD
=======

>>>>>>> 2652cef428af23f2d3ac793f9cc335b582b8fac5
    public isLoggedIn(): boolean {
        return this.authenticationService.isLoggedIn();
    }

    private editTrip(trip: Trip): void {
        console.log('Inside TripListingComponent#editTrip');
        localStorage.removeItem("tripCode");
        localStorage.setItem("tripCode", trip.code);
        this.router.navigate(['edit-trip']);
    }

    private deleteTrip(trip: Trip): void {
        console.log('Inside TripListingComponent#deleteTrip');
        localStorage.removeItem("tripCode");
        localStorage.setItem("tripCode", trip.code);
        this.router.navigate(['delete-trip']);
    }
}