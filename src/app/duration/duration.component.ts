import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-duration',
  templateUrl: './duration.component.html',
  styleUrls: ['./duration.component.css']
})
export class DurationComponent implements OnInit {

  public numbers = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];

  constructor() { }

  ngOnInit() {
  }

}
