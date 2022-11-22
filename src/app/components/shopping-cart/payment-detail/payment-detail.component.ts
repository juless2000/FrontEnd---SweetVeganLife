import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto.model';
import { CartService } from '../../../services/cart.service';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styleUrls: ['./payment-detail.component.css']
})
export class PaymentDetailComponent implements OnInit {

  cartItems = []
  cartTotal = 0
  subTotal = 20

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cargarCarrito();
  }

  cargarCarrito(){

    this.cartItems =  JSON.parse(localStorage.getItem("cart") || "[]");

    this.cartItems.forEach(item => {
      this.cartTotal += ( item.product_stock * item.product_price )
    })

  }


  removeItem(product_id: number) {
  
    console.log("ingreso" + product_id)
    for (let index = 0; index < this.cartItems.length; index++) {
      console.log("index:" + index)
      if(index === product_id){
        this.cartTotal -= ( this.cartItems[index].product_stock * this.cartItems[index].product_price )
        this.cartItems.splice(index,1)

      
        
      }
      
    }

    if(this.subTotal < 0){
      this.subTotal = 0
    }

  }

}
