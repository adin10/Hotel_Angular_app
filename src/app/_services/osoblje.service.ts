import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Osoblje } from "../shared/osoblje.model";
import { SobaUpsertRequest } from "../shared/requests/sobaupsert.model";

@Injectable({providedIn:'root'})
export class OsobljeService{

constructor(private http:HttpClient){};

getOsoblje(){
    return this.http.get<Osoblje[]>('http://localhost:12848/api/Osoblje');
}

addOsoblje(dodaj:SobaUpsertRequest){
    return this.http.post('http://localhost:12848/api/Osoblje',dodaj);
}

}