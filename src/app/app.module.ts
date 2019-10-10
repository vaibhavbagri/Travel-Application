import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';
import { DestinationsComponent } from './destinations/destinations.component';
import { TracksComponent } from './tracks/tracks.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccComponent } from './acc/acc.component';
import { DurationComponent } from './duration/duration.component';


@NgModule({
  declarations: [
    AppComponent,
    DestinationsComponent,
    TracksComponent,
    AccComponent,
    DurationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
