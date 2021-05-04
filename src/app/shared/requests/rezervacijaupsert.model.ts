export class RezervacijaUpsertRequest{
    constructor(public GostId:number,public SobaId:number,public DatumRezervacije:Date,public ZavrsetakRezervacije:Date){};
}