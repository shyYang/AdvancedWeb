import { Component } from '@angular/core';

import { products } from '../products';

import {MyServiceService} from '../my-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  constructor(public service: MyServiceService){

  }
  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
  addToShoppingCart(product: any){
    if (this.service.set(product.name, product) === 0){
      window.alert('This product is already in the shopping cart');
    }else{
      window.alert('Add Successfully!');
    }
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
