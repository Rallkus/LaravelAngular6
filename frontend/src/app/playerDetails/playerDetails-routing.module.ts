import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerDetailsComponent } from './playerDetails.component';
import { PlayerDetailsResolver } from './playerDetails-resolver.service';

const routes: Routes = [
  {
    path: ':slug',
    component: PlayerDetailsComponent,
    resolve: {
      player: PlayerDetailsResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayerDetailsRoutingModule {}