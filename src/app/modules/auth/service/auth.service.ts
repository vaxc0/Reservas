import { Injectable, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/core/services/usuarios.service';
import { Usuario } from 'src/app/core/data/models/usuario.model';
import { Rol } from 'src/app/core/data/models/rol.model';
import { CryptDecrypt } from 'src/app/core/shared/utils/crypt';
import { Router } from '@angular/router';
import { RolesService } from 'src/app/core/services/roles.service';
import { ROLES } from 'src/app/constants/roles-guard';

@Injectable({
    providedIn: 'root'
})

export class AuthService implements OnInit {
    auxCurrent!: Usuario
    ROLES: Rol[] = []

    constructor(
        private rolesService: RolesService,
        private usuarioSevice: UsuariosService,
        private cryptdecrypt: CryptDecrypt,
        private router: Router,
    ) { }
    ngOnInit() {
        this.rolesService.getRoles().subscribe((data) => {
            this.ROLES = data
        })
    }

    loggIn(doc: string, pass: string) {
        this.usuarioSevice.getUser(doc).
            subscribe((userDB) => {
                let passDecrypted = this.cryptdecrypt.decrypt(pass)
                let passDBDecrypted = this.cryptdecrypt.decrypt(userDB.password)
                if (passDBDecrypted == passDecrypted) {
                    this.setCurrentUser(userDB)
                    if (userDB.id_rol == 3) this.router.navigate(['/genesis/dashboard'])
                    else this.router.navigate(['/galileo/dashboard'])
                }
            })
    }
    public isLoggedIn(): boolean {
        let estaLoggeado = false
        try {
            const user = sessionStorage.getItem('currentUser')
            if (user != null) estaLoggeado = true
        } catch (error) {}
        return estaLoggeado
    }
    public loggOut() {
        sessionStorage.removeItem('currentUser')
        this.router.navigate(['/home'])
    }
    public setCurrentUser(user: Usuario) {
        sessionStorage.setItem('currentUser', JSON.stringify(user))
    }
    public getCurrentUser() {
        let current = sessionStorage.getItem('currentUser')
        if (current != null) this.auxCurrent = JSON.parse(current)
        return this.auxCurrent
    }
    // public isAdmin(): boolean {
    //     return this.hasRol(1)
    // }
    // public isOpeario(): boolean {
    //     return this.hasRol(2)
    // }
    // public isEstudiante(): boolean {
    //     return this.hasRol(3)
    // }
    public hasRol(roles: ROLES[]): boolean {
        let tieneRol = false
        try {
            const rolUser = this.getCurrentUser().id_rol
            if(rolUser!=undefined && roles.includes(rolUser) ) tieneRol = true
        } catch (error) {}
        return tieneRol
    }
}