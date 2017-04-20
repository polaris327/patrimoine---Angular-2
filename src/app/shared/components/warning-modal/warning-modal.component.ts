import { Component, OnInit, Input, ViewChild, AfterViewChecked } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';
import { PublicService } from '../../services/public/public.service';

@Component({
  selector: 'app-warning-modal',
  templateUrl: './warning-modal.component.html',
  styleUrls: ['./warning-modal.component.css']
})
export class WarningModalComponent implements OnInit, AfterViewChecked {

  constructor(
    private _publicService: PublicService
  ) {
  }

  protected onInitFlag = false;

  ngOnInit() {
    this.onInitFlag = true;
  }

  ngAfterViewChecked() {
    if (this.onInitFlag && !this._publicService.isWarningOpened) {
      this.myModal.show();
      this.onInitFlag = false;
      this._publicService.isWarningOpened = true;
    }
  }

  ngOnDestroy() {
    this._publicService.removeModalOpenObserver();
  }

  @Input()
    items:any = [];

  @ViewChild('myModal') public myModal:ModalDirective;

  public showChildModal():void {
    this.myModal.show();
  }

  public hideChildModal():void {
    this.myModal.hide();
  }
}
