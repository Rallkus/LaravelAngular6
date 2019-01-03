import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LogoutComponent } from './logout.component';
import { SharedModule } from '../shared';
import { LogoutRoutingModule } from './logout-routing.module';

@NgModule({
    imports: [
        SharedModule,
        LogoutRoutingModule
      ],
      declarations: [
        LogoutComponent
      ]
})
export class LogoutModule {}