import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RecenzijaUpsertRequest } from "../shared/requests/recenzijaupsert.model";

@Injectable({providedIn:'root'})
export class RecenzijaService{
    constructor(private http:HttpClient){};

    dodajRecenziju(dodaj:RecenzijaUpsertRequest){
       return this.http.post('http://localhost:12848/api/Recenzija',dodaj);
    }
}
