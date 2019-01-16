import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Room } from 'src/app/shared/models/room';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor(private http: HttpClient) { }

  public getRooms(id:number){
    return this.http.get(`http://localhost:8080/CinemaTicketSystem/api/room/cinema/${id}`);
}
public addRoom(room: Room): Observable<Room>{
  return this.http.post<Room>(`http://localhost:8080/CinemaTicketSystem/api/room/new`,room);
}
public editRoom (room: Room): Observable<Room>{
  return this.http.put<Room>(`http://localhost:8080/CinemaTicketSystem/api/room/`,room);
}
public deleteRoom(id:number): Observable<{}>{
  return this.http.delete(`http://localhost:8080/CinemaTicketSystem/api/room/${id}`);
}
}
