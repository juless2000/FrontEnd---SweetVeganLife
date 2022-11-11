import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

//IMPORTAR LOS COMPONENTES DEL PROYECTO
//import { CrudClienteComponent } from './components/crud-cliente/crud-cliente.component';



const routes: Routes = [
    //IMPORTAMOS EL PATH DEL COMPONENTE
    //{path:"crudCliente", component:CrudClienteComponent },


];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
   