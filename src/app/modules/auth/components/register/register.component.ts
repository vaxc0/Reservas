import { Component, Injectable, OnInit } from '@angular/core';
import { UserRegisterType } from 'src/app/core/data/interfaces/ui/formRegisterType.interface';
import { CryptDecrypt } from 'src/app/core/shared/utils/crypt';
import { Validate } from 'src/app/core/shared/utils/validate';
import { RolType } from 'src/app/core/data/interfaces/rolType.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { RolesService } from 'src/app/core/services/roles.service';
import { UsuarioType } from './../../../../core/data/interfaces/usuarioType.Interface';
import { UsuariosService } from 'src/app/core/services/usuarios.service';
import { Rol } from 'src/app/core/data/models/rol.model';

@Component({
  selector: 'registerComponent',
  templateUrl: './register.component.html',
  styleUrls: ['../login/login.component.css']
})
@Injectable({//si se necesita recibir informacion debe ser injectable la clase del componente
  providedIn: 'root'
})
export class RegisterComponent implements OnInit {
  dataPortal: any = {}
  roles: Rol[] = []
  dataForm: UserRegisterType = {
    documento: '',
    password: '',
    rePassword: '',
    rol: { id: 0, rol: '' },
    docEsNumero: false,
    contraIgual: false,
    camposVacios: true,
    enviar: false
  }

  constructor(private cryptdecrypt: CryptDecrypt,
    private validate: Validate,
    private route: ActivatedRoute,
    private rolesService: RolesService,
    private usuarioService: UsuariosService,
    private router: Router
  ) { }
  ngOnInit() {
    this.rolesService.getRoles().subscribe((data) => this.roles = data)
  }

  onSubmit() {
    let PassEncrypted = this.cryptdecrypt.encrypt(this.dataForm.password)
    let user: UsuarioType = {
      id_rol: this.dataForm.rol.id,
      documento: Number(this.dataForm.documento),
      password: PassEncrypted
    }
    this.usuarioService.addUser(user).subscribe((res) => {
      this.router.navigate(['/home/galileo/sign-in'])
    })
  }
  onSelect(event: any) {
    this.dataForm.rol = this.roles[event.target.value - 1];
  }
  bindData(data: {}) {
    this.dataPortal = data
  }
  validar() {
    this.dataForm.docEsNumero = this.validate.validarEsEntero(this.dataForm.documento)
    this.dataForm.contraIgual = this.validate.validarIgualContraseña(this.dataForm.password, this.dataForm.rePassword)
    if (this.dataForm.documento != '' && this.dataForm.password != '' && this.dataForm.rePassword != '') this.dataForm.camposVacios = false
    this.dataForm.enviar = this.dataForm.docEsNumero && this.dataForm.contraIgual && !this.dataForm.camposVacios
  }
}
