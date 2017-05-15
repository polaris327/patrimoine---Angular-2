import { Component, OnInit, Input, ViewChild, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';
import { PublicService } from '../../services/public/public.service';
import { InitLoadCustomService } from '../../services/init-load-custom.service';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.css']
})


export class ImageViewerComponent implements OnInit {

  //carousel
  public myInterval: number = 15000;
  public slides: any[] = [];
  public activeSlideIndex: number;
  public noWrapSlides:boolean = false;

  constructor(
    private _publicService: PublicService,
    private _initLoadCustomService: InitLoadCustomService,
    //private elRef:ElementRef
  ) {
    this._publicService.getModalOpenObserver.subscribe(data=> {
      if (data == true) {
        this.showChildModal();
        this.drawImage();
      }
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this._publicService.removeModalOpenObserver();
  }

  //modal
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

  //canvas
  @ViewChild('canvas') private canvas:any;
  @ViewChildren('image') private images:QueryList<any>;
  @ViewChild('modalBody') modalBody:any;
  private element:any;
  private angleInDegrees = 0;
  private zoomDelta = 0.1;
  private currentScale = 1;
  private currentAngle = 0;
  private canvasWidth = 600;
  private startX: any;
  private startY: any;
  private isDown = false;
  private fAfterViewInit = false;
  private flag = 1;

  ngAfterViewInit() {
    //var canvas = this.elRef.nativeElement.querySelector('canvas');
    //var modalbody = this.elRef.nativeElement.querySelector('modalbody');
    this.element = this.canvas.nativeElement.getContext("2d");
    console.log("CANVAS..." + this.canvas.nativeElement);
    console.log("modalbody..." +  this.modalBody.nativeElement.width);
    //this.canvas.nativeElement.width = angular.element('#image-zoom').width();
    this.element.translate(this.canvas.nativeElement.width / 2, this.canvas.nativeElement.height / 2);
    this.fAfterViewInit = true;
  }

  drawImage() {
    this.element.clearRect(-2000,-2000,5000,5000);
    this.element.save();
    this.element.scale(this.currentScale, this.currentScale);
    this.element.rotate(this.currentAngle * Math.PI / 180);
    let n = 0;
    this.images.forEach(image => {
      if (n == this.activeSlideIndex)
        this.element.drawImage(image.nativeElement, -image.nativeElement.width / 2, -image.nativeElement.height / 2);
      n++;
    });
    //this.element.drawImage(this.images.first.nativeElement, -this.images.first.nativeElement.width / 2, -this.images.first.nativeElement.height / 2);
    this.element.restore();
  }

  getMousePos(canvas, evt): any {
    let rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
  }

  //mouse wheel
  mouseWheelDir: string = '';
  imgWidth: number = 100;

  mouseWheelUpFunc() {
    console.log('mouse wheel up');
    this.currentScale += this.zoomDelta;
    this.drawImage();
  }

  mouseWheelDownFunc() {
    console.log('mouse wheel down');
    this.currentScale -= this.zoomDelta;
    this.drawImage();
  }

  mousedown(e: MouseEvent): void {
    let pos = this.getMousePos(this.canvas.nativeElement, e);
    this.startX = pos.x;
    this.startY = pos.y;
    this.isDown = true;
  }

  mousemove(e: MouseEvent): void {
    if (this.isDown === true) {
      let pos = this.getMousePos(this.canvas.nativeElement, e);
      let x = pos.x;
      let y = pos.y;

      this.element.translate(x - this.startX, y - this.startY);
      this.drawImage();

      this.startX = x;
      this.startY = y;
    }
  }

  mouseup(e: MouseEvent): void {
    this.isDown = false;
  }

  onZoomIn($event): void {
    this.currentScale += this.zoomDelta;
    this.drawImage();
  }

  onZoomOut($event): void {
    this.currentScale -= this.zoomDelta;
    this.drawImage();
  }

  onRotateToLeft($event): void {
    //set the rotate angle for clockwise rotation
    this.angleInDegrees = -5;
    this.currentAngle += this.angleInDegrees;
    this.drawImage();
  }

  onRotateToRight($event): void {
    //set the rotate angle for clockwise rotation
    this.angleInDegrees = 5;
    this.currentAngle += this.angleInDegrees;
    this.drawImage();
  }

  onReset($event): void {
    this.element = this.canvas.nativeElement.getContext("2d");
    this.angleInDegrees = 0;
    this.currentScale = 1;
    this.currentAngle = 0;
    this.drawImage();
    //this.element.translate(this.canvas.nativeElement.width / 2, this.canvas.nativeElement.height / 2);

    ////for initial loading
    //if(this.flag){
    //  this.flag = 0;
    //  this.drawImage();
    //  this.element.translate(this.canvas.nativeElement.width / 2, this.canvas.nativeElement.height / 2);
    //  setTimeout(function(){
    //    //angular.element('#canvas').attr('data-girar', 0);
    //    this.drawImage();
    //  },1000);
    //}
    //else{
    //  this.element.translate(0,0);
    //  //angular.element('#canvas').attr('data-girar', 0);
    //  this.drawImage();
    //}
  }

  onSlideChanged(): void {
    if (this.fAfterViewInit)
      this.drawImage();
  }
}
