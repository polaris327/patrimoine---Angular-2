import { Injectable } from '@angular/core';
import { Observable, Subject, ReplaySubject } from 'rxjs';
import 'rxjs/add/operator/map';


@Injectable()
export class PublicService {

  private selectedViewMode:any = 'Notices Courtes';
  private viewModes:any = [
    'Notices Courtes', 'Carte'
  ]

  constructor(

  ) { }

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
