import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../shared/services';
import { ReplaySubject } from 'rxjs';
import { Movie } from 'src/app/layout/shared/components/modals/movie';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  @Input() duration = ''
  @Input() releaseDate = ''
  @Input() director = ''
  @Input() cast = ''
  @Input() synopsis = ''
  @Input() delete = ''

  public movies$: ReplaySubject<Movie[]>;
  movie: Movie;

  constructor(    private dataService: DataService
    ) { 
      this.duration = "Duration: ";
      this.releaseDate= "Release Date: ";
      this.director= "Director: ";
      this.cast= "Cast: ";
      this.synopsis= "Synopsis: ";
      this.delete= "Delete Movie";
      this.movies$ = this.dataService.movies$;
    }

  ngOnInit() {
  }

  handleSelectedRow(eventData) {
    this.movie = eventData;
  }
  updateMovies(){
    this.dataService.updateMovies();
  }
}
