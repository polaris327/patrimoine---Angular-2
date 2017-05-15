import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location }               from '@angular/common';
import { PublicService } from '../../shared/services/public/public.service';
import { InitLoadCustomService } from '../../shared/services/init-load-custom.service';

@Component({
  selector: 'app-details-content',
  templateUrl: './details-content.component.html',
  styleUrls: ['./details-content.component.css']
})
export class DetailsContentComponent implements OnInit {
  public idx:number = -1;
  public itemData:any = [];

  public length : number = 1; //for lazy loading, will be deprecated soon

  constructor(
    private route:ActivatedRoute,
    private location: Location,
    private _publicService: PublicService,
    private _initLoadCustomService: InitLoadCustomService
  ) {
    this.route.queryParams.subscribe(
        params => {
//          this.idx = params['id'];
          let space_id:string = params['id'];
          this._initLoadCustomService.spaceData.forEach(data => {
            if (data['id'] == space_id )
              this.idx = this._initLoadCustomService.spaceData.indexOf(data);
          });
      }
    );
    console.log("Detail page id is ........ " + this.idx);
    console.log("SPACEDATA Length .......... " + this._initLoadCustomService.spaceData.length);
    console.log("DOCDATA Length .......... " + this._initLoadCustomService.docData.length);
    console.log("MAPDATA Length .......... " + this._initLoadCustomService.mapAddressData.length);
    console.log("thumbImgURL Length .......... " + this._initLoadCustomService.thumbImgURL.length);
    console.log("detailImgURL Length .......... " + this._initLoadCustomService.detailImgURL.length);
  }

  ngOnInit() {
  }

  ///*In-Memory Database*/
  //public loadData():void {
  //  this._getitemdataService.itemData$.subscribe(res => {
  //    this.itemData = [];
  //    res['data'].forEach(data => {
  //      this.itemData = data;
  //      //this.length = this.itemData.length;
  //      this.length = 1;
  //    });
  //  });
  //
  //  this._getitemdataService.getItemData(this.id);
  //}

  ngOnDestroy() {
    this._initLoadCustomService.resetCustomServiceData();
  }

  goBack(): void {
    if ( this._initLoadCustomService.spaceData.length != this._initLoadCustomService.docData.length )//after all items have fully loaded
      return;

    this.location.back();
  }

  private onOpenModal():void {
    this._publicService.sendModalOpenEvent(true);
  }
}
