import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TechnologiesComponent } from './technologies.component';
import { SharedModule } from '../shared';
import { TechnologiesRoutingModule } from './technologies-routing.module';

@NgModule({
    imports: [
        SharedModule,
        TechnologiesRoutingModule
      ],
      declarations: [
        TechnologiesComponent
      ]
})
export class TechnologiesModule {}