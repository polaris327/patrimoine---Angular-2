import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service'
import { InitLoadCustomService } from '../../services/init-load-custom.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  constructor(
    private _shoppingCartService: ShoppingCartService,
    private _initLoadCustomService: InitLoadCustomService
  ) { }

  ngOnInit() {
  }

  removeFromCart(index: number) {
    console.log(index);
    this._shoppingCartService.remove(index);
  }

  @Input()
    idInDocData:number = 0;
  @Input()
    idInProducts:number = 0;
}
