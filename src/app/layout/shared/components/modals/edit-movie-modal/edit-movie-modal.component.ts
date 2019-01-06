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
  dayRelease = "";
  monthRelease = "";
  yearRelease = "";
  dayEnd= "";
  monthEnd = "";
  yearEnd = "";


  constructor( private movieApiService: MovieApiService, private dataService: DataService, public modalRef: BsModalRef ) { }

  ngOnInit() {
  }

  editMovie(id,title,image,minimumAge,duration,releaseDate,endDate,director,cast,synopsis){
    if (this.monthRelease=="January") {
      this.monthRelease="01";
    }
    if (this.monthRelease=="February") {
      this.monthRelease="02";
    }
    if (this.monthRelease=="March") {
      this.monthRelease="03";
    }
    if (this.monthRelease=="April") {
      this.monthRelease="04";
    }
    if (this.monthRelease=="May") {
      this.monthRelease="05";
    }
    if (this.monthRelease=="June") {
      this.monthRelease="06";
    }
    if (this.monthRelease=="July") {
      this.monthRelease="07";
    }
    if (this.monthRelease=="August") {
      this.monthRelease="08";
    }
    if (this.monthRelease=="September") {
      this.monthRelease="09";
    }
    if (this.monthRelease=="October") {
      this.monthRelease="10";
    }
    if (this.monthRelease=="November") {
      this.monthRelease="11";
    }
    if (this.monthRelease=="December") {
      this.monthRelease="12";
    }
    if (this.monthEnd=="January") {
      this.monthEnd="01";
    }
    if (this.monthEnd=="February") {
      this.monthEnd="02";
    }
    if (this.monthEnd=="March") {
      this.monthEnd="03";
    }
    if (this.monthEnd=="April") {
      this.monthEnd="04";
    }
    if (this.monthEnd=="May") {
      this.monthEnd="05";
    }
    if (this.monthEnd=="June") {
      this.monthEnd="06";
    }
    if (this.monthEnd=="July") {
      this.monthEnd="07";
    }
    if (this.monthEnd=="August") {
      this.monthEnd="08";
    }
    if (this.monthEnd=="September") {
      this.monthEnd="09";
    }
    if (this.monthEnd=="October") {
      this.monthEnd="10";
    }
    if (this.monthEnd=="November") {
      this.monthEnd="11";
    }
    if (this.monthEnd=="December") {
      this.monthEnd="12";
    }
    releaseDate=this.yearRelease+"-"+this.monthRelease+"-"+this.dayRelease+"T00:00:00";
    endDate=this.yearEnd+"-"+this.monthEnd+"-"+this.dayEnd+"T00:00:00";

    console.log(id,title,image,minimumAge,duration,director,cast,synopsis,releaseDate,endDate);
    this.movie.id=id;
    this.movie.title=title;
    this.movie.image=image;
    this.movie.minimumAge=minimumAge;
    this.movie.duration=duration;
    this.movie.director=director;
    this.movie.cast=cast;
    this.movie.synopsis=synopsis;
    this.movie.releaseDate=releaseDate;
    this.movie.endDate=endDate;

    this.movieApiService.editMovie(this.movie).subscribe(() =>{
      this.dataService.updateMovies();
    });
  }
}
