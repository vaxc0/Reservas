import { Component, OnInit } from '@angular/core';
import { UserLoginType } from 'src/app/core/data/interfaces/ui/formLoginType.inteface';
import { UsuarioType } from 'src/app/core/data/interfaces/usuarioType.Interface';
import { CryptDecrypt } from 'src/app/core/shared/utils/crypt';
import { Validate } from 'src/app/core/shared/utils/validate';
import { AuthService } from '../../service/auth.service';

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
    private validate: Validate,
    private authService: AuthService
  ) { }

  onSubmit() {
    let PassEncrypted = this.cryptdecrypt.encrypt(this.data.password)
    let user: UsuarioType = {
      documento: Number(this.data.documento),
      password: PassEncrypted
    }
    this.authService.loggIn(String(user.documento), user.password)
  }
  validar() {
    this.data.docEsNumero = this.validate.validarEsEntero(this.data.documento)
  }
}
