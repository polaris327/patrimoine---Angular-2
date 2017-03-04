import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SearchRoutingModule } from './search.routing';
import { NoticeContentComponent } from './notice-content/notice-content.component';
import { ItemBoxComponent} from "../shared/components/item-box/item-box.component";

@NgModule({
  declarations: [
    NoticeContentComponent,
    ItemBoxComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule
  ],
  providers: [],
})
export class SearchModule { }
