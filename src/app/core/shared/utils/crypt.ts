import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
    providedIn: 'root'
})

export class CryptDecrypt {
    secretKey = "V4xD3v";

    constructor() { }

    public encrypt(value: string): string {
        return CryptoJS.AES.encrypt(value.trim(), this.secretKey.trim()).toString();
    }

    public decrypt(textToDecrypt: string) {
        return CryptoJS.AES.decrypt(textToDecrypt.trim(), this.secretKey.trim()).toString(CryptoJS.enc.Utf8);
    }
}