import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { AuthenticationService } from '../services/authentication.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor(
        private authService: AuthenticationService
    ) { }

    ngOnInit() {
    }

    public isLoggedIn(): boolean {
        return this.authService.isLoggedIn();
    }
=======

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

>>>>>>> 2652cef428af23f2d3ac793f9cc335b582b8fac5
}
