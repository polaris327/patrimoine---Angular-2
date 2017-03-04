import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsContentComponent } from './details-content/details-content.component';

export const routes: Routes = [
  {
    path: '',
    component: DetailsContentComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class DetailsRoutingModule {}
