import { Injectable } from "@angular/core";
import{HttpClient} from '@angular/common/http';
import { Drzava } from "../shared/drzava.model";
import { DrzavaUpsertRequest } from "../shared/requests/drzavaupsert.model";

@Injectable({providedIn:'root'})
export class DrzavaService{

    formData:Drzava;
    constructor(private http:HttpClient){};
   public getDrzave(){
        return this.http.get<Drzava[]>('http://localhost:12848/api/Drzava');
    }
    dodajDrzavu(drzava:DrzavaUpsertRequest){
        return this.http.post('http://localhost:12848/api/Drzava',drzava);
    }
}

