import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CinemasService {

  constructor(private http: HttpClient) { }

  public getCinemas(){
    return this.http.get('http://localhost:8080/CinemaTicketSystem/api/cinema/');
}
  public deleteCinema(id:number): Observable<{}>{
    return this.http.delete(`http://localhost:8080/CinemaTicketSystem/api/cinema/${id}`);
  }
}
