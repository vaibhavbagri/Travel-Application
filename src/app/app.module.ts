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
import { SuggestedComponent } from './suggested/suggested.component';
import { NgbModule, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EmailComponent } from './email/email.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';


@NgModule({
  declarations: [
    AppComponent,
    DestinationsComponent,
    TracksComponent,
    AccComponent,
    DurationComponent,
    SuggestedComponent,
    EmailComponent,
    ConfirmationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
