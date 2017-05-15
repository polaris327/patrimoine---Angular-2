import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shared/services/shopping-cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public shoppingCartItems$: any[];

  constructor(
    private _shoppingCartService: ShoppingCartService
  ) {
    this.shoppingCartItems$ = this
      ._shoppingCartService
      .get();
  }

  ngOnInit() {
  }

}
