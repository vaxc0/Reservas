import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpApi } from 'src/app/constants/http-api';
import { FacultadType } from '../data/interfaces/facultad.inteface';

@Injectable({
    providedIn: 'root'
})

export class FacultadesService {
    private readonly urlBase = `${environment.baseUrlApi}`

    constructor(
        private http: HttpClient
    ) { }

    getFacultades(): Observable<FacultadType[]> {
        return this.http.get<FacultadType[]>(`${this.urlBase}${HttpApi.Facultades}`)
    }
    getFacultad(idF: string): Observable<FacultadType> {
        return this.http.get<FacultadType>(`${this.urlBase}${HttpApi.Facultades}${idF}`)
    }
    addFacultad(facultad: FacultadType): Observable<any> {
        return this.http.post<any>(`${this.urlBase}${HttpApi.Facultades}`, facultad)
    }
    updateFacultad(facultad: FacultadType, idF: string): Observable<any> {
        return this.http.put<any>(`${this.urlBase}${HttpApi.Facultades}${idF}`, facultad)
    }
    deleteFacultad(idF: string): Observable<any> {
        return this.http.delete<any>(`${this.urlBase}${HttpApi.Facultades}${idF}`)
    }
}