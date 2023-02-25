import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpApi } from 'src/app/constants/http-api';
import { EspacioFisicoType } from '../data/interfaces/espacioFisicoType.interface';

@Injectable({
    providedIn: 'root'
})

export class EspaciosFisicosService {
    private readonly urlBase = `${environment.baseUrlApi}`

    constructor(
        private http: HttpClient
    ) { }

    getEspaciosFisicos(): Observable<EspacioFisicoType[]> {
        return this.http.get<EspacioFisicoType[]>(`${this.urlBase}${HttpApi.Esp_fisicos}`)
    }
    getEspacioFisico(idEf: string): Observable<EspacioFisicoType> {
        return this.http.get<EspacioFisicoType>(`${this.urlBase}${HttpApi.Esp_fisicos}${idEf}`)
    }
    addEspacioFisico(espF: EspacioFisicoType): Observable<any> {
        return this.http.post<any>(`${this.urlBase}${HttpApi.Esp_fisicos}`, espF)
    }
    updateEspacioFisico(espF: EspacioFisicoType, idEf: string): Observable<any> {
        return this.http.put<any>(`${this.urlBase}${HttpApi.Esp_fisicos}${idEf}`, espF)
    }
    deleteEspacioFisico(idEf: string): Observable<any> {
        return this.http.delete<any>(`${this.urlBase}${HttpApi.Esp_fisicos}${idEf}`)
    }
}