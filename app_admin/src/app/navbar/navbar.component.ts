import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
    constructor(
        private authenticationService: AuthenticationService
    ) { }

    ngOnInit() { }
<<<<<<< HEAD
    
    public isLoggedIn(): boolean {
        return this.authenticationService.isLoggedIn();
    }

=======

    public isLoggedIn(): boolean {
        return this.authenticationService.isLoggedIn();
    }
    
>>>>>>> 2652cef428af23f2d3ac793f9cc335b582b8fac5
    private onLogout(): void {
        return this.authenticationService.logout();
    }
}
<<<<<<< HEAD
=======

>>>>>>> 2652cef428af23f2d3ac793f9cc335b582b8fac5
