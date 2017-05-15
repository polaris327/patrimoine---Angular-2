import { Injectable } from '@angular/core';
import swal from 'sweetalert2';

@Injectable()
export class ShoppingCartService {

  products: any[];

  constructor() {
    this.products = [];
  }


  public add(product: any){
    for (let i = 0; i < this.products.length; i++)
    {
      if (product === this.products[i])
      {
        swal('Désolé...', 'Ce bien est déjà ajouté...', 'info');
        return;
      }
    }
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

