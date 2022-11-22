import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-cliente',
  templateUrl: './header-cliente.component.html',
  styleUrls: ['./header-cliente.component.css']
})
export class HeaderClienteComponent implements OnInit {

  title = 'e-commerce-angular-node';
  public productos = [];

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.refrescarCarrito();
  }

  public async refrescarCarrito() {
    // this.productos = await this.carritoService.obtenerProductos();
  }


  toRegister(){
    console.log("ingreso")

    this.router.navigate(['registrarUsuario']);


  }

}
