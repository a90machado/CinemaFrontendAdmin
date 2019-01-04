import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError} from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};


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

    public deleteMovie (id: number): Observable<{}>{
        console.log("is in movieapiservice")
        console.log(id);
        const url = `http://localhost:8080/CinemaTicketSystem/api/movie/${id}`; 
        return this.http.delete(url, httpOptions) .pipe(
            catchError(this.handleError)
          );;
          location.reload();
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