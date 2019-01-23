import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { MovieApiService } from '../../../services/movie-api.service';
import { ReplaySubject } from 'rxjs';
import { Movie } from 'src/app/shared/models/movie';
import { DataService } from '../../../services';
import { BsDaterangepickerConfig } from 'ngx-bootstrap/datepicker';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-new-movie-modal',
  templateUrl: './new-movie-modal.component.html',
  styleUrls: ['./new-movie-modal.component.css']
})
export class NewMovieModalComponent implements OnInit {
  datePickerConfig: Partial<BsDaterangepickerConfig>;

  optionsDay1=[];
  optionsDay2=[];
  optionsDay3=[];
  optionsDay4=[];

  dayRelease = "";
  monthRelease = "";
  yearRelease = "";
  dayEnd= "";
  monthEnd = "";
  yearEnd = "";
  releaseDate = '';
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

  currentYear: number;
  dateRelease:Date;
  dateEnd:Date;
  movieToSave: Movie = new Movie();



  searchedMovie = false;
  years = [];
  yearToSearch = '';
  titleToSearch = '';
  message = '';
  newDate = [''];

  public movie$: ReplaySubject<any []> = new ReplaySubject(1);

  constructor(  public modalRef: BsModalRef,
                public movieApiService: MovieApiService,
                public datepipe: DatePipe,
                public dataService: DataService) {
                this.yearToSearch = '2019';
                this.minimumAge = 18;
                this.datePickerConfig = Object.assign({},
                  {
                    containerClass: 'theme-dark-blue',
                    minDate: (new Date()),
                    rangeInputFormat: 'MMMM do YYYY',
                    rangeSeparator: ' to '
                  });
  }

  ngOnInit() {
    this.createArrayYears();

    this.createArrayDays();
  }

  // SEARCH A MOVIE ON OMDB WITH TITLE AND YEAR
  searchMovie() {
    this.movieApiService.searchMovie(this.titleToSearch, this.yearToSearch).subscribe((res: any) => {
      console.log(res);
      if (res.Error !== 'Movie not found!') {
        this.movie$.next(res);
        this.searchedMovie = true;
      } else {
        this.message = 'Movie not Found';
      }
    });
  }



  public newMovie(movie) {
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
    this.newDate = this.releaseDate.toString().split(' ');
    console.log(this.newDate);
    //this.releaseDate=this.yearRelease+"-"+this.convertMonthToNumber(this.monthRelease)+"-"+this.dayRelease;
    this.endDate=this.yearEnd+"-"+this.convertMonthToNumber(this.monthEnd)+"-"+this.dayEnd;
    this.movieToSave.title=movie.Title;
    this.movieToSave.image=movie.Poster;
    this.movieToSave.duration=this.duration;
    this.movieToSave.director=movie.Director;
    this.movieToSave.cast=movie.Actors;
    this.movieToSave.synopsis=movie.Plot;
    this.movieToSave.releaseDate=(this.newDate[3] + '-' + this.convertMonthToNumber(this.newDate[1]) + '-' + this.newDate[2]);
    this.movieToSave.endDate=(this.newDate[12] + '-' + this.convertMonthToNumber(this.newDate[10]) + '-' + this.newDate[11]);
    this.movieToSave.minimumAge=this.minimumAge;
    console.log(this.movieToSave);
    this.dateRelease= new Date(this.releaseDate);
    this.dateEnd= new Date(this.endDate);


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

  tranformMonth(month) {
   return this.datepipe.transform(month, 'MM');
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



  convertMonthToNumber(monthString){
    if (monthString=="Jan") {
      monthString="01";
    }
    if (monthString=="Feb") {
      monthString="02";
    }
    if (monthString=="Mar") {
      monthString="03";
    }
    if (monthString=="Apr") {
      monthString="04";
    }
    if (monthString=="May") {
      monthString="05";
    }
    if (monthString=="Jun") {
      monthString="06";
    }
    if (monthString=="Jul") {
      monthString="07";
    }
    if (monthString=="Aug") {
      monthString="08";
    }
    if (monthString=="Sep") {
      monthString="09";
    }
    if (monthString=="Oct") {
      monthString="10";
    }
    if (monthString=="Nov") {
      monthString="11";
    }
    if (monthString=="Dec") {
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



  createArrayYears() {
    const maxYears = 40;
    this.currentYear = (new Date()).getFullYear() + 1;
    for (let i = 0; i <= maxYears; i++) {
      this.years.push(this.currentYear);
      this.currentYear -= 1;
    }
  }
}
