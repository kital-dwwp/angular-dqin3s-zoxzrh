import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';
import { CartService } from '../cart.service';
import { ProductService, ProductDetails } from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: ProductDetails;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private productservice: ProductService,   
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      // + equivalent parseFloat.
      const productId = +params.get('productId');
      debugger;    
      //this.product=this.productservice.getnewTabProduct();

      //this.product = products[productId];//
      // 

      // Version synchrone
      this.product = this.productservice.getItem(productId);

      // Version asynchrone
      this.productservice.getItemAsync(productId)
        .then((produit: ProductDetails) => {
          this.product = produit;
        })
        .catch((err: Error) => { 
          console.error(err); 
        });

      // Version asynchrone avec async (ES6)
      // this.product = await this.productservice.getItemAsync(productId);
      // console.log(this.product);
    });
  }

  addToCart(product) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(product);
  }
}

