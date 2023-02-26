import { EspacioFisicoType } from "../interfaces/espacioFisicoType.interface";

export class EspacioFisico implements EspacioFisicoType {
    constructor(
        public facultad: string,
        public bloque: string,
        public tipo: string,
        public nombre: string,
        public aforo: number,
        public reservable: boolean,
        public reservado: boolean,
        public horas_uso?: string,
        public horas_nueva_reserva?: string,
        public tiempo_espera?: string,
    ) { }

}