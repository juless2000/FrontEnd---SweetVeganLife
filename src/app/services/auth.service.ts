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
        if(this._usuario != null){
        return this._usuario;
        }else if(this._usuario == null && localStorage.getItem('usuario') != null){
        this._usuario = JSON.parse(localStorage.getItem('usuario')) as Usuario;
        return this._usuario;
        }
        return new Usuario();
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

        return this.http.post(`${this.urlEndPoint}/generate-token`, JSON.stringify(usuario), {headers: headers});

    }


    guardarUsuario(token: string): void{
        let payload = this.obtenerDatosToken(token);
        console.log("my payload ");
        console.log(JSON.stringify(payload));
        
        this._usuario = new Usuario();
        this._usuario.firstName = payload.firstName;
        this._usuario.lastName = payload.lastName;
        this._usuario.docNumber = payload.docNumber;
  
        localStorage.setItem('usuario', JSON.stringify(this._usuario));
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


}