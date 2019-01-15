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
  optionsDay1=[];
  optionsDay2=[];
  optionsDay3=[];
  optionsDay4=[];

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
  error="";
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
  dateRelease:Date;
  dateEnd:Date;
  
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
    this.error="";

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

    this.releaseDate=this.yearRelease+"-"+this.convertMonthToNumber(this.monthRelease)+"-"+this.dayRelease+"T00:00:00";
    this.endDate=this.yearEnd+"-"+this.convertMonthToNumber(this.monthEnd)+"-"+this.dayEnd+"T00:00:00";
    this.movieToSave.title=movie.Title;
    this.movieToSave.image=movie.Poster;
    this.movieToSave.duration=this.duration;
    this.movieToSave.director=movie.Director;
    this.movieToSave.cast=movie.Actors;
    this.movieToSave.synopsis=movie.Plot;
    this.movieToSave.releaseDate=this.releaseDate;
    this.movieToSave.endDate=this.endDate;
    this.movieToSave.minimumAge=this.minimumAge;

    this.dateRelease= new Date(this.releaseDate);
    this.dateEnd= new Date(this.endDate);

    console.log(this.dateRelease.getTime());
    console.log(this.dateEnd.getTime());

    if (this.dateRelease.getTime()>this.dateEnd.getTime()) {
      this.error="Release date of the movie must be equal or before end date";
    }

    if (this.error=="") {
      this.movieApiService.addMovie(this.movieToSave).subscribe(() =>{
        this.dataService.updateMovies();
        this.modalRef.hide();
      });
    }
    
  }
  createArrayDays(){
    for (let i = 1; i < 32; i++) {
      if(i<10){
        this.optionsDay1.push('0'+i)
        this.optionsDay2.push('0'+i)
        this.optionsDay3.push('0'+i)
        this.optionsDay4.push('0'+i)

      } else {
        this.optionsDay1.push(i)
        this.optionsDay2.push(i)
        this.optionsDay3.push(i)
        this.optionsDay4.push(i)

      }
      
    }
    this.optionsDay2.splice(this.optionsDay2.length-1,1);
    this.optionsDay3.splice(this.optionsDay3.length-2,2);
    this.optionsDay4.splice(this.optionsDay4.length-3,3);

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
  isLeapYear(ano){
    if ( ( ano % 4 == 0 && ano % 100 != 0 ) || (ano % 400 == 0) ) { 
      return true; 
  } else {
      return false;
  }
  }
}
