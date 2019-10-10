import { Component, OnInit, ViewChild } from '@angular/core';
import { TracksService } from '../tracks.service';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { TripCreateService } from '../trip-create.service';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css']
})
export class TracksComponent implements OnInit {

  public tracks = [];
  // public message : string;
  public dest;
  constructor(private _tracksService : TracksService, 
              private data: DataService,
              private route: ActivatedRoute,
              private router: Router,
              private _tripCreateService : TripCreateService) { }

  ngOnInit() {
    this._tracksService.getTracks()
        .subscribe(data => this.tracks = data);
    // this.data.currentMessage
    //     .subscribe(message => this.message = message);    
    this.dest = this.route.snapshot.queryParams['data'];
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

    var payload = { "destinations" : this.dest,
                    "interests" : filtered_interests };

    console.log(payload);
    
    this._tripCreateService.create(payload)
        .subscribe(
          data => console.log('Success',data)
        )

    this.router.navigate(['/details']);
  }

}
