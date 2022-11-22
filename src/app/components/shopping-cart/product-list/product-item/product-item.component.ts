import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/producto.model';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem: Producto

  constructor(private router:Router, private msg: MessengerService) { }

  ngOnInit(): void {
  }

  handlerAddToCart() {
    this.msg.sendMsg(this.productItem)
  }

  toDetailProduct(product_id: number){
    
    console.log("ingreso")
    this.router.navigate(['productoDetalle/'+product_id]);
}

}
