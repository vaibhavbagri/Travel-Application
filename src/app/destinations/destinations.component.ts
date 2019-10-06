import { Component, OnInit } from '@angular/core';
import { DestinationsService } from '../destinations.service';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.css']
})
export class DestinationsComponent implements OnInit {

  public destinations = []

  constructor( private _destinationService : DestinationsService) { }

  ngOnInit() {
    this._destinationService.getDestination()
    .subscribe(data => this.destinations = data);
  }

}
