import { Gost } from "./gost.model";
import { Soba } from "./soba.model";

export class Rezervacija{
    constructor(public Id:number,public GostId:number,public SobaId:number,public DatumRezervacije:Date,public ZavrsetakRezervacije:Date,public Gost?:Gost,public Soba?:Soba){};
}