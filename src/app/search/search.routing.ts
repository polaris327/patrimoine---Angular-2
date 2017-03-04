import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoticeContentComponent } from './notice-content/notice-content.component';

export const routes: Routes = [
  {
    path: '',
    component: NoticeContentComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class SearchRoutingModule {}
