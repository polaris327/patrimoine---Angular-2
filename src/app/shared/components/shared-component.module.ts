import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ItemBoxComponent } from './item-box/item-box.component';
import { PicModalComponent } from './pic-modal/pic-modal.component';
import { GooglemapComponent } from './googlemap/googlemap.component';

import { ModalModule } from 'ng2-bootstrap/modal';
import { CarouselModule } from 'ng2-bootstrap';

//googlemap configuration
import { AgmCoreModule } from 'angular2-google-maps/core';
import { Ng2MapModule } from 'ng2-map';
import { DetailMapViewComponent } from './detail-map-view/detail-map-view.component';
import { ResultMapViewComponent } from './result-map-view/result-map-view.component';

@NgModule({
  declarations: [
    ItemBoxComponent,
    PicModalComponent,
    GooglemapComponent,
    DetailMapViewComponent,
    ResultMapViewComponent
  ],
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    CarouselModule,
    //AgmCoreModule.forRoot({
    //  apiKey: 'YOUR_KEY'
    //})
    AgmCoreModule.forRoot(),
    Ng2MapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyDCLogJN6E_s1uNso1FDiB90qGFHVOjd9w'})
  ],
  providers: [],
  exports : [
    ItemBoxComponent,
    PicModalComponent,
    GooglemapComponent,
    DetailMapViewComponent,
    ResultMapViewComponent
  ]
})
export class SharedComponentModule { }
