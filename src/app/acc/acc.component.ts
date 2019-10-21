import { Component, OnInit, ViewChild } from '@angular/core';
import { AppComponent } from '../app.component';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acc',
  templateUrl: './acc.component.html',
  styleUrls: ['./acc.component.css']
})
export class AccComponent implements OnInit {

  public trips;
  public accomodation = ["Luxury Hotels", "Budget Hotels", "Home Stay"];
  public transport = ["Luxury", "Economy"];

  constructor( private router : Router,
               private appComponent : AppComponent ) { }

  ngOnInit() {
    this.trips = this.appComponent.tripModel;
  }

  @ViewChild('userForm1') public userFrm1: NgForm;
  @ViewChild('userForm2') public userFrm2: NgForm;

  submit(){

    var obj = this.userFrm1.value;
    var keys = Object.keys(obj);
    var filtered1 = keys.filter(function(key) {
      return obj[key]
    });
    console.log(filtered1);

    var obj = this.userFrm2.value;
    var keys = Object.keys(obj);
    var filtered2 = keys.filter(function(key) {
      return obj[key]
    });
    console.log(filtered2);

    this.trips.acc = filtered1;
    this.trips.transport = filtered2;
    console.log(this.appComponent.tripModel);
    this.router.navigate(['/duration']);

  }

}
