import { Component, OnInit } from '@angular/core';
import { PublicService } from '../../shared/services/public/public.service';
import { InitLoadCustomService } from '../../shared/services/init-load-custom.service';
import { SearchMode } from '../../shared/config/config';

@Component({
  selector: 'app-notices-box',
  templateUrl: './notices-box.component.html',
  styleUrls: ['./notices-box.component.css']
})
export class NoticesBoxComponent implements OnInit {

  constructor(
    private _publicService: PublicService,
    private _initLoadCustomService: InitLoadCustomService
  ) {
  }

  ngOnInit() {
  }

  protected onClick($event):void {
    if ($event == "Résultats par page : 10") {
      this._publicService.currentSearchOptionID = SearchMode.RESULTS_PER_PAGE_10;
    } else if ($event == "Résultats par page : 20") {
      this._publicService.currentSearchOptionID = SearchMode.RESULTS_PER_PAGE_20;
    } else if ($event == "Résultats par page : 30") {
      this._publicService.currentSearchOptionID = SearchMode.RESULTS_PER_PAGE_30;
    }
    this._initLoadCustomService.reloadData();
  }

  //ng2-tags-inputs
  protected onTagsChange($event):void {

  }

  protected onTagsAdded($event):void {

  }

  protected onTagRemoved($event):void {

  }
}
