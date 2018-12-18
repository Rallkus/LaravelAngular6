import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GuildsComponent } from './guilds.component';
import { SharedModule } from '../shared';
import { GuildsRoutingModule } from './guilds-routing.module';

@NgModule({
    imports: [
        SharedModule,
        GuildsRoutingModule
      ],
      declarations: [
        GuildsComponent
      ]
})
export class GuildsModule {}