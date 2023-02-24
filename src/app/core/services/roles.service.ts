import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpApi } from 'src/app/constants/http-api';
import { Rol } from '../data/models/rol.model';

@Injectable({
    providedIn: 'root'
})

export class RolesService {
    private readonly urlBase = `${environment.baseUrlApi}`

    constructor(
        private http: HttpClient
    ) { }

    getRoles(): Observable<Rol[]> {
        return this.http.get<Rol[]>(`${this.urlBase}${HttpApi.Roles}`)
    }
}