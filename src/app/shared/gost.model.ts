import { Grad } from "./grad.model";

export class Gost{
    constructor(public Id:Number,public Ime:string,public Prezime:string,public Email:string,public Telefon:string,
        public GradId:number,public KorisnickoIme:string,public LozinkaHash:string,public LozinkaSalt:string,public Grad?:Grad,public authdata? : string){}
}