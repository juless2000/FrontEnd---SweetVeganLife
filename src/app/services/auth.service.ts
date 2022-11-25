import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Usuario } from '../models/usuario.model';
import { UsuarioLogin } from '../models/usuarioLogin.model';


@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private urlEndPoint: string = "http://localhost:8090";
    private _usuario: Usuario;
    private _token: string;

    constructor(private http:HttpClient) {}

    public get usuario(): Usuario{
       
        this._usuario = JSON.parse(localStorage.getItem('usuario')) as Usuario;
     
        return this._usuario;
    }

    public get token(): string{
    if(this._token != null){
        return this._token;
    }else if(this._token == null && localStorage.getItem('token') != null){
        this._token = localStorage.getItem('token');
        return this._token;
    }
    return null;
    }

    login(usuario:UsuarioLogin): Observable<any>{

        const httpHeaders = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic '
        })
        
        const headers = new HttpHeaders({
            "Content-Type": "application/json",
            "Accept": "application/json"
          });

          console.log("usuario"  + usuario.username);
          console.log("password"  + usuario.password);

        return this.http.post(`${this.urlEndPoint}/api/auth/iniciarSesion`, JSON.stringify(usuario), {headers: headers});

    }


    guardarUsuario(user: string): void{
      
        localStorage.setItem('usuario', JSON.stringify(user));

    }
    
    guardarToken(token: string): void{

        this._token = token;
        localStorage.setItem('token', token);
    
    }


    obtenerDatosToken(token: string){
    if(token != null){
        return JSON.parse(atob(token.split(".")[1]))
    }
    return null;
    }


    logout(): void{
        this._token = null;
        this._usuario = null;
        localStorage.clear();
      }

}