import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PlayersComponent } from './players.component';
import { SharedModule } from '../shared';
import { PlayersRoutingModule } from './players-routing.module';
import { PlayersResolver } from './players-resolver.service';

@NgModule({
    imports: [
        SharedModule,
        PlayersRoutingModule
      ],
      declarations: [
        PlayersComponent
      ],

      providers: [
        PlayersResolver
      ]
})
export class PlayersModule {}