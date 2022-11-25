import { Injectable } from '@angular/core';
import { Pedido } from '../models/pedido.model';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  public pedidosList: Pedido[] = []

  constructor() { }


  savePedido(pedido : Pedido) {
    
    
    console.log("service : " + pedido.nombre)
    this.pedidosList.push(pedido)

    localStorage.setItem("pedido", JSON.stringify(this.pedidosList));

  }


  getPedidos(){

    this.pedidosList = JSON.parse(localStorage.getItem("pedido") || "[]")

    return this.pedidosList;
  }



}
