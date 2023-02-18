import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { TripDataService } from '../services/trip-data.service';
import { Trip } from '../models/trip';
import { AuthenticationService } from '../services/authentication.service';

@Component({
    selector: 'app-trip-listing',
    templateUrl: './trip-listing.component.html',
    styleUrls: ['./trip-listing.component.css'],
    providers: [TripDataService]
})
export class TripListingComponent implements OnInit {

    trips: Trip[];

    message: string;

    constructor(
        private tripDataService: TripDataService,
<<<<<<< HEAD
        private authService: AuthenticationService,
        private router: Router
=======
        private router: Router,
        private authenticationService: AuthenticationService
>>>>>>> 2652cef428af23f2d3ac793f9cc335b582b8fac5
        ) { }

    private addTrip(): void {
        console.log('Inside TripListingComponent#addTrip');
        this.router.navigate(['add-trip']);
    }

    private getTrips(): void {
        console.log('Inside TripListingComponent#getTrips');
        this.message = "Searching for trips";
        this.tripDataService
            .getTrips()
            .then(foundTrips => {
                this.message = foundTrips.length > 0 ? '' : 'No trips found';
                this.trips = foundTrips;
            });
    }

    public isLoggedIn(): boolean {
<<<<<<< HEAD
        return this.authService.isLoggedIn();
=======
        return this.authenticationService.isLoggedIn();
>>>>>>> 2652cef428af23f2d3ac793f9cc335b582b8fac5
    }

    ngOnInit(): void {
        this.getTrips();
    }
}
