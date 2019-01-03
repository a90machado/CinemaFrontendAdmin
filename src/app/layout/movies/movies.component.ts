import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../shared/services';
import { ReplaySubject } from 'rxjs';
import { Movie } from 'src/app/layout/shared/components/modals/movie';
import { MovieApiService } from '../shared/services/movie-api.service';
import { TableComponent } from '../shared/components';

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

  constructor(    private dataService: DataService,
    private movieApiService: MovieApiService,
    private tableComponent: TableComponent
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
    this.movie = eventData.row;
    if (eventData.value==true) {
      this.tableComponent.value=false;
      console.log("user want to delete")
      this.movieApiService.deleteMovie(this.movie.id).subscribe();
      this.updateMovies();
    } 
  }

  updateMovies(){
    this.dataService.updateMovies();
  }
}
