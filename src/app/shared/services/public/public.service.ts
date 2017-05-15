import { Injectable } from '@angular/core';
import { Observable, Subject, ReplaySubject } from 'rxjs';
import 'rxjs/add/operator/map';
import { SearchMode } from '../../config/config';

@Injectable()
export class PublicService {

  public isWarningOpened:any = false;
  private selectedViewMode:any = 'Notices Courtes';
  private viewModes:any = ['Notices Courtes', 'Carte'];
  public selectedKeyword:any = '';
  public currentSearchOptionURL:any = '';
  private selectedNumberOfResultsPerPage:any = {num: 10, name: "Résultats par page : 10"};
  public numbersOfResultsPerPage:any = [
    {num: 10, name: "Résultats par page : 10"},
    {num: 20, name: "Résultats par page : 20"},
    {num: 30, name: "Résultats par page : 30"}
  ];

  public currentSearchOptionID:SearchMode = SearchMode.ALL;
  public searchOptionURLs:any = [
    {id: SearchMode.ALL, url: ''},
    {id: SearchMode.RESULTS_PER_PAGE_10, url: 'limit=10'},
    {id: SearchMode.RESULTS_PER_PAGE_20, url: 'limit=20'},
    {id: SearchMode.RESULTS_PER_PAGE_30, url: 'limit=30'},
    {id: SearchMode.BY_TITLE, url: 'title='},
    {id: SearchMode.BY_RANKING, url: 'superfields[cotation]='},
    {id: SearchMode.BY_OPERATION, url: 'superfields[opération]='},
    {id: SearchMode.BY_DATEOFRECEIPT, url: 'superfields[date de réception]='},
    {id: SearchMode.BY_ARCHITECTE, url: 'superfields[architecte]='},
    {id: SearchMode.BY_ARIANEBOX, url: 'superfields[boîte ariane]='},
    {id: SearchMode.BY_PHOTOGRAPHER, url: 'superfields[photographe]='},
  ];

  constructor(
  ) {
  }

  private modalOpenObserver: Subject<boolean> = new ReplaySubject<boolean>(1);

  get getModalOpenObserver(): Observable<any> {
    return this.modalOpenObserver.asObservable();
  }

  public sendModalOpenEvent(flag: boolean) {
    this.modalOpenObserver.next(flag);
  }

  public removeModalOpenObserver():void {
    this.modalOpenObserver = new ReplaySubject<boolean>(1);
  }
}
