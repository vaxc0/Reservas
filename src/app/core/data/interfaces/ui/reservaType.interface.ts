
export interface ReservaType {
    id?: number
    id_usuario: number
    id_operario: number
    id_espacioFisico: number
    activa: number
    vencida: number
    fecha_realizada: string
    hora_realizada:string
    fecha_reservar: string
    hora_reservar:string
    hora_finalReservar:string
}