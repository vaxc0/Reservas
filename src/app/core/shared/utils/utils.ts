import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class Utils {
    constructor() { }

    SearchByPosicion(id:number,Lista:any){
        return Lista[id]
    }

}