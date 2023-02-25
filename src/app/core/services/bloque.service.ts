import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpApi } from 'src/app/constants/http-api';
import { BloqueType } from '../data/interfaces/bloque.interface';

@Injectable({
    providedIn: 'root'
})

export class BloquesService {
    private readonly urlBase = `${environment.baseUrlApi}`

    constructor(
        private http: HttpClient
    ) { }

    getBloques(): Observable<BloqueType[]> {
        return this.http.get<BloqueType[]>(`${this.urlBase}${HttpApi.Bloques}`)
    }
    getBloque(idB: string): Observable<BloqueType> {
        return this.http.get<BloqueType>(`${this.urlBase}${HttpApi.Bloques}${idB}`)
    }
    addBloque(bloque: BloqueType): Observable<any> {
        return this.http.post<any>(`${this.urlBase}${HttpApi.Bloques}`, bloque)
    }
    updateBloque(bloque: BloqueType, idB: string): Observable<any> {
        return this.http.put<any>(`${this.urlBase}${HttpApi.Bloques}${idB}`, bloque)
    }
    deleteBloque(idB: string): Observable<any> {
        return this.http.delete<any>(`${this.urlBase}${HttpApi.Bloques}${idB}`)
    }
}