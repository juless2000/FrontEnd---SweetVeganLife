import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-consultar-producto',
  templateUrl: './consultar-producto.component.html',
  styleUrls: ['./consultar-producto.component.css']
})
export class ConsultarProductoComponent implements OnInit {

  productoList:any[] = []

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.consultarProductoFromService();
  }

  consultarProductoFromService(){

    console.log("ingreso service")
    this.productoService.getProductosFromService().subscribe(
      response =>{
        this.productoList  = response.products
        
        console.log(response)
      }

    )


  }

  eliminarProducto(index: number){

    console.log("index : " + index )

  }

}
