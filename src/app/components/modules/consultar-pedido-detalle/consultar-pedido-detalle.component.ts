import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pedido } from 'src/app/models/pedido.model';
import { Producto } from 'src/app/models/producto.model';
import { ProductoService } from 'src/app/services/producto.service';
import { PedidoService } from '../../../services/pedido.service';

@Component({
  selector: 'app-consultar-pedido-detalle',
  templateUrl: './consultar-pedido-detalle.component.html',
  styleUrls: ['./consultar-pedido-detalle.component.css']
})
export class ConsultarPedidoDetalleComponent implements OnInit {

 
  productoList:any[] = []
  pedidoList: any[] = []

  constructor(private productoService: ProductoService, private activatedRoute: ActivatedRoute, private pedidoService: PedidoService) { }

  ngOnInit(): void {
    this.consultarProductoFromService();
  }

  consultarProductoFromService(){

    // console.log("ingreso service")
    // this.productoService.getProductosFromService().subscribe(
    //   response =>{
    //     this.productoList  = response.products
        
    //     console.log(response)
    //   }

    // )



    this.activatedRoute.paramMap.subscribe(
      params => {
        let id = Number(params.get('id'))
        console.log("get id : " + id)
        
        let pedidoElement = this.pedidoService.getPedidos().find(x => x.idPedido === id) as any
        console.log(this.pedidoService.getPedidos())
        console.log(pedidoElement)
        this.pedidoList = pedidoElement.Producto;
        // if(id){
        //   console.log("siguiente")
        //   this.producto =  this.productoList.find(x => x.productId === id)
        // console.log(this.producto)
          // this.pedidos = this.pedidoService.getPedidos().find(x => x.id);
          
        // }
      })


  }

  eliminarProducto(index: number){

    console.log("index : " + index )

  }


}