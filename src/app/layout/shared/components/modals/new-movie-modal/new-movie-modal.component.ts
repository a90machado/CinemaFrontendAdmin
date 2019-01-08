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
  optionsDay1=[]
  optionsDay2=[]
  titleToSearch='';
  yearToSearch='';
  dayRelease = "";
  monthRelease = "September";
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
  constructor(public modalRef: BsModalRef, public movieApiService: MovieApiService, public dataService: DataService) { 
    
  
  }

  ngOnInit() {
    this.createArrayYears();
    this.createArrayDays();
  }

  searchMovie(){
    this.movieApiService.searchMovie(this.titleToSearch,this.yearToSearch).subscribe((res:any) => {this.movie$.next(res)});
  }
  newMovie(movie){


    for (let index = 0; index < movie.Runtime.length; index++) {
      if (movie.Runtime[index]!=" "){
        this.stringDuration+=movie.Runtime[index];
      }
      else{
        this.duration = Number(this.stringDuration);
        this.stringDuration="";
        break;
      }
    }


    this.releaseDate=this.yearRelease+"-"+this.convertMonthToNumber(this.monthRelease)+"-"+this.dayRelease;
    this.endDate=this.yearEnd+"-"+this.convertMonthToNumber(this.monthEnd)+"-"+this.dayEnd;
    this.movieToSave.title=movie.Title;
    this.movieToSave.image=movie.Poster;
    this.movieToSave.duration=this.duration;
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
  createArrayDays(){
    for (let i = 1; i < 32; i++) {
      if(i<10){
        this.optionsDay1.push('0'+i)
        this.optionsDay2.push('0'+i)
      } else {
        this.optionsDay1.push(i)
        this.optionsDay2.push(i)
      }
      
    }
    this.optionsDay2.splice(this.optionsDay2.length,1);
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
  convertMonthToNumber(monthString){
    if (monthString=="January") {
      monthString="01";
    }
    if (monthString=="February") {
      monthString="02";
    }
    if (monthString=="March") {
      monthString="03";
    }
    if (monthString=="April") {
      monthString="04";
    }
    if (monthString=="May") {
      monthString="05";
    }
    if (monthString=="June") {
      monthString="06";
    }
    if (monthString=="July") {
      monthString="07";
    }
    if (monthString=="August") {
      monthString="08";
    }
    if (monthString=="September") {
      monthString="09";
    }
    if (monthString=="October") {
      monthString="10";
    }
    if (monthString=="November") {
      monthString="11";
    }
    if (monthString=="December") {
      monthString="12";
    }
    return monthString;
  }
}
