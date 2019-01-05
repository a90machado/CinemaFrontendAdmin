import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/shared/models/movie';
import { MovieApiService } from '../../../services/movie-api.service';
import { DataService } from '../../../services';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-edit-movie-modal',
  templateUrl: './edit-movie-modal.component.html',
  styleUrls: ['./edit-movie-modal.component.css']
})
export class EditMovieModalComponent implements OnInit {

  movie: Movie = new Movie();
  constructor( private movieApiService: MovieApiService, private dataService: DataService, public modalRef: BsModalRef ) { }

  ngOnInit() {
  }
  editMovie(){
  this.movieApiService.editMovie(this.movie).subscribe(() =>{
    this.dataService.updateMovies();
  });}
}
