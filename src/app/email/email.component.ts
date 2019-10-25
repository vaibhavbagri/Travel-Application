import { Component, OnInit, ViewChild } from '@angular/core';
import { AppComponent } from '../app.component';
import { TripService } from '../trip.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  public trips;

  constructor( private appComponent : AppComponent,
               private _tripService : TripService,
               private router: Router,) { }

  ngOnInit() {
    this.trips = this.appComponent.tripModel;
    console.log(this.trips);
  }

  @ViewChild('userForm') public userFrm: NgForm;

  submit(){

    var obj = this.userFrm.value;

    var payload = { "name" : obj.name,
                    "email" : obj.email,
                    "phone" : obj.phone,
                    "tripId" : this.trips.trips.TripId,
                    "expectedTravelDate" : obj.expectedTravelDate,
                    "marketingConsent" : obj.marketingConsent };

    console.log(payload);

    this._tripService.email(payload)
        .subscribe( data => {console.log(data);} )

    this.router.navigate(['/']);
  }

}
