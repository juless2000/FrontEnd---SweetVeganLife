import { DomElementSchemaRegistry } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Producto } from '../models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: any[] = []

  constructor() { }

  addCart(producto: any){


    this.cartItems.push(producto)
    localStorage.setItem("cart",JSON.stringify(this.cartItems));

  }

  setCartData(data: any){
    
    this.cartItems = data;
    
  }

  getCart() : any[]{
    localStorage.setItem("cart",JSON.stringify(this.cartItems));
    return this.cartItems;
  }

  

}
