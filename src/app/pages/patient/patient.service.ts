import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from './Patient';

@Injectable({
  providedIn: 'root'
})

export class PatientService {

  private urlEndPoint = 'http://' + window.location.hostname + ':8080/api/pacients';
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  public get(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.urlEndPoint);
  }

  public getById(id: number): Observable<Patient> {
    return this.http.get<Patient>(this.urlEndPoint + '/' + id);
  }

  public insert(patient: Patient) {
    return this.http.post<Patient>(this.urlEndPoint, patient, { headers: this.httpHeaders });
  }

  public update(patient: Patient) {
    return this.http.put<Patient>(this.urlEndPoint + '/' + patient.pacientId, patient, { headers: this.httpHeaders });
  }

  public deleteCliente(id: number) {
    return this.http.delete(this.urlEndPoint + '/' + id, { headers: this.httpHeaders });
  }

}
