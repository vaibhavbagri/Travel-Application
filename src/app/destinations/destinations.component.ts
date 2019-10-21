import { Component, OnInit, ViewChild } from '@angular/core';
import { DestinationsService } from '../destinations.service';
import { FormBuilder, FormGroup, FormArray, FormControl, NgForm } from '@angular/forms';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.css']
})
export class DestinationsComponent implements OnInit {

  // form : FormGroup;
  public destinations = [];
  public trips;

  // constructor( private _destinationService : DestinationsService, private formBuilder: FormBuilder) { 
  //   this.form = this.formBuilder.group({
  //     dests: new FormArray([])
  //   });

  //   this.addCheckboxes();
  // }

  constructor( private _destinationService : DestinationsService, 
               private data : DataService, 
               private router : Router, 
               private appComponent : AppComponent) {}

  ngOnInit() {
    this._destinationService.getDestination()
    .subscribe(data => this.destinations = data);
    this.trips = this.appComponent.tripModel;
  }

  @ViewChild('userForm') public userFrm: NgForm;

  // private addCheckboxes() {
  //   this.destinations.forEach((o, i) => {
  //     const control = new FormControl(i === 0); // if first item set to true, else false
  //     (this.form.controls.dests as FormArray).push(control);
  //   });
  // }

  submit() {
    // const selectedOrderIds = this.form.value.dests
    //   .map((v, i) => v ? this.form.value.dests[i].id : null)
    //   .filter(v => v !== null);
    // console.log(selectedOrderIds);
    // this.data.changeMessage(this.userFrm.value);
    // console.log(this.userFrm.value);
    var obj = this.userFrm.value;
    var keys = Object.keys(obj);
    var filtered = keys.filter(function(key) {
      return obj[key]
    });
    console.log(filtered);
    // this.appComponent.tripModel.destinations = filtered;
    this.trips.destinations = filtered
    console.log(this.appComponent.tripModel);
    // this.router.navigate(['/tracks'], { queryParams: { data: filtered }});
    this.router.navigate(['/tracks']);
  }

}
