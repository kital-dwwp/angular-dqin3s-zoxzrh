import { Component } from '@angular/core';
import { ProductService, ProductDetails } from '../product.service';
import { products } from '../products';
import { APIService } from '../api.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
//j'utilise un getteur pour récupéré l'instance de mon objet.
  // get newTabProducts() {
  //   return this.productService.getnewTabProduct();
  // }


  item;

  public productList: ProductDetails[] 

  // je mets dans mon constructeur mon product service
  constructor(private productService: ProductService) {
    // Version synchrone
    //this.productList = this.productService.getnewTabProduct();

    // Version asynchrone
    this.productService.getlist()
      .then(arr => {
        this.productList = arr;
      });
  }
//   getitem(){
//     return new Promise((resolve,reject)=>{
//       let ite=this.productService.getlist();
//       if (ite){
//         resolve(ite);
//       }else{
//         reject(new Error("?"));
//       }
//     })
//   }

// getite(){
//   this.productService.getlist().then(arr=>
//   )
// }
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