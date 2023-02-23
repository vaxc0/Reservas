import { Component } from '@angular/core';
import { UserRegister } from 'src/app/core/data/interfaces/formRegister.interface';
import { CryptDecrypt } from 'src/app/core/shared/utils/crypt';
import { Validate } from 'src/app/core/shared/utils/validate';
import { Rol } from 'src/app/core/data/interfaces/rol.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../login/login.component.css']
})
export class RegisterComponent {
  RolSelected!: Rol;

  roles: Rol[] = [
    {
      id: 0,
      rol: "admin"
    }, {
      id: 1,
      rol: "operario"
    }
  ]

  data: UserRegister = {
    documento: '',
    password: '',
    rePassword: '',
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
  onSelect(event: any) {
    this.RolSelected = this.roles[event.target.value];
    console.log(this.RolSelected)
  }

  validar() {
    this.data.docEsNumero = this.validate.validarEsEntero(this.data.documento)
  }
}
