
export class Producto {

    product_id?:number;
    product_name?:String;
    product_description?:String;
    product_price?:number;
    product_stock?:number;
    product_state?:boolean;
    images?:String;

    constructor(product_id, product_name, product_description, product_price,product_stock,product_state,images){
        this.product_id = product_id;
        this.product_name = product_name;
        this.product_description = product_description;
        this.product_price = product_price;
        this.product_stock = product_stock;
        this.product_state = product_state;
        this.images = images
        
    }

 


}
