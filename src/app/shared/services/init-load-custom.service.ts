import { Injectable } from '@angular/core';
import { CustomService } from './custom.service';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class InitLoadCustomService {
  public spaceData:any = [];
  public docData:any = [];
  public mapAddressData:any = [];
  public thumbImgURL:any = [];
  public detailImgURL:any = [];

  constructor(
    private router: Router,
    private _getCustomService: CustomService
  ) {
    this.loadSpaceData();
    //this.loadDocData();
  }

  public resetCustomServiceData() {
    this._getCustomService.resetSpaceData();
    this._getCustomService.resetDocData();
  }

  public loadSpaceData():void {
    const instance = this;
    this._getCustomService.spaceData$.subscribe(res =>  {
      if (res['count'] > 0) {
        let index:number = 0;
        res['results'].forEach(data => {
          index = this.spaceData.push(data);
          this.mapAddressData.push(data['superfields']['adresse']);
          instance._getCustomService.getDocData(data['id'], index-1);
          this.loadDocData(index-1);
          console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"+data['id']+"count"+index);
        });
    }
    });

    this._getCustomService.getSpaceData();
  }

  public loadDocData(index:number):void {
    this._getCustomService.docData$(index).subscribe(res =>  {
      console.log("DOC_DATA==="+res['results']);
      this.docData[index] = res['results'][0];
      let thumbURLs:any = [];
      let detailURLs:any = [];
      res['results'].forEach(data => {
        console.log("MULTIDIMEN...==="+data['superfields']['adresse'], index);
        if (data['thumbs_urls'] != '')
          thumbURLs.push('https://paw.parishabitat.fr' + data['thumbs_urls']);

        if (data['pages_urls'] != '')
          detailURLs.push('https://paw.parishabitat.fr' + data['pages_urls']);
      });
      if (thumbURLs.length == 0)
        thumbURLs.push('../../../assets/img/no-thumb.png');
      if (detailURLs.length == 0)
        detailURLs.push('../../../assets/img/no-thumb.png');
      this.thumbImgURL[index] = thumbURLs;
      this.detailImgURL[index] = detailURLs;
      console.log("THUMBIMAGEURL>>>>>", this.detailImgURL[index], this.detailImgURL[index].length);
    });
  }

  public reloadData():void {
    this.spaceData = [];
    this.docData = [];
    this.mapAddressData = [];
    this.thumbImgURL = [];
    this.detailImgURL = [];
    this.resetCustomServiceData();
    this.loadSpaceData();
    //this.loadDocData();
    console.log("SPACEDATA Length .......... " + this.spaceData.length);
    console.log("DOCDATA Length .......... " + this.docData.length);
    console.log("MAPDATA Length .......... " + this.mapAddressData.length);
    console.log("thumbImgURL Length .......... " + this.thumbImgURL.length);
    console.log("detailImgURL Length .......... " + this.detailImgURL.length);
  }

  private gotoDetails(space_id:string):void {
    console.log("SPACE_LENGTH==="+this.spaceData.length);
    console.log("DOC_LENGTH==="+this.docData.length);
    if ( this.spaceData.length != this.docData.length )//after all items have fully loaded
      return;

    console.log("GOTODETAILS.....", space_id);
    let navigationExtras = {
      queryParams: { 'id': space_id }
    };
    this.router.navigate(['/details'], navigationExtras);
  }
  //private gotoDetails(index:number):void {
  //  console.log("SPACE_LENGTH==="+this.spaceData.length);
  //  console.log("DOC_LENGTH==="+this.docData.length);
  //  if ( this.spaceData.length != this.docData.length )//after all items have fully loaded
  //    return;
  //
  //  console.log("GOTODETAILS.....", index);
  //  let navigationExtras = {
  //    queryParams: { 'id': index }
  //  };
  //  this.router.navigate(['/details'], navigationExtras);
  //}

  public getImageUrl(index:number, isThumb:boolean):string {
    if (this.docData.length == this.spaceData.length) {
      if ( isThumb == true)
        return 'https://paw.parishabitat.fr' + this.docData[index][0].thumbs_urls;
      else
        return 'https://paw.parishabitat.fr' + this.docData[index][0].pages_urls;
    }
    return 'placeholder';
  }
}
