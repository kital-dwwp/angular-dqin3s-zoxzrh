import { Injectable } from '@angular/core';
import { products } from './products';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class ProductService {
  private newTabProduct:  ProductDetails[];


  constructor() {
    this.newTabProduct = products;
  }

  public getnewTabProduct(): ProductDetails[] {
    return this.newTabProduct;
  }

  public getItem(productId: number): ProductDetails {
    return this.newTabProduct[productId];
  }

  public getItemAsync(productId: number): Promise<ProductDetails>{
    return new Promise((resolve, reject) => {
      const item = this.newTabProduct[productId];
      
      if(item){
        resolve(item);
      }else{
        reject(new Error("L'article n'existe pas"));
      }
    })
  }

  public getItemObservable(productId: number): Observable<ProductDetails>{
    return
  }
}

export interface ProductDetails{
  name: string,
  price:number,
  description: string,
}


// interface Callable {
//   (): void;
// }

// let a: Callable = {};  // Erreur

// let b: Callable = function(){ return; }