import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TracksComponent } from './tracks/tracks.component';
import { DestinationsComponent } from './destinations/destinations.component';
import { DurationComponent } from './duration/duration.component';
import { AccComponent } from './acc/acc.component';

const routes: Routes = [
  { path: 'tracks', component: TracksComponent },
  { path: '', component: DestinationsComponent },
  { path: 'details', component: AccComponent },
  { path: 'duration', component: DurationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }