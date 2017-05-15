import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { InitLoadCustomService } from '../../services/init-load-custom.service';

@Component({
  selector: 'app-result-map-view',
  templateUrl: './result-map-view.component.html',
  styleUrls: ['./result-map-view.component.css']
})
export class ResultMapViewComponent implements DoCheck, OnChanges, OnInit {
  abstract;

  constructor(
    private _initLoadCustomService: InitLoadCustomService
  ) {
  }

  ngOnInit() {
  }

  ngOnChanges() {
  }

  ngDoCheck(){
  }

  ngOnDestroy() {
    this._initLoadCustomService.resetCustomServiceData();
  }

  showInfoWindow(event, index:number) {
    var marker = event.target;
    marker.ng2MapComponent.openInfoWindow('iw', marker, {
      lat: marker.getPosition().lat(),
      lng: marker.getPosition().lng(),
      address: this._initLoadCustomService.mapAddressData[index]
    });
}
