import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-suggested',
  templateUrl: './suggested.component.html',
  styleUrls: ['./suggested.component.css']
})
export class SuggestedComponent implements OnInit {

  public trips;
  public id;

  constructor( private appComponent : AppComponent,
               private router: Router,
               private modalService: NgbModal) { }

  ngOnInit() {
    this.trips = this.appComponent.tripModel;
  }

  open(content) {
    this.modalService.open(content);
  }
  

}
