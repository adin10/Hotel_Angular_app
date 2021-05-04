import { SobaStatus } from "./sobaStatus.model";

export class Soba{
    constructor(public Id:number, public brojSprata:number,public BrojSobe:number,public OpisSobe:string,public PictureName:string,public Slika:BinaryType[],public PicturePath:string,public SobaStatusId:number,public SobaStatus?:SobaStatus){};
}