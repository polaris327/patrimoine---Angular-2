import { Component, OnInit } from '@angular/core';
import { PublicService } from '../../shared/services/public/public.service';

@Component({
  selector: 'app-notices-box',
  templateUrl: './notices-box.component.html',
  styleUrls: ['./notices-box.component.css']
})
export class NoticesBoxComponent implements OnInit {

  constructor(
    private _publicService: PublicService,
  ) {
  }

  ngOnInit() {
  }

  protected onClick($event):void {
    //console.log($event);
  }
}
