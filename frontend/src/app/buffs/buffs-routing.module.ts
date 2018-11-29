import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuffsComponent } from './buffs.component';

const routes: Routes = [
  {
    path: 'buffs',
    component: BuffsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuffsRoutingModule {}