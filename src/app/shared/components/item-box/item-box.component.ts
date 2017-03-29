import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { InitLoadCustomService } from '../../services/init-load-custom.service';

@Component({
  selector: 'app-item-box',
  templateUrl: './item-box.component.html',
  styleUrls: ['./item-box.component.css'],
  //changeDetection: ChangeDetectionStrategy.OnPush//to avoid frequent method binding in template in angular 2
})
export class ItemBoxComponent implements OnInit {

  constructor(
    private _initLoadCustomService: InitLoadCustomService
  ) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this._initLoadCustomService.resetCustomServiceData();
  }

}
