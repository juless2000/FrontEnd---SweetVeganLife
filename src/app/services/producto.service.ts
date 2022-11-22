import { HttpClient, HttpHeaders} from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario.model';
import { Producto } from '../models/producto.model';

const baseURL_cliente = 'http://localhost:8090/';

@Injectable({
    providedIn: 'root'
  })
export class ProductoService {
  
    productos : Producto[] = [
        new Producto(1,"Pastel de Avellanas", "Cake Pink",25.00, 1,true, "../../../../../assets/imagenes/product_cake1.png"),
        new Producto(2,"Tarta de zanahoria", "Tarta de zanahoria, almendra y chocolate blanco",100.00, 1,true, "../../../../../assets/imagenes/product_cake1.png"),
        new Producto(3,"Lingote de chocolate", "Lingote de chocolate y avellanas",140.00, 1,true, "../../../../../assets/imagenes/product_cake1.png"),
        new Producto(4,"Tarta de queso", "Tarta de queso y frutos rojos",84.00, 1,true, "../../../../../assets/imagenes/product_cake1.png"),
        new Producto(5,"Tarta de almendras", "Tarta de almendras, frambuesa y chocolate blanco",77.00, 1,true, "../../../../../assets/imagenes/product_cake1.png"),
        new Producto(6,"Milhojas de Café", "Milhojas de Café",25.00, 1,true, "../../../../../assets/imagenes/product_cake1.png"),
      
    ]

    constructor(private http:HttpClient) { }

    getProductos(): Producto[]{

        return this.productos;

    }
 
    getProductoxId(){

    }

    saveShoppingCart(usuario: Usuario){

        localStorage.setItem('shoppingCart', JSON.stringify(usuario));

    }

}