import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PlayerDetailsComponent } from './playerDetails.component';
import { SharedModule } from '../shared';
import { PlayerDetailsRoutingModule } from './playerDetails-routing.module';
import { PlayerDetailsResolver } from './playerDetails-resolver.service';

@NgModule({
    imports: [
        SharedModule,
        PlayerDetailsRoutingModule
      ],
      declarations: [
        PlayerDetailsComponent
      ],

      providers: [
        PlayerDetailsResolver
      ]
})
export class PlayerDetailsModule {}