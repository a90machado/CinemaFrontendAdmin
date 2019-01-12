import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError} from 'rxjs/operators';
import { Movie } from 'src/app/shared/models/movie';

@Injectable({
    providedIn: 'root'
  })
  export class MovieApiService{

    constructor(
        private http: HttpClient,
    ){}

    public getMovies(){
        return this.http.get('http://localhost:4200/api/CinemaTicketSystem/api/movie/');
    }
    public searchMovie(titleToSearch: string, yearToSearch: string){
        return this.http.get(`http://www.omdbapi.com/?apikey=9bcc8f54&t=${titleToSearch}&y=${yearToSearch}&plot=full`);
    }

    public deleteMovie (id: number): Observable<{}>{
        console.log("is in movieapiservice")
        console.log(id);
        const url = `http://localhost:4200/api/CinemaTicketSystem/api/movie/${id}`; 
        return this.http.delete(url).pipe(
            catchError(this.handleError)
          );;
      }
      public editMovie (movie: Movie): Observable<Movie>{
        const url = `http://localhost:4200/api/CinemaTicketSystem/api/movie/`; 
        return this.http.put<Movie>(url,movie).pipe(
            catchError(this.handleError)
          );;
      }
      public addMovie (movie: Movie): Observable<Movie>{
        const url = `http://localhost:4200/api/CinemaTicketSystem/api/movie/new`; 
        return this.http.post<Movie>(url,movie).pipe(
            catchError(this.handleError)
          );;
      }
      private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error('An error occurred:', error.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.error(
            `Backend returned code ${error.status}, ` +
            `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError(
          'Something bad happened; please try again later.');
      };

  }