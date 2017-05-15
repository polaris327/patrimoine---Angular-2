import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ItemBoxComponent } from './item-box/item-box.component';
import { PicModalComponent } from './pic-modal/pic-modal.component';
import { WarningModalComponent } from './warning-modal/warning-modal.component';

import { ModalModule } from 'ng2-bootstrap/modal';
import { CarouselModule } from 'ng2-bootstrap';

//googlemap configuration
//import { AgmCoreModule } from 'angular2-google-maps/core';
import { Ng2MapModule } from 'ng2-map';
import { DetailMapViewComponent } from './detail-map-view/detail-map-view.component';
import { ResultMapViewComponent } from './result-map-view/result-map-view.component';
import {ImageZoomModule} from 'angular2-image-zoom';
import { MousewheelDirective } from '../directive/mousewheel.directive';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';
import { CartBtnComponent } from './cart-btn/cart-btn.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ValidateCartComponent } from './validate-cart/validate-cart.component';
import { ValidateFormComponent } from './validate-form/validate-form.component';
import { FormsModule }   from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CartItemComponent } from './cart-item/cart-item.component';

@NgModule({
  declarations: [
    ItemBoxComponent,
    PicModalComponent,
    DetailMapViewComponent,
    ResultMapViewComponent,
    WarningModalComponent,
    MousewheelDirective,
    ImageViewerComponent,
    CartBtnComponent,
    ShoppingCartComponent,
    ValidateCartComponent,
    ValidateFormComponent,
    CartItemComponent
  ],
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    CarouselModule,
    RouterModule,
    //AgmCoreModule.forRoot({
    //  apiKey: 'YOUR_KEY'
    //})
    //AgmCoreModule.forRoot(),
    Ng2MapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyDCLogJN6E_s1uNso1FDiB90qGFHVOjd9w'}),
    ImageZoomModule,
    FormsModule
  ],
  providers: [],
  exports : [
    ItemBoxComponent,
    PicModalComponent,
    WarningModalComponent,
    DetailMapViewComponent,
    ResultMapViewComponent,
    ImageViewerComponent,
    CartBtnComponent,
    ShoppingCartComponent
  ]
})
export class SharedComponentModule { }
