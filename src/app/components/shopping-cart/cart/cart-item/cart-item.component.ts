import { Component, Input, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service';
import { Producto } from '../../../../models/producto.model';
import { CartComponent } from '../cart.component';
import { CartService } from '../../../../services/cart.service';


@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() cartItem: any
  @Input() indexItem: any
  public producto: Producto;


  constructor(private cartService: CartService, private cartComponent: CartComponent) { }

  ngOnInit(): void {
  }

  removeItem(product_id: number) {
  
    console.log("cantidad lista" + this.cartService.getCart().length)  
    
    for (let index = 0; index < this.cartService.getCart().length; index++) {
       console.log("index:" + index)
      if(index === product_id){
        console.log("index found "+ index)
        this.cartService.getCart().splice(index,1)
        this.cartComponent.cartTotal-= ( this.cartItem.product_stock * this.cartItem.product_price )
      }
      
    }

  }



}
