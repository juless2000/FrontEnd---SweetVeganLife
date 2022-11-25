import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';
import { UsuarioService } from '../../../../services/usuario.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  usuario : Usuario = {

  }

  constructor(private authService: AuthService) {
    this.getUser();

  }

  ngOnInit(): void {
   
   
  }

  getUser(){
    console.log(this.authService.usuario)
    this.usuario = this.authService.usuario
  }

} 
