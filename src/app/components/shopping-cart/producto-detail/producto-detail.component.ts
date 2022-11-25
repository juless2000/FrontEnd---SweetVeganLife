import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/models/producto.model';
import { ProductoService } from '../../../services/producto.service';
import { CartService } from '../../../services/cart.service';
import { MessengerService } from '../../../services/messenger.service';


@Component({
  selector: 'app-producto-detail',
  templateUrl: './producto-detail.component.html',
  styleUrls: ['./producto-detail.component.css']
})
export class ProductoDetailComponent implements OnInit {
 
  productoList:any[]  //test
  public producto: any;

  // public producto = {
  //   id: 0,
  //   fotos: ["https://d320djwtwnl5uo.cloudfront.net/recetas/cover_wv0exjahf5_tortavegana.jpg","https://d320djwtwnl5uo.cloudfront.net/recetas/cover_wv0exjahf5_tortavegana.jpg","https://d320djwtwnl5uo.cloudfront.net/recetas/cover_wv0exjahf5_tortavegana.jpg","https://d320djwtwnl5uo.cloudfront.net/recetas/cover_wv0exjahf5_tortavegana.jpg","https://d320djwtwnl5uo.cloudfront.net/recetas/cover_wv0exjahf5_tortavegana.jpg"],
  //   nombre: "MOUSE",
  //   descripcion: "MOUSE",
  //   precio: 50,
  // };

  public fotoSeleccionada: String;
  public indiceSeleccionado = 0;
  public yaExiste: boolean;

  constructor(private router:Router,private activatedRoute: ActivatedRoute, private productoService:ProductoService,
     private cartService: CartService, private msg: MessengerService) { }

  public resolverFoto(foto) {
    const baseUrl = "https://d320djwtwnl5uo.cloudfront.net/recetas/cover_g1r9b4yaeo_meut-episodicas-ep01-segueza-de-fandango-3.jpg";
    return `${baseUrl}`;
  }

  public seleccionarImagen(indice) {
    this.indiceSeleccionado = indice;
    this.fotoSeleccionada = this.producto.images[0].imageUrl;
  }

  AddCart(product: any) {

    let productExists = false

    for ( let i in this.cartService.getCart()){
      console.log(this.cartService.getCart()[i])
    
      if(this.cartService.getCart()[i].productId === product.productId){
        console.log("ingreso if ")
        this.cartService.getCart()[i].stock++;
        productExists = true
        break;
      }
    }

    if(!productExists){
      product.stock = 1
      this.cartService.addCart(product)
      
    }
    
    
  }

  ngOnInit(): void {
    
    this.msg.getMsg().subscribe((product: any) => {
      // this.cartItems.push(product)
      this.AddCart(product)
    })


    this.cargarProducto();
    this.seleccionarImagen(0);

  }

  cargarProducto(){

    this.productoService.getProductosFromService().subscribe(
      response =>{
        this.productoList  = response.products

        this.activatedRoute.paramMap.subscribe(
          params => {
            let id = Number(params.get('id'))
            if(id){
              console.log("siguiente")
              this.producto =  this.productoList.find(x => x.productId === id)
            console.log(this.producto)
              
              
            }
          })
      }
    )

    
  }

  


  toCheckout(){
    this.router.navigate(['/paymentDetail']);
  }

  addProductToCart(product: Producto) {

    console.log("add producto" + product)


    
    let productExists = false

    for ( let i in this.cartService.getCart()){
      if(this.cartService.getCart()[i].product_id === product.product_id){
        this.cartService.getCart()[i].product_stock++;
        productExists = true
        break;
      }
    }


    if(!productExists){
      this.cartService.addCart(product)
    }





        

  }

}
