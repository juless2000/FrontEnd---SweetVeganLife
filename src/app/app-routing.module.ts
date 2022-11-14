import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


//IMPORTAR LOS COMPONENTES DEL PROYECTO
//import { CrudClienteComponent } from './components/crud-cliente/crud-cliente.component';
import { ConsultaProductoComponent } from './components/consulta-producto/consulta-producto.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { RegistrarUsuarioComponent } from './components/auth/registrar-usuario/registrar-usuario.component';
import { DefaultComponent } from './components/default/default.component';
import { DashboardComponent } from './components/modules/dashboard/dashboard.component';

const routes: Routes = [
    //IMPORTAMOS EL PATH DEL COMPONENTE
    //{path:"crudCliente", component:CrudClienteComponent },
    {path:"consultaProducto", component:ConsultaProductoComponent},
    {path:"shoppingCart", component:ShoppingCartComponent},
    {path:"registrarUsuario", component:RegistrarUsuarioComponent},
    {path:'', component: DefaultComponent,
    children: [{
    path: '',
    component: DashboardComponent
}]}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
   