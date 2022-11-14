import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrarUsuarioComponent } from './components/auth/registrar-usuario/registrar-usuario.component';
import { AdministrarInventarioComponent } from './components/administrar-inventario/administrar-inventario.component';
import { ElaborarPedidosComponent } from './components/elaborar-pedidos/elaborar-pedidos.component';
import { RegistrarPedidosComponent } from './components/registrar-pedidos/registrar-pedidos.component';
import { GestionarPerfilComponent } from './components/gestionar-perfil/gestionar-perfil.component';
import { AdministrarUsuariosComponent } from './components/administrar-usuarios/administrar-usuarios.component';
import { GestionarPedidosComponent } from './components/gestionar-pedidos/gestionar-pedidos.component';
import { ConsultaProductoComponent } from './components/consulta-producto/consulta-producto.component';
import { FiltrarProductoComponent } from './components/filtrar-producto/filtrar-producto.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CartComponent } from './components/shopping-cart/cart/cart.component';
import { FilterComponent } from './components/shopping-cart/filter/filter.component';
import { ProductListComponent } from './components/shopping-cart/product-list/product-list.component';
import { CartItemComponent } from './components/shopping-cart/cart/cart-item/cart-item.component';
import { ProductItemComponent } from './components/shopping-cart/product-list/product-item/product-item.component';
import { AuthComponent } from './components/auth/auth.component';
import { MatButtonModule } from '@angular/material/button';
import { SharedComponent } from './components/shared/shared.component';
import { DefaultModule } from './components/default/default.module';
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
    GestionarPedidosComponent,
    ConsultaProductoComponent,
    FiltrarProductoComponent,
    ShoppingCartComponent,
    CartComponent,
    FilterComponent,
    ProductListComponent,
    CartItemComponent,
    ProductItemComponent,
    AuthComponent,
    SharedComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatButtonModule,
    DefaultModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
