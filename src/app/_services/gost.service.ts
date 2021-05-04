import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Gost } from "../shared/gost.model";
import { GostUpsertRequest } from "../shared/requests/gostupsert.model";

@Injectable({providedIn:'root'})
export class GostService{
    constructor(private http:HttpClient){ }
    getGosti(){
       return this.http.get<Gost[]>('http://localhost:12848/api/Gost');
    }
    addGost(gost:GostUpsertRequest){
        return this.http.post('http://localhost:12848/api/Gost',gost);
    }
    
}