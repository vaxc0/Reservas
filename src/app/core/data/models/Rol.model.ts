import { RolType } from '../interfaces/rolType.interface';

export class Rol implements RolType {
    constructor(
        public id: number,
        public rol: string,
    ) { }


    getId():number{
        return this.id
    }

    getRol():string{
        return this.rol
    }
    setRol(rol:string):void{
        this.rol=rol
    }
}