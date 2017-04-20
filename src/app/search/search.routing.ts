import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoticeContentComponent } from './notice-content/notice-content.component';
import { ShoppingCartComponent } from '../shared/components/shopping-cart/shopping-cart.component';

export const routes: Routes = [
  {
    path: '',
    component: NoticeContentComponent
  },
  {
    path: 'cart',
    component: ShoppingCartComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class SearchRoutingModule {}
