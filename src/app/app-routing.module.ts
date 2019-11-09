import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TracksComponent } from './tracks/tracks.component';
import { DestinationsComponent } from './destinations/destinations.component';
import { DurationComponent } from './duration/duration.component';
import { AccComponent } from './acc/acc.component';
import { SuggestedComponent } from './suggested/suggested.component';
import { EmailComponent } from './email/email.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';

const routes: Routes = [
  { path: 'tracks', component: TracksComponent },
  { path: '', component: DestinationsComponent },
  { path: 'details', component: AccComponent },
  { path: 'duration', component: DurationComponent },
  { path: 'suggested', component: SuggestedComponent },
  { path: 'email', component: EmailComponent },
  { path: 'confirmation', component: ConfirmationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }