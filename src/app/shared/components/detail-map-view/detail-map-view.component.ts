import { Component, OnInit, Input } from '@angular/core';
import { InitLoadCustomService } from '../../services/init-load-custom.service';

@Component({
  selector: 'app-detail-map-view',
  templateUrl: './detail-map-view.component.html',
  styleUrls: ['./detail-map-view.component.css']
})
export class DetailMapViewComponent implements OnInit {
  positions = [];

  constructor(
    private _initLoadCustomService: InitLoadCustomService
  ) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this._initLoadCustomService.resetCustomServiceData();
  }

  @Input()
    items:any = [];

  showInfoWindow(event) {
    var marker = event.target;
    marker.ng2MapComponent.openInfoWindow('iw', marker, {
      lat: marker.getPosition().lat(),
      lng: marker.getPosition().lng(),
      address: this.items
    });
  }
}
