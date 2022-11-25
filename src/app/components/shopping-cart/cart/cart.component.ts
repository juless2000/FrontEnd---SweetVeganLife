import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service';
import { Producto } from '../../../models/producto.model';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = [
    // { id: 1, productId: 1, productName: 'Test 1', qty: 4, price: 100 },
    // { id: 2, productId: 3, productName: 'Test 2', qty: 5, price: 50 },
    // { id: 3, productId: 2, productName: 'Test 3', qty: 6, price: 100 },
    // { id: 4, productId: 4, productName: 'Test 4', qty: 7, price: 350 },
  ];

  cartTotal = 0

  constructor(private msg: MessengerService, private cartService:CartService) { }

  ngOnInit(): void {


    this.msg.getMsg().subscribe((product: any) => {
      // this.cartItems.push(product)
      this.addProductToCart(product)
    })

    // console.log(this.cartService.getCart())
    // this.cartItems = this.cartService.getCart();

  }


  addProductToCart(product: any) {

    console.log( this.cartService.getCart())
    
    let productExists = false

    for ( let i in this.cartService.getCart()){
    
      if(this.cartService.getCart()[i].productId === product.productId){
        console.log("ingreso if ")
        this.cartService.getCart()[i].stock++;
        productExists = true
        this.cartItems = this.cartService.getCart();
        break;
      }
    }


    if(!productExists){
      product.stock = 1
      this.cartService.addCart(product)
      this.cartItems = this.cartService.getCart();
    }
    
    
 
    this.cartTotal = 0
    this.cartService.getCart().forEach(item => {
      this.cartTotal += ( item.stock * item.price )
    })

        

  }

}
