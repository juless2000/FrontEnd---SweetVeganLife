import { Producto } from "./producto.model";

export class Pedido {

    idPedido?: String;
    email?: String;
    nombre?: String;
    apellido?: String;
    cantidad?: String;
    ciudad?: String;
    region?: String;
    telefono?: String;
    direccion?:String;
    Producto?: Producto[];
    Total?: number;

}

