import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/models/pedido.model';
import { PedidoService } from '../../../services/pedido.service';

@Component({
  selector: 'app-consultar-pedidos',
  templateUrl: './consultar-pedidos.component.html',
  styleUrls: ['./consultar-pedidos.component.css']
})
export class ConsultarPedidosComponent implements OnInit {

  public pedidosList: Pedido[] = []

  constructor(private pedidoService: PedidoService) { }

  ngOnInit(): void {
    
    this.getPedidos();

  }


  getPedidos(){

    console.log("ingreso pedidos");
    this.pedidosList =  this.pedidoService.getPedidos();

    this.pedidosList.forEach(element => {
        console.log("pedidos: "  + element.direccion);
    });

  }

}
