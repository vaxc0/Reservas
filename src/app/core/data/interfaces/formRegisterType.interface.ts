export interface UserRegisterType{
    documento:string
    password:string
    rePassword:string,
    rol:{id:number,rol:string}
    docEsNumero:boolean,
    contraIgual:boolean,
    camposVacios:boolean,
    enviar:boolean
}