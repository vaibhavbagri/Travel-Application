import { Component } from '@angular/core';
import { Trip } from './trip';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'travelapp';
  public tripModel = new Trip([],[],[],[],0,0,'5-7 Days',0,0,'',{});

}
