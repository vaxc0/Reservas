import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpApi } from 'src/app/constants/http-api';
import { BloqueType } from '../data/interfaces/bloque.interface';
import { ReglaType } from '../data/interfaces/ui/reglaType.interface';

@Injectable({
    providedIn: 'root'
})

export class ReglasService {
    private readonly urlBase = `${environment.baseUrlApi}`

    constructor(
        private http: HttpClient
    ) { }

    getReglas(): Observable<ReglaType[]> {
        return this.http.get<ReglaType[]>(`${this.urlBase}${HttpApi.Reglas}`)
    }
    getRegla(idR: string): Observable<ReglaType> {
        return this.http.get<ReglaType>(`${this.urlBase}${HttpApi.Reglas}${idR}`)
    }
    addRegla(regla: ReglaType): Observable<any> {
        return this.http.post<any>(`${this.urlBase}${HttpApi.Reglas}`, regla)
    }
    updateRegla(regla: ReglaType, idR: string): Observable<any> {
        return this.http.put<any>(`${this.urlBase}${HttpApi.Reglas}${idR}`, regla)
    }
    deleteRegla(idR: string): Observable<any> {
        return this.http.delete<any>(`${this.urlBase}${HttpApi.Reglas}${idR}`)
    }
}