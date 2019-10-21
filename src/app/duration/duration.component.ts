import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';
import { TripService } from '../trip.service';

@Component({
  selector: 'app-duration',
  templateUrl: './duration.component.html',
  styleUrls: ['./duration.component.css']
})
export class DurationComponent implements OnInit {

  public numbers = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
  public trips;

  constructor( private appComponent : AppComponent,
               private router: Router,
               private _tripService : TripService,) { }

  ngOnInit() {
    this.trips = this.appComponent.tripModel;
  }

  @ViewChild('userForm1') public userFrm1: NgForm;
  @ViewChild('userForm2') public userFrm2: NgForm;

  submit(){

    var adults = this.userFrm2.value.adults;
    var children = this.userFrm2.value.children;
    var tripDaysMax = 14;
    var tripDaysMin = 10;

    var payload = { "sessionId" : this.trips.sessionId,
                    "accomodations" : this.trips.acc,
                    "transports" : this.trips.transport,
                    "adults" : adults,
                    "children" : children,
                    "tripDaysMax" : tripDaysMax,
                    "tripDaysMin" : tripDaysMin };

    console.log(payload);

    this.trips.adults = adults;
    this.trips.children = children;
    this.trips.tripDaysMax = tripDaysMax;
    this.trips.tripDaysMin = tripDaysMin;

    this._tripService.update(payload)
        .subscribe(
          data => {
            console.log(data);
          }
        )

  }

}
