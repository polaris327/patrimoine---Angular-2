import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { SearchRoutingModule } from './search.routing';
import { SharedComponentModule } from '../shared/components/shared-component.module';

import { NoticeContentComponent } from './notice-content/notice-content.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { SearchFilterBoxComponent } from './search-filter-box/search-filter-box.component';
import { NoticesBoxComponent } from './notices-box/notices-box.component';

@NgModule({
  declarations: [
    NoticeContentComponent,
    SearchBoxComponent,
    SearchFilterBoxComponent,
    NoticesBoxComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    SearchRoutingModule,
    SharedComponentModule
  ],
  providers: [],
})
export class SearchModule { }
