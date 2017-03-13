import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsRoutingModule } from './details.routing';
import { SharedComponentModule } from '../shared/components/shared-component.module';

import { DetailsContentComponent } from './details-content/details-content.component';

@NgModule({
  imports: [
    CommonModule,
    DetailsRoutingModule,
    SharedComponentModule
  ],
  providers: [],
  declarations: [
    DetailsContentComponent
  ]
})
export class DetailsModule { }
