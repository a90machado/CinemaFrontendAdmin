import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TypeOfTicketsService {

  constructor(private http: HttpClient) { }

  public getTypeOfTickets(){
    return this.http.get(`http://localhost:8080/CinemaTicketSystem/api/typeofticket`);
}
}
