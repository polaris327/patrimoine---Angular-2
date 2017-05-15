import { Component, OnInit } from '@angular/core';
import {ShoppingCartService} from '../../services/shopping-cart.service'
import { PublicService } from '../../services/public/public.service';
import { InitLoadCustomService } from '../../services/init-load-custom.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  products: any[];

  constructor(
    private _shoppingCartService: ShoppingCartService,
    private _publicService: PublicService,
    private _initLoadCustomService: InitLoadCustomService
  ) { }

  ngOnInit() {
    this.products = this._shoppingCartService.get();
  }

  onValidate() {
    this._publicService.sendModalOpenEvent(true);
  }
}
