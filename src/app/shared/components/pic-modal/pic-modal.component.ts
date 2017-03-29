import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';
import { PublicService } from '../../services/public/public.service';

@Component({
  selector: 'app-pic-modal',
  templateUrl: './pic-modal.component.html',
  styleUrls: ['./pic-modal.component.css'],
  //inputs: ['items']
})
export class PicModalComponent implements OnInit {

  constructor(
    private _publicService: PublicService
  ) {
    this._publicService.getModalOpenObserver.subscribe(data=> {
      if (data == true) {
        this.showChildModal();
      }
    });
  }

  ngOnInit() {
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
