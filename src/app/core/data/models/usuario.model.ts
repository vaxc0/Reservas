import { UsuarioType } from "../interfaces/usuarioType.Interface";

export class Usuario implements UsuarioType {
    constructor(
        public documento: number,
        public password: string,
        public id_rol?: number,
        public nombre?: string,
        public apellido?: string,
        public edad?: number,
        public carrera?: string,
    ) { }

}