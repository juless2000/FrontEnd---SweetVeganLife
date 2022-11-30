import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-registrar-cliente',
  templateUrl: './registrar-cliente.component.html',
  styleUrls: ['./registrar-cliente.component.css']
})
export class RegistrarClienteComponent implements OnInit {

  usuario: Usuario = {
    image : null,
    enabled : true,
    documentId : 1,
    shoopId : 1
  };

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }
  
  registrarCliente(){
    console.log("ingreso registrar");
    this.usuarioService.registrarUsuario(this.usuario).subscribe(
      response => {
        console.log(response.message);
        // Swal.fire('', 'Registrado correctamente','success');
        this.usuario = {

        }

      },
      error => {
        console.log(error);
      },
    );

  }

}
