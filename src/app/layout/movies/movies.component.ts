import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../shared/services';
import { ReplaySubject } from 'rxjs';
import { Movie } from 'src/app/shared/models/movie';
import { MovieApiService } from '../shared/services/movie-api.service';
import { TableComponent } from '../shared/components';
import { MovieModalComponent } from '../shared/components/modals/movie-modal/movie-modal.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
 
  public movies$: ReplaySubject<Movie[]>;
  movie: Movie;
  modalRef: BsModalRef;

  constructor(    private dataService: DataService,
    private movieApiService: MovieApiService,
    private tableComponent: TableComponent,
    
    public modalService: BsModalService,
    ) 
    { 
      
      this.movies$ = this.dataService.movies$;
    }

  ngOnInit() {
  }

  handleSelectedRow(eventData) {
    const initialState = eventData;
    this.modalRef = this.modalService.show(MovieModalComponent, {initialState});
  }


  updateMovies(){
    this.dataService.updateMovies();
  }
  
  addNew(){
    console.log("add new")
  }

  handleDelete(eventData){
    this.movieApiService.deleteMovie(eventData.id).subscribe(() =>{
      this.dataService.updateMovies();
    });
    
  }
}
