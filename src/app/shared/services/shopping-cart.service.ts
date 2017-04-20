import { Injectable } from '@angular/core';

@Injectable()
export class ShoppingCartService {

  products: any[];

  constructor() {
    this.products = [];
  }


  public add(product: any){

    this.products.push(product);
  }

  remove(index: number) {

    if (index > -1) {
      this.products.splice(index, 1);
    }

  }

  clear() {

    this.products = [];

  }

  public get() {

    return this.products;

  }

}

