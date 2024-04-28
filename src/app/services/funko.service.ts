import { Injectable } from '@angular/core';
import { Funko } from '../models/funko';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FunkoService {

  API_URL: string = environment.apiURL

  constructor(private http: HttpClient) { }



  getFunkos(): Observable<Funko[]> {
    return this.http.get<Funko[]>(`${this.API_URL}/funko`)
  }
 
  postFunko(funko: Funko) : Observable<Funko> {
    return this.http.post<Funko>(`${this.API_URL}/funko`, funko)
  }

  putFunko(funko: Funko) : Observable<Funko> {
    return this.http.put<Funko>(`${this.API_URL}/funko`, funko)
  }

  deleteFunkoById(id: string): Observable<any> {
    return this.http.delete<any>(`${this.API_URL}/funko/${id}`)
  }
}
