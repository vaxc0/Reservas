
export interface EspacioFisicoType {
    facultad:string
    bloque:string
    tipo:string
    nombre: string
    aforo: number
    horas_uso?:string
    horas_nueva_reserva?:string
    tiempo_espera?:string
    reservable:boolean
    reservado:boolean
}