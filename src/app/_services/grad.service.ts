import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Grad } from '../shared/grad.model';
import { environment } from "src/environments/environment";
import { GradUpsertRequest } from "../shared/requests/gradupsert.model";
import { Observable, Subject } from "rxjs";
import { tap } from 'rxjs/operators';
@Injectable({ providedIn: 'root' })
export class GradService {
    constructor(private http: HttpClient) { };

    private refreshListuAutomatski = new Subject<void>();

    get refreshanuListu() {
        return this.refreshListuAutomatski;
    }

    getGradovi() {

        let broj = 3;
        return this.http.get<Grad[]>(`${environment.apiUrl}Grad`);
    }
    // dodajGrad(dodaj:GradUpsertRequest){
    //     const httpheaders=new HttpHeaders();
    //     httpheaders.append('content-type','application/json');
    //     return this.http.post('http://localhost:12848/api/Grad',dodaj , {headers:httpheaders});
    // }
    dodajGrad(grad: GradUpsertRequest) {
        return this.http.post<Grad>(`${environment.apiUrl}Grad`, grad)
            .pipe(
                tap(() => {
                    this.refreshListuAutomatski.next();
                })
            );;

    }
    ObrisiGrad(id): Observable<Grad> {
        if (confirm("Jeste li sigurni?")) {
            return this.http.delete<Grad>('http://localhost:12848/api/Grad/' + id)
                .pipe(
                    tap(() => {
                        this.refreshListuAutomatski.next();
                    })
                );;
        }
    }

    getGradById(id){
        return this.http.get<Grad>('http://localhost:12848/api/Grad/'+id);
    }


    gradUpdate(id,grad: GradUpsertRequest){
        return this.http.put('http://localhost:12848/api/Grad/' + id,grad);
    }
}
