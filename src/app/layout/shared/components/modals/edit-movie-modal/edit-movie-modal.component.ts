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
  years = [];
  currentYear: number;
  releaseDateNew="";
  endDateNew="";
  minimumAgeNew: number;

  constructor( private movieApiService: MovieApiService, private dataService: DataService, public modalRef: BsModalRef ) { 
    this.createArrayYears()
  }

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

  editMovie(id,title,image,minimumAge,duration,releaseDate,endDate,director,cast,synopsis){
    if (this.monthRelease=="January") {
      this.monthRelease="01";
    }
    else if (this.monthRelease=="February") {
      this.monthRelease="02";
    }
    else if (this.monthRelease=="March") {
      this.monthRelease="03";
    }
    else if (this.monthRelease=="April") {
      this.monthRelease="04";
    }
    else if (this.monthRelease=="May") {
      this.monthRelease="05";
    }
    else if (this.monthRelease=="June") {
      this.monthRelease="06";
    }
    else if (this.monthRelease=="July") {
      this.monthRelease="07";
    }
    else if (this.monthRelease=="August") {
      this.monthRelease="08";
    }
    else if (this.monthRelease=="September") {
      this.monthRelease="09";
    }
    else if (this.monthRelease=="October") {
      this.monthRelease="10";
    }
    else if (this.monthRelease=="November") {
      this.monthRelease="11";
    }
    else if (this.monthRelease=="December") {
      this.monthRelease="12";
    }
    else{
      this.monthRelease=releaseDate[5]+releaseDate[6];
    }
    if (this.monthEnd=="January") {
      this.monthEnd="01";
    }
    else if (this.monthEnd=="February") {
      this.monthEnd="02";
    }
    else if (this.monthEnd=="March") {
      this.monthEnd="03";
    }
    else if (this.monthEnd=="April") {
      this.monthEnd="04";
    }
    else if (this.monthEnd=="May") {
      this.monthEnd="05";
    }
    else if (this.monthEnd=="June") {
      this.monthEnd="06";
    }
    else if (this.monthEnd=="July") {
      this.monthEnd="07";
    }
    else if (this.monthEnd=="August") {
      this.monthEnd="08";
    }
    else if (this.monthEnd=="September") {
      this.monthEnd="09";
    }
    else if (this.monthEnd=="October") {
      this.monthEnd="10";
    }
    else if (this.monthEnd=="November") {
      this.monthEnd="11";
    }
    else if (this.monthEnd=="December") {
      this.monthEnd="12";
    }
    else{
      this.monthEnd=endDate[5]+endDate[6];
    }

    if (this.yearRelease=="") {
      this.yearRelease=endDate[0]+endDate[1]+endDate[2]+endDate[3];
    }
    if (this.dayRelease=="") {
      this.dayRelease=endDate[8]+endDate[9];
    }
    if (this.yearEnd=="") {
      this.yearEnd=endDate[0]+endDate[1]+endDate[2]+endDate[3];
    }
    if (this.dayEnd=="") {
      this.dayEnd=endDate[8]+endDate[9];
    }
    if (this.minimumAgeNew==undefined){
      this.minimumAgeNew=minimumAge;
    }

    this.releaseDateNew=this.yearRelease+"-"+this.monthRelease+"-"+this.dayRelease;
    this.endDateNew=this.yearEnd+"-"+this.monthEnd+"-"+this.dayEnd;

    this.movie.id=id;
    this.movie.title=title;
    this.movie.image=image;
    this.movie.duration=duration;
    this.movie.director=director;
    this.movie.cast=cast;
    this.movie.synopsis=synopsis;
    this.movie.releaseDate=this.releaseDateNew+"T00:00:00Z[UTC]";
    this.movie.endDate=this.endDateNew+"T00:00:00Z[UTC]";
    this.movie.minimumAge=this.minimumAgeNew;


    if (this.movie.releaseDate!=releaseDate||this.movie.endDate!=endDate||this.movie.minimumAge!=minimumAge) {
      this.movieApiService.editMovie(this.movie).subscribe(() =>{
        this.dataService.updateMovies();
      });
      console.log(this.movie.releaseDate,releaseDate,this.movie.endDate,endDate,this.movie.minimumAge,minimumAge)
    }
  }
}
