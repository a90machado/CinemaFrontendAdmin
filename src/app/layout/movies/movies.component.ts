import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { Movie } from 'src/app/shared/models/movie';
import { DataService } from '../shared/services/data.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  public movies$: ReplaySubject<Movie[]>;
  
  constructor(
    private dataService: DataService
  ) {
    this.movies$=this.dataService.movies$;
   }

  ngOnInit() {
  }
  updateMovies(){
    this.dataService.updateMovies();
  }
}
