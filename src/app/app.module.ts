import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrarUsuarioComponent } from './components/registrar-usuario/registrar-usuario.component';
import { AdministrarInventarioComponent } from './components/administrar-inventario/administrar-inventario.component';
import { ElaborarPedidosComponent } from './components/elaborar-pedidos/elaborar-pedidos.component';
import { RegistrarPedidosComponent } from './components/registrar-pedidos/registrar-pedidos.component';
import { GestionarPerfilComponent } from './components/gestionar-perfil/gestionar-perfil.component';
import { AdministrarUsuariosComponent } from './components/administrar-usuarios/administrar-usuarios.component';
import { GestionarPedidosComponent } from './components/gestionar-pedidos/gestionar-pedidos.component';

//COMPONENTES DEL PROYECTO





@NgModule({
  declarations: [
    AppComponent,
    RegistrarUsuarioComponent,
    AdministrarInventarioComponent,
    ElaborarPedidosComponent,
    RegistrarPedidosComponent,
    GestionarPerfilComponent,
    AdministrarUsuariosComponent,
    GestionarPedidosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
