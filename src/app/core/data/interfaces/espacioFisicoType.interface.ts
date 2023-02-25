import { Time } from "@angular/common"

export interface EspacioFisicoType {
    id:number
    id_facultad:number
    id_bloque:number
    id_tipo:number
    nombre: string
    aforo: string
    horas_uso:Time
    horas_nueva_reserva:Time
    tiempo_espera:Time
    reservable:boolean
    reservado:boolean
}