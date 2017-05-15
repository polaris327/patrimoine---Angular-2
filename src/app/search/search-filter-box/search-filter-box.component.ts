import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/observable/of';
import { Config } from '../../shared/config/config';
import { PublicService } from '../../shared/services/public/public.service';
import { InitLoadCustomService } from '../../shared/services/init-load-custom.service';
import { SearchMode } from '../../shared/config/config';

@Component({
  selector: 'app-search-filter-box',
  templateUrl: './search-filter-box.component.html',
  styleUrls: ['./search-filter-box.component.css']
})
export class SearchFilterBoxComponent implements OnInit {

  constructor(
    public http: Http,
    private config: Config,
    private _publicService: PublicService,
    private _initLoadCustomService: InitLoadCustomService
  ) { }

  ngOnInit() {
  }

  observableSource1 = (keyword: any): Observable<any[]> => {
    let url: string = this.config.apiBaseURL + 'spaces' + this.config.apiWCWPURL + this._publicService.currentSearchOptionURL + '&' + this._publicService.searchOptionURLs[SearchMode.BY_RANKING].url + keyword;
    if (keyword) {
      return this.http.get(url)
        .map(res => {
          let json = res.json();
          return json.results;
        })
    } else {
      return Observable.of([]);
    }
  }

  observableSource2 = (keyword: any): Observable<any[]> => {
    let url: string = this.config.apiBaseURL + 'spaces' + this.config.apiWCWPURL + this._publicService.currentSearchOptionURL + '&' + this._publicService.searchOptionURLs[SearchMode.BY_OPERATION].url + keyword;
    if (keyword) {
      return this.http.get(url)
        .map(res => {
          let json = res.json();
          return json.results;
        })
    } else {
      return Observable.of([]);
    }
  }

  observableSource3 = (keyword: any): Observable<any[]> => {
    let url: string = this.config.apiBaseURL + 'spaces' + this.config.apiWCWPURL + this._publicService.currentSearchOptionURL + '&' + this._publicService.searchOptionURLs[SearchMode.BY_DATEOFRECEIPT].url + keyword;
    if (keyword) {
      return this.http.get(url)
        .map(res => {
          let json = res.json();
          return json.results;
        })
    } else {
      return Observable.of([]);
    }
  }

  observableSource4 = (keyword: any): Observable<any[]> => {
    let url: string = this.config.apiBaseURL + 'spaces' + this.config.apiWCWPURL + this._publicService.currentSearchOptionURL + '&' + this._publicService.searchOptionURLs[SearchMode.BY_ARCHITECTE].url + keyword;
    if (keyword) {
      return this.http.get(url)
        .map(res => {
          let json = res.json();
          return json.results;
        })
    } else {
      return Observable.of([]);
    }
  }

  observableSource5 = (keyword: any): Observable<any[]> => {
    let url: string = this.config.apiBaseURL + 'spaces' + this.config.apiWCWPURL + this._publicService.currentSearchOptionURL + '&' + this._publicService.searchOptionURLs[SearchMode.BY_ARIANEBOX].url + keyword;
    if (keyword) {
      return this.http.get(url)
        .map(res => {
          let json = res.json();
          return json.results;
        })
    } else {
      return Observable.of([]);
    }
  }

  observableSource6 = (keyword: any): Observable<any[]> => {
    let url: string = this.config.apiBaseURL + 'spaces' + this.config.apiWCWPURL + this._publicService.currentSearchOptionURL + '&' + this._publicService.searchOptionURLs[SearchMode.BY_PHOTOGRAPHER].url + keyword;
    if (keyword) {
      return this.http.get(url)
        .map(res => {
          let json = res.json();
          return json.results;
        })
    } else {
      return Observable.of([]);
    }
  }

  listFormatter1 = (data: any) => {
    return data.superfields.cotation;
  }

  valueFormatter1 = (data: any) => {
    return data.superfields.cotation;
  }

  listFormatter2 = (data: any) => {
    return data.superfields.opération;
  }

  valueFormatter2 = (data: any) => {
    return data.superfields.opération;
  }

  listFormatter3 = (data: any) => {
    return data.superfields['date de réception'];
  }

  valueFormatter3 = (data: any) => {
    return data.superfields['date de réception'];
  }

  listFormatter4 = (data: any) => {
    return data.superfields.architecte;
  }

  valueFormatter4 = (data: any) => {
    return data.superfields.architecte;
  }

  listFormatter5 = (data: any) => {
    return data.superfields['boîte ariane'];
  }

  valueFormatter5 = (data: any) => {
    return data.superfields['boîte ariane'];
  }

  listFormatter6 = (data: any) => {
    return data.superfields['photographe'];
  }

  valueFormatter6 = (data: any) => {
    return data.superfields['photographe'];
  }

  protected onSelected($event, searchModeID:number):void {
    this._publicService.selectedKeyword = $event;
    if ( searchModeID == 1 ) {
      this._publicService.currentSearchOptionID = SearchMode.BY_RANKING;
      this._publicService.currentSearchOptionURL += '&' + this._publicService.searchOptionURLs[SearchMode.BY_RANKING].url + $event;
    } else if ( searchModeID == 2 ) {
      this._publicService.currentSearchOptionID = SearchMode.BY_OPERATION;
      this._publicService.currentSearchOptionURL += '&' + this._publicService.searchOptionURLs[SearchMode.BY_OPERATION].url + $event;
    } else if ( searchModeID == 3 ) {
      this._publicService.currentSearchOptionID = SearchMode.BY_DATEOFRECEIPT;
      this._publicService.currentSearchOptionURL += '&' + this._publicService.searchOptionURLs[SearchMode.BY_DATEOFRECEIPT].url + $event;
    } else if ( searchModeID == 4 ) {
      this._publicService.currentSearchOptionID = SearchMode.BY_ARCHITECTE;
      this._publicService.currentSearchOptionURL += '&' + this._publicService.searchOptionURLs[SearchMode.BY_ARCHITECTE].url + $event;
    } else if ( searchModeID == 5 ) {
      this._publicService.currentSearchOptionID = SearchMode.BY_ARIANEBOX;
      this._publicService.currentSearchOptionURL += '&' + this._publicService.searchOptionURLs[SearchMode.BY_ARIANEBOX].url + $event;
    } else if ( searchModeID == 6 ) {
      this._publicService.currentSearchOptionID = SearchMode.BY_PHOTOGRAPHER;
      this._publicService.currentSearchOptionURL += '&' + this._publicService.searchOptionURLs[SearchMode.BY_PHOTOGRAPHER].url + $event;
    }
    this._initLoadCustomService.reloadData();
  }
}
