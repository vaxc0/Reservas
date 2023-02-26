export interface ReservaType {
    id: number
    id_usuario: number
    id_espacioFisico: number
    activa: boolean
    vencida: boolean
    fecha_realizada: string
    fecha_vencimiento: string
}