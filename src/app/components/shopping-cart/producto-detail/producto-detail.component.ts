import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/models/producto.model';
import { ProductoService } from '../../../services/producto.service';
import { CartService } from '../../../services/cart.service';


@Component({
  selector: 'app-producto-detail',
  templateUrl: './producto-detail.component.html',
  styleUrls: ['./producto-detail.component.css']
})
export class ProductoDetailComponent implements OnInit {
 
  productoList = []  //test
  public producto: Producto;

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
     private cartService: CartService) { }

  public resolverFoto(foto) {
    const baseUrl = "https://d320djwtwnl5uo.cloudfront.net/recetas/cover_g1r9b4yaeo_meut-episodicas-ep01-segueza-de-fandango-3.jpg";
    return `${baseUrl}`;
  }

  public seleccionarImagen(indice) {
    this.indiceSeleccionado = indice;
    this.fotoSeleccionada = this.producto.images;
  }

  AddCart() {

  

    
  }

  ngOnInit(): void {
    
    this.cargarProducto();
    this.seleccionarImagen(0);

  }

  cargarProducto(){
    this.productoList = this.productoService.getProductos();

    this.activatedRoute.paramMap.subscribe(
      params => {
        let id = Number(params.get('id'))
        if(id){
          this.productoService.getProductoxId();
          this.producto = this.productoList.find( x => x.product_id == id);
        }
      })
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
