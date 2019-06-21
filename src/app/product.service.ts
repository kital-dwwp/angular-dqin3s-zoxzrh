import { Injectable } from '@angular/core';
import { products } from './products';
import { Observable } from 'rxjs';
import { APIService, WordPressObject } from './api.service';

export interface ProductDetails {
  id?: number,
  name: string,
  price:number,
  description: string,
}


@Injectable({
    providedIn: 'root'
})
export class ProductService {
  private newTabProduct:  ProductDetails[];


  constructor(public apisvc: APIService) {
    this.newTabProduct = products;
    
  }
  
  getlist(): Promise<ProductDetails[]> {
    return this.apisvc.list("product")
            .then((wpProducts: WordPressObject[]) => {
              // Convert wpProducts from WordPressObject[] to ProductDetails[]
              return this.transformProducts(wpProducts);
            });
  }

  async getList2(): Promise<ProductDetails[]> {
    let wpProducts: WordPressObject[] = await this.apisvc.list("product");

    return this.transformProducts(wpProducts);
  }

  getProductById(id: number): Promise<ProductDetails>{    
    return this.apisvc.get("product", id)
              .then((wpProduct: WordPressObject) => {
                return this.transformProduct(wpProduct);
              });
  }

  transformProducts(wpProducts: WordPressObject[]): ProductDetails[] {
    return wpProducts.map((product: WordPressObject) => this.transformProduct(product));
  }

  transformProduct(wpProduct: WordPressObject): ProductDetails {
    return {
      id: wpProduct.id,
      price: wpProduct.meta._price,
      name: wpProduct.title.rendered,
      description: wpProduct.excerpt.rendered,
    }
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




// interface Callable {
//   (): void;
// }

// let a: Callable = {};  // Erreur

// let b: Callable = function(){ return; }
// APIService.service.ts
