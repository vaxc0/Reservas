import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/core/data/models/usuario.model';
import { UsuariosService } from 'src/app/core/services/usuarios.service';
import { AuthService } from 'src/app/modules/auth/service/auth.service';
import { RolesService } from 'src/app/core/services/roles.service';
import { Rol } from 'src/app/core/data/models/rol.model';
import { ToastService } from 'src/app/core/services/toast.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  dataUsuario!: Usuario
  roles: Rol[] = []
  rolUser!: string

  constructor(private usuariosService: UsuariosService,
    private RolesService: RolesService,
    private authSevice: AuthService,
    private toastService: ToastService
  ) { }
  ngOnInit() {
    this.dataUsuario = this.authSevice.getCurrentUser()
    this.RolesService.getRoles().subscribe((data) => {
      this.roles = data
      this.BuscarRol()
    })
  }

  BuscarRol() {
    this.roles.map((rol) => {
      if (rol.id == this.dataUsuario.id_rol) this.rolUser = rol.rol
    })
  }
  updateData() {
    this.usuariosService.updateUser(this.dataUsuario, String(this.dataUsuario.documento))
      .subscribe((res) => {
        this.authSevice.setCurrentUser(this.dataUsuario)
        this.toastService.show('Mensaje', 'Datos Guardados Correctamente')
      })
  }
}
