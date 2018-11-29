import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BuffsComponent } from './buffs.component';
import { SharedModule } from '../shared';
import { BuffsRoutingModule } from './buffs-routing.module';

@NgModule({
    imports: [
        SharedModule,
        BuffsRoutingModule
      ],
      declarations: [
        BuffsComponent
      ]
})
export class BuffsModule {}