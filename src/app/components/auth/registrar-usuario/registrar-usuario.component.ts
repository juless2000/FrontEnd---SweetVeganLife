import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit {

  usuario: Usuario = {
    image : null,
    enabled : true,
    documentId : 1
  };

  constructor(private usuarioService: UsuarioService) { }

  registrarCliente(){
    console.log("ingreso registrar");
    this.usuarioService.registrarUsuario(this.usuario).subscribe(
      response => {
        console.log(response.message);
        alert(response.message);
      },
      error => {
        console.log(error);
      },
    );

  }

  ngOnInit(): void {
  }

}
