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
    
    
    for (let index = 0; index < this.cartService.getCart().length; index++) {
      if(this.cartService.getCart()[index].productId === product_id){
        this.cartComponent.cartTotal-= ( this.cartItem.stock * this.cartItem.price )
        
      }
      
    }

  }


}
