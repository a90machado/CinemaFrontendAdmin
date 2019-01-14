import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor(private http: HttpClient) { }

  public getRooms(){
    return this.http.get('http://localhost:8080/CinemaTicketSystem/api/room/');
}
}
