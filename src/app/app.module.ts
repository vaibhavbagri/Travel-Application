import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';
import { DestinationsComponent } from './destinations/destinations.component';
import { TracksComponent } from './tracks/tracks.component';


@NgModule({
  declarations: [
    AppComponent,
    DestinationsComponent,
    TracksComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
