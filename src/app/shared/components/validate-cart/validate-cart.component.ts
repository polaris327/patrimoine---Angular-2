import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';
import { PublicService } from '../../services/public/public.service';
import { InitLoadCustomService } from '../../services/init-load-custom.service';

@Component({
  selector: 'app-validate-cart',
  templateUrl: './validate-cart.component.html',
  styleUrls: ['./validate-cart.component.css']
})
export class ValidateCartComponent implements OnInit {

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
    products:any[];

  @ViewChild('myModal') public myModal:ModalDirective;

  public showChildModal():void {
    this.myModal.show();
  }

  public hideChildModal():void {
    this.myModal.hide();
  }
}
