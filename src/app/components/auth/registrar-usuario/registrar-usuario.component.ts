import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import { AuthService } from '../../../services/auth.service';
import Swal from 'sweetalert2';
import { UsuarioLogin } from 'src/app/models/usuarioLogin.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit {

  usuario: Usuario = {
    image : null,
    enabled : true,
    documentId : 1,
    rolId : 2,
    shoopId : 1
  };


  
  userLogin:UsuarioLogin ={}

  constructor(private usuarioService: UsuarioService, private authService: AuthService,private router: Router) { }

  registrarCliente(){
    console.log("ingreso registrar");
    this.usuarioService.registrarUsuario(this.usuario).subscribe(
      response => {
        console.log(response.message);
        Swal.fire('', 'Registrado correctamente','success');
        this.usuario = {

        }

      },
      error => {
        console.log(error);
      },
    );

  }

  login() {

    if(this.userLogin.username == null || this.userLogin.password == null){
      Swal.fire('Ingrese datos', 'El usuario y contraseña son requeridos', 'error');
    }else {
      this.authService.login(this.userLogin).subscribe(
        response => {
          console.log("ingreso login");
          console.log(response);

          
          this.authService.guardarUsuario(response);
          this.authService.guardarToken(response.token);

          console.log("rol : " + response.rol.rolId);
          if ( response.rol.rolId == 2) {
             this.router.navigate(['shoppingCart']);
          }else {
            console.log("ingreso admin")
            this.router.navigate(['']);

          }


        },
      );
    }
  }

  

  ngOnInit(): void {
  }

}
