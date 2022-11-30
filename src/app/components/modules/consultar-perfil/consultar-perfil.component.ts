import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
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

  idUsuario :number

  constructor(private authService: AuthService, private usuarioService:UsuarioService) { }

  ngOnInit(): void {
    this.getUsuarioById();
  }


  editarUsuario(){
    console.log("component perfil")
    console.log(this.usuario)
    this.usuarioService.editarUsuario(this.usuario.userId,this.usuario).subscribe(
     response => {
      console.log("respuesta: " + response )
      Swal.fire('', 'Guardado correctamente', 'success');
     }

    );
  }

  getUsuarioById(){
     this.usuarioService.getUserById(this.authService.usuario.id).subscribe(
      response => {
        this.usuario = response.user
      }
     ) ;
     console.log("id usuario : " +this.authService.usuario.id);
  }

}
