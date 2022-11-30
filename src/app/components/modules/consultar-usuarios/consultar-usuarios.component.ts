import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'app-consultar-usuarios',
  templateUrl: './consultar-usuarios.component.html',
  styleUrls: ['./consultar-usuarios.component.css']
})
export class ConsultarUsuariosComponent implements OnInit {


  usuarioList: any[] = [];

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.consultarUsuarios();
  }


  consultarUsuarios() {
    this.usuarioService.consultarUsuario().subscribe(
      response => {
        this.usuarioList = response.data
      }

    )
  }

  eliminarUsuario(idUsuario: number) {
    this.usuarioService.eliminarUsuario(idUsuario).subscribe(
      response =>{
        console.log("eliminado")
        console.log(response)
      }
    )
  }

}
