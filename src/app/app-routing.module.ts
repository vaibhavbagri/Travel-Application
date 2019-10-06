import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TracksComponent } from './tracks/tracks.component';
import { DestinationsComponent } from './destinations/destinations.component';

const routes: Routes = [
  { path: 'tracks', component: TracksComponent },
  { path: '', component: DestinationsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }