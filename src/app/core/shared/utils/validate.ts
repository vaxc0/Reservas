import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class Validate {
    constructor() { }

    validarEsEntero(strnum: string) {
        const TieneLetras = /[a-z]/
        return !TieneLetras.test(strnum.trim())
    }
}