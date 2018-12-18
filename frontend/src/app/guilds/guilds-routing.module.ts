import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuildsComponent } from './guilds.component';

const routes: Routes = [
  {
    path: 'guilds',
    component: GuildsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuildsRoutingModule {}