import { AcordeonType } from "../core/data/interfaces/ui/acordeonType.interface"
import { OpcionesType } from "../core/data/interfaces/ui/opcionesType.interface"


export class Constants {
    static meridianos: any = [
        { meridiano: 'Am' },
        { meridiano: 'Pm' }
    ]
    //opciones Administador-Operario
    static urlbaseOA = '/galileo/dashboard/'
    static opcionesAdministracion: OpcionesType[] = [
        {
            nombre: "Espacios Físicos",
            ruta: `${this.urlbaseOA}espacios_f`
        },
        {
            nombre: "Gestionar Reglas",
            ruta: `${this.urlbaseOA}reglas`
        },
        {
            nombre: "Visualizar Reservas",
            ruta: `${this.urlbaseOA}reservas`
        }
    ]//admin 1, operario 2
    static opcionesOperario: OpcionesType[] = [
        {
            nombre: "Visualizar Reservas",
            ruta: `${this.urlbaseOA}reservas`
        }
    ]
    static rutasNavAdmin: OpcionesType[] = [

    ]
    //Opciones Estudiante
    static opcionesEstudiante: OpcionesType[] = [

    ]
    //dropdown rutas
    static dropdown: OpcionesType[] = [
        {
            nombre: "Perfil",
            ruta: `${this.urlbaseOA}perfil`
        }
    ]
    //Textos Acordeones
    static textosAdmin: AcordeonType[] = [
        {
            title: 'Administrar Espacios Fisicos',
            content: ['Agregar Espacios', 'Manejar Espacios']
        },
        {
            title: 'Reservas',
            content: ['Visualizar las Reservas', 'Reasignar Reservas']
        }
    ]
    static textosEstudiante: AcordeonType[] = [
        {
            title: 'Ver Espacios Fisicos',
            content: [
                'Salones Disponibles',
                'Salas de Estudio Disponibles',
                'Auditorios Disponibles',
                'Laboratorios Disponibles'
            ]
        },
        {
            title: 'Consultar',
            content: ['Consulta tus reservas vencidas ', 'Consulta tus reservas Activas']
        },
        {
            title: 'Reservar',
            content: ['Reservar el espacio fisico', 'Cancelar tus reservas']
        }
    ]

}