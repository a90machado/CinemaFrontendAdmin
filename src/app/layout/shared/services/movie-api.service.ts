import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })
  export class MovieApiService{

    constructor(
        private http: HttpClient,
    ){}

    public getMovies(){
        return this.http.get('http://localhost:8080/CinemaTicketSystem/api/movie/');
    }

    public deleteMovie (id: number){
        const url = `{http://localhost:8080/CinemaTicketSystem/api/movie}/${id}`; 
        this.http.delete(url);
      }
  }