import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Novosti } from "../shared/novosti.model";

@Injectable({providedIn:'root'})
export class NovostiService{
    constructor(private http:HttpClient){};
    getNovosti(){
        return this.http.get<Novosti[]>('http://localhost:12848/api/Novosti');
    }
}

