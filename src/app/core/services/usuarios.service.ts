import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpApi } from 'src/app/constants/http-api';
import { Usuario } from '../data/models/usuario.model';

@Injectable({
    providedIn: 'root'
})

export class UsuariosService {
    private readonly urlBase = `${environment.baseUrlApi}`

    constructor(
        private http: HttpClient
    ) { }

    getUsers(): Observable<any> {
        return this.http.get<any>(`${this.urlBase}${HttpApi.Usuarios}`)
    }
    getUser(idU:string): Observable<Usuario> {
        return this.http.get<Usuario>(`${this.urlBase}${HttpApi.Usuarios}${idU}`)
    }
    addUser(user: Usuario): Observable<any> {
        return this.http.post<any>(`${this.urlBase}${HttpApi.Usuarios}`, user)
    }
    updateUser(user:Usuario,idU:string): Observable<any> {
        return this.http.put<any>(`${this.urlBase}${HttpApi.Usuarios}${idU}`, user)
    }
    deleteUser(idU:string):Observable<any> {
        return this.http.delete<any>(`${this.urlBase}${HttpApi.Usuarios}${idU}`)
    }
}