import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpApi } from 'src/app/constants/http-api';
import { ReservaType } from './../data/interfaces/reservaType.interface';

@Injectable({
    providedIn: 'root'
})

export class ReservasService {
    private readonly urlBase = `${environment.baseUrlApi}`

    constructor(
        private http: HttpClient
    ) { }

    getReservas(idU: number): Observable<ReservaType[]> {
        return this.http.get<ReservaType[]>(`${this.urlBase}${HttpApi.Reservas}`,
            {
                params: {
                    "filterByUser":true,
                    "keyFilter":idU
                }
            })
    }
    getReserva(idR: string): Observable<ReservaType> {
        return this.http.get<ReservaType>(`${this.urlBase}${HttpApi.Reservas}${idR}`)
    }
    addReserva(reserva: ReservaType): Observable<any> {
        return this.http.post<any>(`${this.urlBase}${HttpApi.Reservas}`, reserva)
    }
    updateReserva(reserva: ReservaType, idR: string): Observable<any> {
        return this.http.put<any>(`${this.urlBase}${HttpApi.Reservas}${idR}`, reserva)
    }
    deleteReserva(idR: string): Observable<any> {
        return this.http.delete<any>(`${this.urlBase}${HttpApi.Reservas}${idR}`)
    }
}