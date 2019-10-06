import { Component, OnInit } from '@angular/core';
import { TracksService } from '../tracks.service';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css']
})
export class TracksComponent implements OnInit {

  public tracks = [];
  
  constructor(private _tracksService : TracksService) { }

  ngOnInit() {
    this._tracksService.getTracks()
        .subscribe(data => this.tracks = data);
  }

}
