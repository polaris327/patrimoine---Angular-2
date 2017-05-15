import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable, Subject, ReplaySubject } from 'rxjs';
import 'rxjs/add/operator/map';
import { Config } from '../config/config';
import { PublicService } from '../../shared/services/public/public.service';
import { SearchMode } from '../config/config';

@Injectable()
export class CustomService {
  static id = "CustomService";
  protected inMemoryBasePath: string;

  constructor(
    private http: Http,
    private config: Config,
    private _publicService: PublicService
  ) {
    //this.inMemoryBasePath = "api/items";
    this.reqOptions = new RequestOptions({ headers: new Headers({"Content-Type": "application/json; charset=UTF-8"}) });//current not used
  }

  private reqOptions: any;
  private spaceDataURL: string;
  private docDataURL: string;
  private spaceData: Subject<any> = new ReplaySubject<any>(1);
  private docData:any = [];

  /* API for Spaces*/
  get spaceData$(): Observable<any> {
    return this.spaceData.asObservable();
  }

  public  resetSpaceData(): void {
    delete this.spaceData;
    this.spaceData = new ReplaySubject<any>(1);
  }

  getSpaceData() {
    //if (this._publicService.currentSearchOptionID == SearchMode.ALL) {
    //  this.spaceDataURL = this.config.apiBaseURL + 'spaces' + this.config.apiWCWPURL + "&exact=true";
    //} else if (this._publicService.currentSearchOptionID == SearchMode.BY_TITLE) {
    //  this.spaceDataURL += "&" + this._publicService.searchOptionURLs[this._publicService.currentSearchOptionID].url + this._publicService.selectedKeyword;
    //} else if (this._publicService.currentSearchOptionID == SearchMode.BY_ARCHITECTE) {
    //  this.spaceDataURL += "&" + this._publicService.searchOptionURLs[this._publicService.currentSearchOptionID].url + this._publicService.selectedKeyword;
    //} else {
    //  this.spaceDataURL += "&" + this._publicService.searchOptionURLs[this._publicService.currentSearchOptionID].url;
    //}
    if (this._publicService.currentSearchOptionID == SearchMode.ALL) {
      this._publicService.currentSearchOptionURL = '';
    }
    this.spaceDataURL = this.config.apiBaseURL + 'spaces' + this.config.apiWCWPURL + this._publicService.currentSearchOptionURL + this.config.apiExact;
    this.http.get(this.spaceDataURL, this.reqOptions)
      .map(x => x.json())
      .subscribe(data => {
        this.spaceData.next(data);
      });
  }

  /* API for Docs*/
  public docData$(index:number): Observable<any> {
    this.docData[index] = new ReplaySubject<any>(1);
    return this.docData[index].asObservable();
  }

  public  resetDocData(): void {
    this.docData = [];
  }

  getDocData(space_id = null, index = 0) {
    this.docDataURL = this.config.apiBaseURL + this.config.apiWCWPURL + '&tagset_ids=' + space_id;
    this.http.get(this.docDataURL, this.reqOptions)
      .map(x => x.json())
      .subscribe(data => {
        console.log("asdfafs>>>>>>>>"+index);
        this.docData[index].next(data);
      });
  }

  /**
   * POST
   */
  postForm(plainData): Observable<any> {
    let jsonData = JSON.stringify(plainData, null, 2);
    console.log("JSON DATA......", jsonData);
    let url = this.config.apiPostURL + '?auth_token=' + this.config.auth_token + '&uuid=' + this.config.uuid;
    return this.http.post(url, jsonData, this.reqOptions)
      .map(x => x.json());
  }

  /**
   * From In-Memory-Database
   * [dataPlatform Account Group$ description]
   * @return {Observable<any>} [description]
   */
  //get itemData$(): Observable<any> {
  //  return this.itemData.asObservable();
  //}

  /**
   * Reset item data
   */
  //public resetItemData(): void {
  //  delete this.itemData;
  //  this.itemData = new ReplaySubject<any>(1);
  //}

  /**
   * Load item data
   */
  //getItemData(id = null) {
  //  if (id === null) {
  //    this.url = this.inMemoryBasePath;
  //  } else {
  //    this.url = this.inMemoryBasePath + '?id=' + id;
  //  }
  //  this.http.get(this.url, this.reqOptions)
  //    .map(x => x.json())
  //    .subscribe(data => {
  //      this.itemData.next(data);
  //    });
  //}
}


