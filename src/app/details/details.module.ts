import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsRoutingModule } from './details.routing';
import { DetailsContentComponent } from './details-content/details-content.component';

@NgModule({
  imports: [
    CommonModule,
    DetailsRoutingModule
  ],
  declarations: [DetailsContentComponent]
})
export class DetailsModule { }
