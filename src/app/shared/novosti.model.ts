import { Osoblje } from "./osoblje.model";

export class Novosti{
    constructor(public Id:number,public Naslov:string,public Sadrzaj:string,public DatumObjave:Date,public OsobljeId:number,public Osoblje?:Osoblje){};
}