import { Rol } from './../interfaces/rol.interface';

export class RolType implements Rol {
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