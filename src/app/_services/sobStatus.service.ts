import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { tap } from "rxjs/operators";
import { SobaStatusInsertRequest } from "../shared/requests/sobastatusinsert.model";
import { SobaStatus } from "../shared/sobaStatus.model";

@Injectable({ providedIn: 'root' })
export class SobaStatusService {
    constructor(private http: HttpClient) { }

    private refreshListuAutomatski = new Subject<void>();

    get refreshanuListu() {
        return this.refreshListuAutomatski
    }

    getSobeStatusi() {
        return this.http.get<SobaStatus[]>('http://localhost:12848/api/SobaStatus');
    }
    DodajStatus(dodaj: SobaStatusInsertRequest) {
        return this.http.post('http://localhost:12848/api/SobaStatus', dodaj).pipe(
            tap(() => {
                this.refreshListuAutomatski.next();
            })
        );
    }

    Obrisi(id): Observable<SobaStatus> {
        if (confirm("Jeste li sigurni?")) {
            return this.http.delete<SobaStatus>('http://localhost:12848/api/SobaStatus/' + id).pipe(
                tap(() => {
                    this.refreshListuAutomatski.next();
                })
            )
        }
    }

    getStatusById(id){
        return this.http.get<SobaStatus>('http://localhost:12848/api/SobaStatus/'+id);
    }

    statusUpdate(id,sobastatusinsert:SobaStatusInsertRequest){
        return this.http.put('http://localhost:12848/api/SobaStatus/'+id,sobastatusinsert);
    }
}