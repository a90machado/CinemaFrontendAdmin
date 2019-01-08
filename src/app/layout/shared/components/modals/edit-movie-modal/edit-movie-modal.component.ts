import { Component, OnInit, Input } from '@angular/core';
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
  optionsDay=[]
  movie: Movie = new Movie();
  dayRelease:string;
  monthRelease = "";
  yearRelease = "";
  dayEnd: string;
  monthEnd = "";
  yearEnd = "";
  years = [];
  currentYear: number;
  releaseDateNew="";
  endDateNew="";
  minimumAgeNew: number;
  monthsArray=[];

  @Input()releaseDate:string;
  @Input()endDate:string; 
  @Input()minimumAge:number; 
  @Input()id:number; 
  @Input()title:string; 
  @Input()image:string;
  @Input()duration:number; 
  @Input()director:string; 
  @Input()cast:string; 
  @Input()synopsis:string; 


  constructor(private movieApiService: MovieApiService, private dataService: DataService, public modalRef: BsModalRef ) { 
    
  }

  ngOnInit() {
    this.dayRelease=this.releaseDate[8]+this.releaseDate[9];
    this.monthRelease=this.convertMonthToString(this.releaseDate[5]+this.releaseDate[6]);
    this.yearRelease=this.releaseDate[0]+this.releaseDate[1]+this.releaseDate[2]+this.releaseDate[3];
    this.minimumAgeNew=this.minimumAge;
    this.dayEnd=this.endDate[8]+this.endDate[9];
    this.monthEnd=this.convertMonthToString(this.releaseDate[5]+this.releaseDate[6]);
    this.yearEnd=this.releaseDate[0]+this.releaseDate[1]+this.releaseDate[2]+this.releaseDate[3];

    this.createArrayYears();
    this.createArrayDays();

  }

  setForm(){
    
  }

  editMovie(){
    
    this.releaseDateNew=this.yearRelease+"-"+this.convertMonthToNumber(this.monthRelease)+"-"+this.dayRelease;
    this.endDateNew=this.yearEnd+"-"+this.convertMonthToNumber(this.monthEnd)+"-"+this.dayEnd;

    this.movie.id=this.id;
    this.movie.title=this.title;
    this.movie.image=this.image;
    this.movie.duration=this.duration;
    this.movie.director=this.director;
    this.movie.cast=this.cast;
    this.movie.synopsis=this.synopsis;
    this.movie.releaseDate=this.releaseDateNew;
    this.movie.endDate=this.endDateNew;
    this.movie.minimumAge=this.minimumAgeNew;


    if (this.movie.releaseDate!=this.releaseDate||this.movie.endDate!=this.endDate||this.movie.minimumAge!=this.minimumAge) {
      this.movieApiService.editMovie(this.movie).subscribe(() =>{
        this.dataService.updateMovies();
      });
      console.log(this.movie.releaseDate,this.releaseDate,this.movie.endDate,this.endDate,this.movie.minimumAge,this.minimumAge)
    }
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
  createArrayDays(){
    for (let i = 1; i < 32; i++) {
      if(i<10){
        this.optionsDay.push('0'+i)
      } else {
        this.optionsDay.push(i)
      }
      
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
  convertMonthToString(monthNumber){
    if (monthNumber=="01") {
      monthNumber="January";
    }
    if (monthNumber=="02") {
      monthNumber="February";
    }
    if (monthNumber=="03") {
      monthNumber="March";
    }
    if (monthNumber=="04") {
      monthNumber="April";
    }
    if (monthNumber=="05") {
      monthNumber="May";
    }
    if (monthNumber=="06") {
      monthNumber="June";
    }
    if (monthNumber=="07") {
      monthNumber="July";
    }
    if (monthNumber=="08") {
      monthNumber="August";
    }
    if (monthNumber=="09") {
      monthNumber="September";
    }
    if (monthNumber=="10") {
      monthNumber="October";
    }
    if (monthNumber=="11") {
      monthNumber="November";
    }
    if (monthNumber=="12") {
      monthNumber="December";
    }
    return monthNumber;
  }

}
