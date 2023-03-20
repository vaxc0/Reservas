
export interface ReservaType {
    id?: number
    id_usuario: number
    id_operario: number
    id_espacioFisico: number
    activa: number
    vencida: number
    fechaHora_realizada: Date
    fecha_reservar: Date
    hora_reservar:Date
    hora_finalReservar:Date
}