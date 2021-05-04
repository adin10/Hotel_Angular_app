import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { tap } from "rxjs/operators";
import { RezervacijaUpsertRequest } from "../shared/requests/rezervacijaupsert.model";
import { Rezervacija } from "../shared/rezervacija.model";
@Injectable({ providedIn: 'root' })
export class RezervacijaService {
   constructor(public http: HttpClient) { };

   private refreshListuAutomatski = new Subject<void>();
   get refreshanuListu() {
      return this.refreshListuAutomatski;
   }
   getRezervacije() {
      return this.http.get<Rezervacija[]>('http://localhost:12848/api/Rezervacija');
   }

   addRezervacija(dodaj: RezervacijaUpsertRequest) {
      return this.http.post('http://localhost:12848/api/Rezervacija', dodaj).pipe(
         tap(() => {
            this.refreshListuAutomatski.next();
         })
      );
   }
   Obrisi(id) {
      if (confirm("Jeste li sigurni?")) {
         return this.http.delete('http://localhost:12848/api/Rezervacija/' + id).pipe(
            tap(() => {
               this.refreshListuAutomatski.next();
            })
         );
      }
   }
}