import { Component, OnInit, Input } from '@angular/core';
import {ShoppingCartService} from '../../services/shopping-cart.service'

@Component({
  selector: 'app-cart-btn',
  templateUrl: './cart-btn.component.html',
  styleUrls: ['./cart-btn.component.css']
})
export class CartBtnComponent implements OnInit {

  constructor(
    private _shoppingCartService: ShoppingCartService
  ) { }

  ngOnInit() {
  }

  @Input()
    product:any = [];

  addToCart(product: any) {
    console.log(this.product);
    this._shoppingCartService.add(this.product);

  }
}
