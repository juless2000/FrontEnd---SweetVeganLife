import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto.model';
import { CartService } from '../../../services/cart.service';
import { CartComponent } from '../cart/cart.component';
import { PedidoService } from '../../../services/pedido.service';
import { Pedido } from '../../../models/pedido.model';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styleUrls: ['./payment-detail.component.css']
})
export class PaymentDetailComponent implements OnInit {

  cartItems = []
  cartTotal = 0
  subTotal = 20

  pedido: Pedido = {
    Total : this.cartTotal,
    Producto : JSON.parse(localStorage.getItem("cart") || "[]")
  };

  constructor(private cartService:CartService, private pedidoService:PedidoService) { }

  ngOnInit(): void {
    this.cargarCarrito();
  }

  cargarCarrito(){

    this.cartItems =  JSON.parse(localStorage.getItem("cart") || "[]");

    this.cartItems.forEach(item => {
      this.cartTotal += ( item.stock * item.price )
    })

  }


  removeItem(product_id: number) {
  
    console.log("ingreso" + product_id)
    for (let index = 0; index < this.cartItems.length; index++) {
      console.log("index:" + index)
      if(index === product_id){
        this.cartTotal -= ( this.cartItems[index].stock * this.cartItems[index].price )
        this.cartItems.splice(index,1)
        this.cartService.getCart().splice(index,1)
        this.cartService.getCart()[index].stock = 1
        
      }
      
    }

    if(this.subTotal < 0){
      this.subTotal = 0
    }

  }


  registrarPedido(){

    console.log("ingreso")

    this.pedido.Total = this.cartTotal
    this.pedidoService.savePedido(this.pedido);

     this.pedidoService.getPedidos();

    console.log("get pedido" + this.pedidoService.getPedidos())

    this.pedidoService.getPedidos().forEach(element => {
      console.log("email : " + element.email)
      console.log("nombre : " + element.nombre)
      console.log("apellido : " + element.apellido)
      console.log("ciudad : " + element.ciudad)
      console.log("direccion : " + element.direccion)
      console.log("region : " + element.region)
      console.log("telefono : " + element.telefono)
      console.log("Total : " + element.Total)
      console.log(element.Producto[1]) 

    });
  


  }



}
