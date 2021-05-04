import { Drzava } from "./drzava.model";

 export class Grad{
    constructor(public Id:number,public NazivGrada:string,public PostanskiBroj:number,public DrzavaId:number,public drzava?:Drzava){};
}