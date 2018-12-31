import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { MovieApiService } from './movie-api.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public movies$: ReplaySubject<any []>= new ReplaySubject(1);

  constructor( private movieApi: MovieApiService) { 
    this.updateMovies();
  }

  public updateMovies() {
    
    this.movieApi.getMovies().subscribe((res: any) => {

      this.movies$.next(res);
    });
  }
}

