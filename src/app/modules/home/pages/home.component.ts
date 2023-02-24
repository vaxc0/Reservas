import { Component } from '@angular/core';
import { AcordeonType } from 'src/app/core/data/interfaces/acordeonType.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  groupsGal: AcordeonType[] = [
    {
      title: 'Administrar Espacios Fisicos',
      content: 'Agregar Espacios\n Manejar Espacios\n '
    },
  ]

  groupsGen: AcordeonType[] = [
    {
      title: 'Ver Espacios Fisicos',
      content: 'Salones Disponibles\n Salas de Estudio Disponibles\n Auditorios Disponibles\n Laboratorios Disponibles'
    },
    {
      title: 'Consultar',
      content: 'Consulta tus reservas vencidas \n Consulta tus reservas Activas \n'
    },
    {
      title: 'Reservar',
      content: 'Reservar el espacio fisico\n Cancelar tus reservas'
    }
  ]

}
