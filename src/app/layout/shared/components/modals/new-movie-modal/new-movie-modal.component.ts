import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { MovieApiService } from '../../../services/movie-api.service';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-new-movie-modal',
  templateUrl: './new-movie-modal.component.html',
  styleUrls: ['./new-movie-modal.component.css']
})
export class NewMovieModalComponent implements OnInit {
  titleToSearch="";
  yearToSearch="";
  public movie$: ReplaySubject<any []>= new ReplaySubject(1);
  constructor(public modalRef: BsModalRef, public movieApiService: MovieApiService) { }

  ngOnInit() {
  }
  searchMovie(){
    this.movieApiService.searchMovie(this.titleToSearch,this.yearToSearch).subscribe((res:any) => {this.movie$.next(res)});
  }
  newMovie(){}
}
