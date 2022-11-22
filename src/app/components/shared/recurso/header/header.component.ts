import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSideBarForMe : EventEmitter<any> = new EventEmitter()

  constructor(private authService: AuthService,private router: Router) { }

  ngOnInit(): void {
  }

  toggleSideBar(){
    this.toggleSideBarForMe.emit();
  }

  logout(): void{
    console.log("ingreso")
    //const username = this.authService.usuario.username;
    this.authService.logout();
    //swal.fire('Logout', `Hola ${username} has cerrado sesión con éxito`, 'success');
    this.router.navigate(['registrarUsuario']);
    
  }

}
