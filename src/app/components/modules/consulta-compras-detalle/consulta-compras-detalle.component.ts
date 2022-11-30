import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'app-consulta-compras-detalle',
  templateUrl: './consulta-compras-detalle.component.html',
  styleUrls: ['./consulta-compras-detalle.component.css']
})
export class ConsultaComprasDetalleComponent implements OnInit {

  productosList:any[] = []

  constructor(private activatedRoute: ActivatedRoute,private pedidoService:PedidoService,private authService: AuthService) { }

  ngOnInit(): void {
    this.consultarProductoFromService();
  }

  consultarProductoFromService(){


    this.activatedRoute.paramMap.subscribe(
      params => {
        let id = Number(params.get('id'))
        console.log("get id : " + id)
        
        this.cargarPedido(id);
    
      })


  }

  cargarPedido(idPedido:number){

    this.pedidoService.getPedidoByUser(this.authService.usuario.id).subscribe(
      response => {
        console.log("peddido usuario")
        let pedidoElement = response.data.find(x => x.id === idPedido) as any
        console.log(pedidoElement)
        this.productosList = pedidoElement.details

      }
    )

  }

}
