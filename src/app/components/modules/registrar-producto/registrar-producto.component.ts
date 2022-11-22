import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto.model';

@Component({
  selector: 'app-registrar-producto',
  templateUrl: './registrar-producto.component.html',
  styleUrls: ['./registrar-producto.component.css']
})
export class RegistrarProductoComponent implements OnInit {

  producto: Producto = {
    
    product_id: 1,
    product_name: "Cake Pink ",
    product_description: 'Cake Pink',
    product_price: 25.00,
    product_stock: 5,
    product_state:true
    
  };

  constructor() { }

  ngOnInit(): void {
  }

}
