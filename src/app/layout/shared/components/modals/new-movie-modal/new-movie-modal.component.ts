import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { MovieApiService } from '../../../services/movie-api.service';
import { ReplaySubject } from 'rxjs';
import { Movie } from 'src/app/shared/models/movie';
import { DataService } from '../../../services';

@Component({
  selector: 'app-new-movie-modal',
  templateUrl: './new-movie-modal.component.html',
  styleUrls: ['./new-movie-modal.component.css']
})
export class NewMovieModalComponent implements OnInit {
  titleToSearch='';
  yearToSearch='';
  dayRelease = "";
  monthRelease = "";
  yearRelease = "";
  dayEnd= "";
  monthEnd = "";
  yearEnd = "";
  releaseDate="";
  endDate="";

  title="";
  image="";
  minimumAge: number;
  duration: number;
  stringDuration="";
  director="";
  cast="";
  synopsis="";
  teste="";
  years = [];
  currentYear: number;
  

  
  movieToSave: Movie = new Movie();
  public movie$: ReplaySubject<any []>= new ReplaySubject(1);
  constructor(public modalRef: BsModalRef, public movieApiService: MovieApiService, public dataService: DataService) { this.createArrayYears()}

  ngOnInit() {
  }

  createArrayYears(){
    this.currentYear=(new Date()).getFullYear();
    this.years.push(this.currentYear-1);
    this.years.push(this.currentYear);
    for (let i = 0; i < 3; i++) {
      this.currentYear+=1;
      this.years.push(this.currentYear);
    }
  }

  searchMovie(){
    this.movieApiService.searchMovie(this.titleToSearch,this.yearToSearch).subscribe((res:any) => {this.movie$.next(res)});
  }
  newMovie(movie){
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

    for (let index = 0; index < movie.Runtime.length; index++) {
      if (movie.Runtime[index]!=" "){
        this.stringDuration+=movie.Runtime[index];
      }
      else{
        break;
      }
    }

    console.log(Number(this.stringDuration));

    this.releaseDate=this.yearRelease+"-"+this.monthRelease+"-"+this.dayRelease;
    this.endDate=this.yearEnd+"-"+this.monthEnd+"-"+this.dayEnd;
    this.movieToSave.title=movie.Title;
    this.movieToSave.image=movie.Poster;
    this.movieToSave.minimumAge=111;
    this.movieToSave.duration=Number(this.stringDuration);
    this.movieToSave.director=movie.Director;
    this.movieToSave.cast=movie.Actors;
    this.movieToSave.synopsis=movie.Plot;
    this.movieToSave.releaseDate=this.releaseDate;
    this.movieToSave.endDate=this.endDate;
    this.movieToSave.minimumAge=this.minimumAge;

    this.movieApiService.addMovie(this.movieToSave).subscribe(() =>{
      this.dataService.updateMovies();
    });
  }
}
