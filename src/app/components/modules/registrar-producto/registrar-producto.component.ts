import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto.model';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs';
import { ProductoService } from '../../../services/producto.service';

@Component({
  selector: 'app-registrar-producto',
  templateUrl: './registrar-producto.component.html',
  styleUrls: ['./registrar-producto.component.css']
})
export class RegistrarProductoComponent implements OnInit {

  imgSrc : string = 'https://www.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg'
  selectedImage: any = null;
  nameImgUploaded: string;

  producto: any = {
    supplierId : 1,
    enabled : true,
    // product_id: 1,
    // product_name: "Cake Pink ",
    // product_description: 'Cake Pink',
    // product_price: 25.00,
    // product_stock: 5,
    // product_state:true

    
  };

  constructor(private storage: AngularFireStorage, private productService: ProductoService) { }

  ngOnInit(): void {
  }

  showPreview(event: any){
    console.log("ingreso show preview")
    if(event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e:any) => this.imgSrc = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
      console.log("imagen")
      console.log(this.selectedImage)
    }
    else {
      this.imgSrc = 'https://www.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg';
      this.selectedImage = null;
    }
  }

  onSubmit() {

    console.log("onSUBMIT : " + this.selectedImage.name)
    var filePath = `/postres/${this.selectedImage.name}_${new Date().getTime()}`;
    const fileRef = this.storage.ref(filePath);
    this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
      finalize(()=>{
        fileRef.getDownloadURL().subscribe((url)=>{
          console.log("image uploaded: " + url)
          this.producto.urlImage = url;
          this.productService.saveProductService(this.producto).subscribe(
            response => {
              console.log("registro");
            }
        )
        })
      })
    ).subscribe();


  

 



      }
}
