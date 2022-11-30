import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PedidoService } from '../../../services/pedido.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { AuthService } from '../../../services/auth.service';
import { Usuario } from '../../../models/usuario.model';

@Component({
  selector: 'app-consulta-compras',
  templateUrl: './consulta-compras.component.html',
  styleUrls: ['./consulta-compras.component.css']
})
export class ConsultaComprasComponent implements OnInit {

  pedidoUsaurio : any[] = []

  nombresCompletos : string

  constructor(private pedidoService:PedidoService, private router:Router,private authService: AuthService) { }

  ngOnInit(): void {
    this.cargarPedido();
  }

  cargarPedido(){

    this.nombresCompletos = this.authService.usuario.firstName+" "+this.authService.usuario.lastName
    this.pedidoService.getPedidoByUser(this.authService.usuario.id).subscribe(
      response => {
        console.log("peddido usuario")
        console.log(response)
        this.pedidoUsaurio = response.data;
      }
    )

  }

  detalleProducto(index : number){
    
    console.log("ingreso")
    this.router.navigate(['consultaCompraDetalle/'+index]);

    
  }

}
