import { Injectable } from '@angular/core';
import { products } from './products';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
  newTabProduct;

  constructor() {
    this.newTabProduct = products;
  }

  getnewTabProduct(){
    return this.newTabProduct;
  }
  getItem(productId){
    return this.newTabProduct[productId];
  }
}
