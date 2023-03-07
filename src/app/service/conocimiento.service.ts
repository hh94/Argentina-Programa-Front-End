import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Conocimiento } from '../model/conocimiento';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConocimientoService {

  expURL =   environment.URL +  'conocimiento/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Conocimiento[]>{
    return this.httpClient.get<Conocimiento[]>(this.expURL + 'lista');
  }

  public detail(id: number): Observable<Conocimiento>{
    return this.httpClient.get<Conocimiento>(this.expURL + `detail/${id}`);
  } 

  public save(conocimiento: Conocimiento): Observable<any>{
    return this.httpClient.post<any>(this.expURL + 'create', conocimiento);
  }

  public update(id: number, conocimiento: Conocimiento): Observable<any>{
    return this.httpClient.put<any>(this.expURL + `update/${id}`, conocimiento);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.expURL + `delete/${id}`);
  }
}