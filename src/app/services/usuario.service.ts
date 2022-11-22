
import { HttpClient, HttpHeaders} from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario.model';

const baseURL_cliente = 'http://localhost:8090/api/user/register';

@Injectable({
    providedIn: 'root'
  })
export class UsuarioService {
  
    constructor(private http:HttpClient) { }

    registrarUsuario(data:Usuario): Observable<any>{


        console.log("password : " + data.password)
        console.log("password : " + data.firstName)


        return this.http.post(baseURL_cliente, data);
    }
      

}