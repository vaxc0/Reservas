import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/core/data/models/usuario.model';
import { UsuariosService } from 'src/app/core/services/usuarios.service';
import { AuthService } from 'src/app/modules/auth/service/auth.service';
import { RolesService } from 'src/app/core/services/roles.service';
import { Rol } from 'src/app/core/data/models/rol.model';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  dataUsuario!: Usuario
  roles: Rol[] = []

  constructor(private usuariosService: UsuariosService,
    private RolesService: RolesService,
    private authSevice: AuthService
  ) { }
  ngOnInit() {
    this.dataUsuario = this.authSevice.getCurrentUser()
    this.RolesService.getRoles().subscribe((data) => {
      this.roles = data
    })
  }

  llamada() {
    console.log(this.authSevice.isAdmin())
  }
  updateData() {

  }
}
