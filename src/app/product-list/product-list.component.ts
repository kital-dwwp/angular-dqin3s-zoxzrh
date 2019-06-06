import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
//j'utilise un getteur pour récupéré l'instance de mon objet.
  get newTabProducts() {
    return this.productService.getnewTabProduct();
  }
// je mets dans mon constructeur mon product service
  constructor(private productService: ProductService) {
  }

  // Equivalent a :
  // private productService: ProductService;
  // constructor(productService: ProductService) {
  //   this.productService = productService;
  // }

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/