import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloadAllModules,RouterModule, Routes } from '@angular/router';


//IMPORTAR LOS COMPONENTES DEL PROYECTO
//import { CrudClienteComponent } from './components/crud-cliente/crud-cliente.component';
import { ConsultaProductoComponent } from './components/consulta-producto/consulta-producto.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { RegistrarUsuarioComponent } from './components/auth/registrar-usuario/registrar-usuario.component';
import { DefaultComponent } from './components/default/default.component';
import { DashboardComponent } from './components/modules/dashboard/dashboard.component';
import { ProductoDetailComponent } from './components/shopping-cart/producto-detail/producto-detail.component';
import { PaymentDetailComponent } from './components/shopping-cart/payment-detail/payment-detail.component';
import { ConsultarProductoComponent } from './components/modules/consultar-producto/consultar-producto.component';
import { RegistrarProductoComponent } from './components/modules/registrar-producto/registrar-producto.component';
import { ConsultarPedidosComponent } from './components/modules/consultar-pedidos/consultar-pedidos.component';
import { ProductListComponent } from './components/shopping-cart/product-list/product-list.component';
import { ConsultarUsuariosComponent } from './components/modules/consultar-usuarios/consultar-usuarios.component';

const routes: Routes = [
    //IMPORTAMOS EL PATH DEL COMPONENTE
    //{path:"crudCliente", component:CrudClienteComponent },
    {path:"consultaProducto", component:ConsultaProductoComponent},
    {path:"shoppingCart", component:ShoppingCartComponent}, 
    {path:"shoppingCart/:id", component:ShoppingCartComponent},  
    {path:"registrarUsuario", component:RegistrarUsuarioComponent}, 
    {path:"productoDetalle/:id",component:ProductoDetailComponent}, 
    {path:"catalogoProducto",component:ProductListComponent},
    {path:"paymentDetail", component:PaymentDetailComponent}, 
    {path:'', component: DefaultComponent,
    children: [
    {path: '',component: DashboardComponent},
    {path: 'consultarProducto',component : ConsultarProductoComponent},
    {path: 'agregarProducto',component : RegistrarProductoComponent},
    {path: 'consultarPedido',component : ConsultarPedidosComponent},
    {path: 'consultarUsuarios',component : ConsultarUsuariosComponent}

    ]}

];

@NgModule({
    imports: [RouterModule.forRoot(routes,{ preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule]
})

export class AppRoutingModule { }
   