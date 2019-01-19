import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TypeOfTicket } from 'src/app/shared/models/typeofticket';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TypeOfTicketsService {

  constructor(private http: HttpClient) { }

  public getTypeOfTickets(id:number){
    return this.http.get(`http://localhost:8080/CinemaTicketSystem/api/typeofticket/cinema/${id}`);
}
public addTypeOfTicket (typeofticket: TypeOfTicket): Observable<TypeOfTicket>{
  return this.http.post<TypeOfTicket>(`http://localhost:8080/CinemaTicketSystem/api/typeofticket/new`,typeofticket);
}
public editTypeOfTicket (typeofticket: TypeOfTicket): Observable<TypeOfTicket>{
  return this.http.put<TypeOfTicket>(`http://localhost:8080/CinemaTicketSystem/api/typeofticket`,typeofticket);
}
public deleteTypeOfTicket (id:number): Observable<{}>{
  return this.http.delete(`http://localhost:8080/CinemaTicketSystem/api/typeofticket/${id}`);
}

}
