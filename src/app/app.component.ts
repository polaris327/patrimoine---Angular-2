import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ShoppingCartService } from './shared/services/shopping-cart.service';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public shoppingCartItems$: any[];

  constructor(
    public location: Location,
    private _shoppingCartService: ShoppingCartService
  ) {

    this.shoppingCartItems$ = this
      ._shoppingCartService
      .get();

  }

  goBack(): void {
    this.location.back();
  }
}
