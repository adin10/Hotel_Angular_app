import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { tap } from "rxjs/operators";
import { SobaUpsertRequest } from "../shared/requests/sobaupsert.model";
import { Soba } from "../shared/soba.model";

@Injectable({providedIn:'root'})
export class SobaService{
    constructor(private http:HttpClient){};

    private refreshListuAutomatski = new Subject<void>();

    get refreshanuListu() {
        return this.refreshListuAutomatski;
    }

    getSobe(){
      return  this.http.get<Soba[]>('http://localhost:12848/api/soba');
    }


    getSobaById(id){
        return this.http.get<Soba>('http://localhost:12848/api/soba/'+id);
    }


    dodajSobu(soba:SobaUpsertRequest){
        return this.http.post('http://localhost:12848/api/Soba',soba);
    }



    ObrisiSobu(id):Observable<Soba>{
      if (confirm("Jeste li sigurni?")) {
        return this.http.delete<Soba>('http://localhost:12848/api/soba/' + id)
            .pipe(
                tap(() => {
                    this.refreshListuAutomatski.next();
                })
            );;
    }
    }
}
