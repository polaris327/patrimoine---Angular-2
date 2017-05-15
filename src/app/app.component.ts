import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  constructor(
    public location: Location
  ) {
  }

  goBack(): void {
    this.location.back();
  }
}
