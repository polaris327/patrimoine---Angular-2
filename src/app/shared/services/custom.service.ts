import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable, Subject, ReplaySubject } from 'rxjs';
import 'rxjs/add/operator/map';
import { Config } from '../config/config';

@Injectable()
export class CustomService {
  static id = "CustomService";
  protected basePath: string;
  protected inMemoryBasePath: string;

  constructor(
    private http: Http,
    private config: Config
  ) {
    this.basePath = this.config.api;
    this.inMemoryBasePath = "api/items";
    this.reqOptions = new RequestOptions({ headers: new Headers({"Content-Type": "application/json; charset=UTF-8"}) });
  }

  private reqOptions: any;
  private url: string;
  private itemData: Subject<any> = new ReplaySubject<any>(1);
  private spaceData: Subject<any> = new ReplaySubject<any>(1);
  private docData: Subject<any> = new ReplaySubject<any>(1);

  /**
   * [dataPlatform Account Group$ description]
   * @return {Observable<any>} [description]
   */
  get itemData$(): Observable<any> {
    return this.itemData.asObservable();
  }

  /**
   * Reset item data
   */
  public resetItemData(): void {
    delete this.itemData;
    this.itemData = new ReplaySubject<any>(1);
  }

  /**
   * Load item data
   */
  getItemData(id = null) {
    if (id === null) {
      this.url = this.inMemoryBasePath;
    } else {
      this.url = this.inMemoryBasePath + '?id=' + id;
    }
    this.http.get(this.url, this.reqOptions)
      .map(x => x.json())
      .subscribe(data => {
        this.itemData.next(data);
      });
  }

  /* API for Spaces*/
  get spaceData$(): Observable<any> {
    return this.spaceData.asObservable();
  }

  public  resetSpaceData(): void {
    delete this.spaceData;
    this.spaceData = new ReplaySubject<any>(1);
  }

  getSpaceData(id = null) {
    if (id === null) {
      this.url = this.basePath + 'spaces' + '?wc=58bebaea0dc61a635f6079c2&wp=58bebaa50dc61a62706c4923';
    } else {
      this.url = this.basePath + '?id=' + id;
    }
    this.http.get(this.url, this.reqOptions)
      .map(x => x.json())
      .subscribe(data => {
        this.spaceData.next(data);
      });
  }

  /* API for Docs*/
  get docData$(): Observable<any> {
    return this.docData.asObservable();
  }

  public  resetDocData(): void {
    delete this.docData;
    this.docData = new ReplaySubject<any>(1);
  }

  getDocData(id = null) {
    if (id === null) {
      this.url = this.basePath + '?wc=58bebaea0dc61a635f6079c2&wp=58bebaa50dc61a62706c4923' + '&superfields[opération]=MORILLON';
    } else {
      this.url = this.basePath + '?wc=58bebaea0dc61a635f6079c2&wp=58bebaa50dc61a62706c4923' + '&superfields[opération]=' + id;
    }
    this.http.get(this.url, this.reqOptions)
      .map(x => x.json())
      .subscribe(data => {
        this.docData.next(data);
      });
  }
}


