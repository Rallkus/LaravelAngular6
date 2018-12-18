import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayersComponent } from './players.component';
import { PlayersResolver } from './players-resolver.service';

const routes: Routes = [
  {
    path: ':slug',
    component: PlayersComponent,
    resolve: {
      players: PlayersResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayersRoutingModule {}