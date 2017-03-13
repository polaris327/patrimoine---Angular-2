import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomService } from '../../shared/services/custom.service';
import { Location }               from '@angular/common';
import { PublicService } from '../../shared/services/public/public.service';

@Component({
  selector: 'app-details-content',
  templateUrl: './details-content.component.html',
  styleUrls: ['./details-content.component.css']
})
export class DetailsContentComponent implements OnInit {
  public id:number = -1;
  public itemData:any = [];

  public length : number = 0;

  constructor(
    private _getitemdataService: CustomService,
    private route:ActivatedRoute,
    private location: Location,
    private _publicService: PublicService
  ) {
    this.route.queryParams.subscribe(
        params => {
          this.id = params['id'];
      }
    );
    this.loadData();
  }

  ngOnInit() {
  }

  public loadData():void {
    this._getitemdataService.itemData$.subscribe(res => {
      this.itemData = [];
      res['data'].forEach(data => {
        this.itemData = data;
        //this.length = this.itemData.length;
        this.length = 1;
      });
    });

    this._getitemdataService.getItemData(this.id);
  }

  ngOnDestroy() {
    this._getitemdataService.resetItemData();
  }

  goBack(): void {
    this.location.back();
  }

  private onOpenModal():void {
    this._publicService.sendModalOpenEvent(true);
  }
}
