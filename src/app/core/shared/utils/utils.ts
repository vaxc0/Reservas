import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';

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
        return this.fechaActual.toLocaleDateString()
    }
    getCurrentTime() {
        return this.fechaActual.toLocaleTimeString()
    }
    getFormatDate(date: string): any {
        let newdate = new Date(date);
        let customFormat = 'MM/dd/yyyy';
        let formattedDate = new DatePipe('en-US').transform(newdate, customFormat);
        return formattedDate
    }
    getFormatTime(hora:any) {
        let datePipe = new DatePipe('es-Mx');
        let horaFormat = datePipe.transform(hora, 'hh:mm a');
        return horaFormat
    }
    fechaEstaVencida(fechaActual: string, fechaReserva: string) {
        let ret = true
        if (Date.parse(fechaActual) < Date.parse(fechaReserva)) return ret
        else return !ret
    }
    horaEstaVencida(horaActual:string,horaReserva:string){
        let [hrActual,MinActual] = horaActual.split(':')
        let [hrReserva,MinReserva] = horaReserva.split(':')
        let ret = true
        if(Number(hrActual)<Number(hrReserva)&&Number(MinActual)<Number(MinReserva))return ret
        else return !ret
    }

}