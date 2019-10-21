import { Component, OnInit, ViewChild } from '@angular/core';
import { TracksService } from '../tracks.service';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { TripService } from '../trip.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css']
})
export class TracksComponent implements OnInit {

  public tracks = [];
  // public message : string;
  public dest;
  public trips;
  
  constructor(private _tracksService : TracksService, 
              private data: DataService,
              private route: ActivatedRoute,
              private router: Router,
              private _tripService : TripService,
              private appComponent : AppComponent) { }

  ngOnInit() {
    this._tracksService.getTracks()
        .subscribe(data => this.tracks = data);

    this.trips = this.appComponent.tripModel;
    // this.data.currentMessage
    //     .subscribe(message => this.message = message);    
    // this.dest = this.route.snapshot.queryParams['data'];
    // Object.keys(this.dest).forEach(function(key) {

    //   console.log(key, this.dest[key]);
    
    // });
    // console.log("hi");
    // this.dest = JSON.parse(this.message);
    // console.log(this.dest);
    // console.log(this.message);
  }

  @ViewChild('userForm') public userFrm: NgForm;

  submit(){
    
    var obj = this.userFrm.value;
    var keys = Object.keys(obj);
    var filtered_interests = keys.filter(function(key) {
      return obj[key]
    });
    // console.log(filtered_interests);

    this.trips.tracks = filtered_interests;

    var payload = { "destinations" : this.trips.destinations,
                    "interests" : filtered_interests };

    console.log(payload);
    console.log(this.appComponent.tripModel);

    this._tripService.create(payload)
        .subscribe(
          data => {
            console.log(data);
            this.trips.sessionId = data.SessionId;
          }
        )
        
    this.router.navigate(['/details']);
  }

}
