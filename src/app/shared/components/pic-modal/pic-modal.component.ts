import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';
import { PublicService } from '../../services/public/public.service';
import { InitLoadCustomService } from '../../services/init-load-custom.service';

@Component({
  selector: 'app-pic-modal',
  templateUrl: './pic-modal.component.html',
  styleUrls: ['./pic-modal.component.css'],
  //inputs: ['items']
})
export class PicModalComponent implements OnInit {

  constructor(
    private _publicService: PublicService,
    private _initLoadCustomService: InitLoadCustomService
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
  @Input()
    id:number = 0;

  @ViewChild('myModal') public myModal:ModalDirective;

  public showChildModal():void {
    this.myModal.show();
  }

  public hideChildModal():void {
    this.myModal.hide();
  }

  //mouse wheel
  mouseWheelDir: string = '';
  imgWidth: number = 100;

  mouseWheelUpFunc() {
    console.log('mouse wheel up');
    this.imgWidth = this.imgWidth+10;
  }

  mouseWheelDownFunc() {
    console.log('mouse wheel down');
    this.imgWidth = this.imgWidth-10;
  }
}
