import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TripDataService } from '../services/trip-data.service';

@Component({
  selector: 'app-delete-trip',
  templateUrl: './delete-trip.component.html',
  styleUrls: ['./delete-trip.component.css']
})
export class DeleteTripComponent implements OnInit {

  deleteForm: FormGroup;
  submitted = false;

  constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private tripService: TripDataService
      ) { }

  ngOnInit() {
      // retrieve stashed tripId
      let tripCode = localStorage.getItem("tripCode");
      if (!tripCode) {
          alert("Something wrong, couldn't find where I stashed tripCode!");
          this.router.navigate(['']);
          return;
      }

      this.deleteForm = this.formBuilder.group({
        _id: [],
        code: [tripCode, Validators.required],
        name: ['', Validators.required],
        length: ['', Validators.required],
        start: ['', Validators.required],
        resort: ['', Validators.required],
        perPerson: ['', Validators.required],
        image: ['', Validators.required],
        description: ['', Validators.required],
    })

      console.log('DeleteTripComponent#onInit calling TripDataService#getTrip(\'' + tripCode + '\')');
  }
  
    onSubmit() {
        this.submitted = true;
        let tripCode = localStorage.getItem("tripCode");
        this.tripService.deleteTrip(tripCode)
        .then(data => {
            console.log(data);
            this.router.navigate(['list-trips']);
          })
      }
    }
