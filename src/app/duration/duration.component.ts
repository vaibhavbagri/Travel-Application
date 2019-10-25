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
  public days = ['5-7 Days', '8-10 Days', 'Over 10 Days']
  public trips;

  constructor( private appComponent : AppComponent,
               private router: Router,
               private _tripService : TripService,) { }

  ngOnInit() {
    this.trips = this.appComponent.tripModel;
  }

  submit(){

    var tripDays = this.trips.duration;
    var tripDaysMax;
    var tripDaysMin;
    if(tripDays === '5-7 Days'){
      tripDaysMin = 5;
      tripDaysMax = 7;     
    }
    else if(tripDays === '8-10 Days'){
      tripDaysMin = 8;
      tripDaysMax = 10;     
    }
    else{
      tripDaysMin = 10;
      tripDaysMax = 11;     
    }

    var payload = { "sessionId" : this.trips.sessionId,
                    "accomodations" : this.trips.acc,
                    "transports" : this.trips.transport,
                    "adults" : this.trips.adults,
                    "children" : this.trips.children,
                    "tripDaysMax" : tripDaysMax,
                    "tripDaysMin" : tripDaysMin };

    console.log(payload);

    this.trips.tripDaysMax = tripDaysMax;
    this.trips.tripDaysMin = tripDaysMin;

    this._tripService.update(payload)
        .subscribe(
          data => {
            this.trips.trips = data;
            console.log(data);
            
          }
        )
    
    console.log(this.trips);
    this.router.navigate(['/suggested']);

  }

}
