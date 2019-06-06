import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];

  

  constructor(
    private http: HttpClient
  ) {
 let myItem=localStorage.getItem("database");
  let myMyItem=JSON.parse(myItem);  
  this.items=myMyItem;


  }

  addToCart(product) {
    this.items.push(product);
    this.saveToStorage();
    
  }

  getItems() {
    return this.items;
    
  }
  // Enregistre l'état de mon panier (this.items) dans localStorage
  saveToStorage(){
    let newItem=JSON.stringify(this.items);
    localStorage.setItem("database",newItem);
  }

  clearCart() {
    this.items = [];
    this.saveToStorage();
    return this.items;
  }

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }
  

}
