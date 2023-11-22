import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  private urlApi = 'http://127.0.0.1:8000/api/products'

  constructor(private http: HttpClient) {}

  public getData(): Observable<any> {
    return this.http.get<any>(this.urlApi);
  }

  public createItem(item: any): Observable<any> {
    return this.http.post<any>(this.urlApi, item);
  }

  public updateItem(id: number, item: any): Observable<any> {
    return this.http.put<any>(`${this.urlApi}/${id}`, item);
  }

  public deleteItem(id: number): Observable<any> {
    return this.http.delete<any>(`${this.urlApi}/${id}`);
  }
}
