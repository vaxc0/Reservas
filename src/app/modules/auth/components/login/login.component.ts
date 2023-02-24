import { Component, OnInit } from '@angular/core';
import { UserLoginType } from 'src/app/core/data/interfaces/formLoginType.inteface';
import { CryptDecrypt } from 'src/app/core/shared/utils/crypt';
import { Validate } from 'src/app/core/shared/utils/validate';

@Component({
  selector: 'loginComponent',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  data: UserLoginType = {
    documento: '',
    password: '',
    docEsNumero: false
  }

  constructor(private cryptdecrypt: CryptDecrypt,
    private validate: Validate
  ) { }

  onSubmit() {
    let PassEncrypted = this.cryptdecrypt.encrypt(this.data.password)
    /* console.log("contra encrptada", PassEncrypted)
    let auxDecypted = this.cryptdecrypt.decrypt(PassEncrypted)
    console.log("contra desencrptada", auxDecypted) */
  }

  validar() {
    this.data.docEsNumero = this.validate.validarEsEntero(this.data.documento)
  }
}
