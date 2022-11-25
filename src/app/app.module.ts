import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { HeaderClienteComponent } from './components/shopping-cart/header-cliente/header-cliente.component';
import { ProductoDetailComponent } from './components/shopping-cart/producto-detail/producto-detail.component';
import { MatCardModule} from "@angular/material/card";
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { SharedModule } from './components/shared/shared.module';
import { ContenidoComponent } from './components/shopping-cart/contenido/contenido.component';
import { PaymentDetailComponent } from './components/shopping-cart/payment-detail/payment-detail.component';
import { ConsultarProductoComponent } from './components/modules/consultar-producto/consultar-producto.component';
import { RegistrarProductoComponent } from './components/modules/registrar-producto/registrar-producto.component';
import { ConsultarPedidosComponent } from './components/modules/consultar-pedidos/consultar-pedidos.component';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { ConsultarUsuariosComponent } from './components/modules/consultar-usuarios/consultar-usuarios.component';
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
    HeaderClienteComponent,
    ProductoDetailComponent,
    ContenidoComponent,
    PaymentDetailComponent,
    ConsultarProductoComponent,
    RegistrarProductoComponent,
    ConsultarPedidosComponent,
    ConsultarUsuariosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatButtonModule,
    DefaultModule,
    MatCardModule,
    MatGridListModule,
    MatSidenavModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatToolbarModule,
    MatMenuModule,
    SharedModule,
 
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi:true},
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
