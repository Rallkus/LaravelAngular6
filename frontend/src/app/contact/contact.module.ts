import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ContactComponent } from './contact.component';
import { SharedModule } from '../shared';
import { ContactRoutingModule } from './contact-routing.module';

@NgModule({
    imports: [
        SharedModule,
        ContactRoutingModule
      ],
      declarations: [
        ContactComponent
      ]
})
export class ContactModule {}