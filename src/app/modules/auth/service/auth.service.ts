import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpApi } from 'src/app/constants/http-api';
import { UsuariosService } from 'src/app/core/services/usuarios.service';
import { Usuario } from 'src/app/core/data/models/usuario.model';

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    public currentUser!: Observable<Usuario>;
    private readonly urlBase = `${environment.baseUrlApi}`

    constructor(
        private http: HttpClient,
        private usuarioSevice :UsuariosService
    ) { }

    loggIn(doc:string,pass:string) {
        this.currentUser = this.usuarioSevice.getUser(doc)
        this.currentUser.subscribe((Usuario)=>{
            console.log(Usuario)
        })
        // console.log({"contraIn":pass,"contraDb":this.currentUser.})
    }
}