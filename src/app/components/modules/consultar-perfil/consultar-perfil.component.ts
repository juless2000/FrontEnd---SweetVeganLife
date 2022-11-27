import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'app-consultar-perfil',
  templateUrl: './consultar-perfil.component.html',
  styleUrls: ['./consultar-perfil.component.css']
})
export class ConsultarPerfilComponent implements OnInit {

  usuario : any = {

  }

  constructor(private authService: AuthService, private usuarioService:UsuarioService) { }

  ngOnInit(): void {
    this.cargarUsuario();
  }

  cargarUsuario() {
    console.log(this.authService.usuario)
    this.usuario = this.authService.usuario
    
  }

  editarUsuario(){
    console.log("component perfil")
    console.log(this.usuario)
    this.usuarioService.editarUsuario(1,this.usuario).subscribe(
     response => {
      console.log("respuesta: " + response )
     }

    );
  }

  

}
