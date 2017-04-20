import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';
import { PublicService } from '../../services/public/public.service';
import { InitLoadCustomService } from '../../services/init-load-custom.service';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.css']
})


export class ImageViewerComponent implements OnInit {

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

  @ViewChild('canvas') private canvas:any;
  @ViewChild('image') private image:any;
  @ViewChild('modalBody') modalBody:any;
  private element:any;
  private angleInDegrees = 0;
  private zoomDelta = 0.1;
  private currentScale = 1;
  private currentAngle = 0;
  private canvasWidth = 600;
  private novosDadosTRBL;
  private novosDadosWH;
  private novosDadosW;
  private novosDadosH;
  private startX = false;
  private startY = false;
  private isDown = false;

  ngAfterViewInit() {
    //var canvas = this.elRef.nativeElement.querySelector('canvas');
    //var modalbody = this.elRef.nativeElement.querySelector('modalbody');
    this.element = this.canvas.nativeElement.getContext("2d");
    console.log("CANVAS..." + this.canvas.nativeElement);
    console.log("IMAGE..." + this.image.nativeElement.width);
    console.log("modalbody..." +  this.modalBody.nativeElement.width);
    //this.canvas.nativeElement.width = angular.element('#image-zoom').width();
  }

  drawImage() {
    this.element.clearRect(-2000,-2000,5000,5000);
    this.element.save();
    this.element.scale(this.currentScale, this.currentScale);
    this.element.rotate(this.currentAngle * Math.PI / 180);
    this.element.drawImage(this.image.nativeElement, -this.image.nativeElement.width / 2, -this.image.nativeElement.height / 2);
    this.element.restore();
  }

  getMousePos(canvas, evt): any {
    let rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
  }

  //method to get the mouse position when mouse button is down
  //onmousedown (e: any) {
  //  let pos = this.getMousePos(this.canvas.nativeElement, e);
  //  this.startX = pos.x;
  //  this.startY = pos.y;
  //  this.isDown = true;
  //}

  ////method to update the image position in the canvas when it is dragged
  //this.canvas.nativeElement.onmousemove(e) {
  //  if (this.isDown === true) {
  //    var pos = this.getMousePos(this.canvas.nativeElement, e);
  //    var x = pos.x;
  //    var y = pos.y;
  //
  //    this.element.translate(x - this.startX, y - this.startY);
  //    this.drawImage();
  //
  //    this.startX = x;
  //    this.startY = y;
  //  }
  //}
  //
  ////method to detect the mouse up for image dragging
  //window.onmouseup(e) {
  //  this.isDown = false;
  //}

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

  clickon() {
  }
}
