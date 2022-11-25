import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto.model';
import { Router } from '@angular/router';
import { ProductoService } from '../../../services/producto.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
 
   productoList:any[] = []

  constructor(private router:Router, private productoService: ProductoService) {

   
   }

  ngOnInit(): void {
    this.consultarProductoFromService();
  }


  consultarProducto() {


    this.productoList = this.productoService.getProductos();

      this.productoList as Producto

  }

  consultarProductoFromService(){

    console.log("ingreso service")
    this.productoService.getProductosFromService().subscribe(
      response =>{
        this.productoList  = response.products
        // console.log("respuesta : " + response.)
      }

    )


  }

}
