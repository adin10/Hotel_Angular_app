import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { tap } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { Cjenovnik } from "../shared/cjenovnik.model";
import { CjenovnikUpsertRequest } from "../shared/requests/cjenovnikupsert.model";

@Injectable({ providedIn: 'root' })
export class CjenovnikService {
    constructor(private http: HttpClient) { };

    private refreshListuAutomatski = new Subject<void>();

    get refreshanuListu() {
        return this.refreshListuAutomatski;
    }
    getCijene() {
        return this.http.get<Cjenovnik[]>(`${environment.apiUrl}Cjenovnik`);
    }
    dodajCijenu(cjenovnik: CjenovnikUpsertRequest) {
        return this.http.post(`${environment.apiUrl}Cjenovnik`, cjenovnik).pipe(
            tap(() => {
                this.refreshListuAutomatski.next();
            })
        );
    }
    Obrisi(id) {
        if (confirm("jeste li sigurni?")) {
            return this.http.delete(`${environment.apiUrl}Cjenovnik/` + id).pipe(
                tap(() => {
                    this.refreshListuAutomatski.next();
                })
            );
        }
    }
}


