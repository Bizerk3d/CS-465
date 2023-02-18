import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../models/user';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
<<<<<<< HEAD
    
    public formError: string = '';
    
=======
    public formError: string = '';
>>>>>>> 2652cef428af23f2d3ac793f9cc335b582b8fac5
    public credentials = {
        name: '',
        email: '',
        password: ''
    };

    constructor(
<<<<<<< HEAD
        private router: Router,
        private authenticationService: AuthenticationService
    ) { }

    ngOnInit() {}

=======
    private router: Router,
    private authenticationService: AuthenticationService
    ) { }

    ngOnInit() {}
>>>>>>> 2652cef428af23f2d3ac793f9cc335b582b8fac5
    public onLoginSubmit(): void {
        this.formError = '';
        if (!this.credentials.email || !this.credentials.password) {
            this.formError = 'All fields are required, please try again';
        } else {
            this.doLogin();
        }
    }

    private doLogin(): void {
        this.authenticationService.login(this.credentials)
            .then(() => this.router.navigateByUrl('#'))
            .catch((message) => this.formError = message);
    }
}
<<<<<<< HEAD
=======

>>>>>>> 2652cef428af23f2d3ac793f9cc335b582b8fac5
