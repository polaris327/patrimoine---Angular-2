import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/observable/of';
import { Config } from '../../shared/config/config';
import { PublicService } from '../../shared/services/public/public.service';
import { InitLoadCustomService } from '../../shared/services/init-load-custom.service';
import { SearchMode } from '../../shared/config/config';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  constructor(
    public http: Http,
    private config: Config,
    private _publicService: PublicService,
    private _initLoadCustomService: InitLoadCustomService
  ) { }

  ngOnInit() {
  }

  observableSource = (keyword: any): Observable<any[]> => {
    let url: string = this.config.apiBaseURL + 'spaces' + this.config.apiWCWPURL + this._publicService.currentSearchOptionURL + '&' + this._publicService.searchOptionURLs[SearchMode.BY_TITLE].url + keyword;
    if (keyword) {
      return this.http.get(url)
        .map(res => {
          let json = res.json();
          return json.results;
        })
    } else {
      return Observable.of([]);//something like ignoring fast typing
    }
  }

  protected onSelected($event):void {
    this._publicService.selectedKeyword = $event;
    this._publicService.currentSearchOptionID = SearchMode.BY_TITLE;
    this._publicService.currentSearchOptionURL += '&' + this._publicService.searchOptionURLs[SearchMode.BY_TITLE].url + $event;
    this._initLoadCustomService.reloadData();
  }
}
