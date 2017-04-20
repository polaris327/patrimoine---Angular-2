import { Component, OnInit } from '@angular/core';
import { PublicService } from '../../shared/services/public/public.service';

@Component({
  selector: 'app-notice-content',
  templateUrl: './notice-content.component.html',
  styleUrls: ['./notice-content.component.css']
})
export class NoticeContentComponent implements OnInit {

  constructor(
    private _publicService: PublicService
  ) { }

  ngOnInit() {
  }
}
