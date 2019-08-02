import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Visit } from './Visit';

@Injectable({
    providedIn: 'root'
})

export class VisitService {

    private urlEndPoint = 'http://' + window.location.hostname + ':8080/api/visits';
    private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

    constructor(private http: HttpClient) { }

    public get(): Observable<Visit[]> {
        return this.http.get<Visit[]>(this.urlEndPoint);
    }

    public getById(id: number): Observable<Visit> {
        return this.http.get<Visit>(this.urlEndPoint + '/' + id);
    }

    public async getByPacient(pacientId: number) {
        return await this.http.get<Visit[]>(this.urlEndPoint + '/patient/' + pacientId).toPromise();
    }

    public insert(visit: Visit) {
        return this.http.post<Visit>(this.urlEndPoint, visit, { headers: this.httpHeaders });
    }

    public update(visit: Visit) {
        return this.http.put<Visit>(this.urlEndPoint, visit, { headers: this.httpHeaders });
    }

    public delete(id: number) {
        return this.http.delete(this.urlEndPoint + '/' + id, { headers: this.httpHeaders });
    }

}
