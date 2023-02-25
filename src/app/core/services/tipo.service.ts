import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpApi } from 'src/app/constants/http-api';
import { TipoType } from '../data/interfaces/tipoType.interface';


@Injectable({
    providedIn: 'root'
})

export class TiposService {
    private readonly urlBase = `${environment.baseUrlApi}`

    constructor(
        private http: HttpClient
    ) { }

    getTipos(): Observable<TipoType[]> {
        return this.http.get<TipoType[]>(`${this.urlBase}${HttpApi.Tipos}`)
    }
    getTipo(idT: string): Observable<TipoType> {
        return this.http.get<TipoType>(`${this.urlBase}${HttpApi.Tipos}${idT}`)
    }
    addTipo(tipo: TipoType): Observable<any> {
        return this.http.post<any>(`${this.urlBase}${HttpApi.Tipos}`, tipo)
    }
    updateTipo(tipo: TipoType, idT: string): Observable<any> {
        return this.http.put<any>(`${this.urlBase}${HttpApi.Tipos}${idT}`, tipo)
    }
    deleteTipo(idT: string): Observable<any> {
        return this.http.delete<any>(`${this.urlBase}${HttpApi.Tipos}${idT}`)
    }
}