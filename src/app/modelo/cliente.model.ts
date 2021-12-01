import { Timestamp } from "rxjs";

export interface Cliente{
    id:string;
    nombre:string;
    apellido:string;
    email:string;
    activacion:string;
    pagomembrecia:number;
    fechainicio:Date;

}