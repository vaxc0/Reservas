import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ReservaType } from '../../data/interfaces/ui/reservaType.interface';

@Injectable({
    providedIn: 'root'
})

export class Utils {
    fechaActual = new Date()

    constructor() { }

    SearchByPosicion(id: number, Lista: any) {
        return Lista[id]
    }
    getCurrentDate() {
        return this.fechaActual
    }
    fechaEstaVencida(fechaReserva: Date) {
        return (this.fechaActual.getDate < fechaReserva.getDate)
    }
    horaEstaVencida(horaReserva: Date) {
        return (this.fechaActual.getTime < horaReserva.getTime)
    }
    verificarVencida(reservasTotales: ReservaType[]) {
        let reservasMod: ReservaType[] = []
        reservasTotales.map((reserva) => {
            let fechaAux = new Date(reserva.fecha_reservar)
            if (this.fechaActual.getDay() > fechaAux.getDay()
                && this.fechaActual.getTime() > fechaAux.getTime() && reserva.vencida != 1) {
                reserva.activa = 0
                reserva.vencida = 1
                reservasMod.push(reserva)
            }
        })
        return reservasMod
    }
    comporbarAforo(reservasTotales: ReservaType[], aforoEspFis: number) {
        return reservasTotales.length < aforoEspFis
    }
}