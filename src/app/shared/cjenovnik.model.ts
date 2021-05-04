import { Soba } from "./soba.model";

export class Cjenovnik{
    constructor(public Id:number,public SobaId:number,public BrojDana:number,public Cijena:number,public Soba?:Soba){};
}