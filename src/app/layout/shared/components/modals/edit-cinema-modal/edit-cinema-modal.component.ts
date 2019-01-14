import { Component, OnInit, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Cinema } from 'src/app/shared/models/cinema';
import { CinemasService } from '../../../services/cinemas.service';
import { DataService } from '../../../services';

@Component({
  selector: 'app-edit-cinema-modal',
  templateUrl: './edit-cinema-modal.component.html',
  styleUrls: ['./edit-cinema-modal.component.css']
})
export class EditCinemaModalComponent implements OnInit {

  @Input()name:string;
  @Input()timeOpen:string;
  @Input()timeClose:string;
  @Input()pause:string;
  @Input()id:number; 
  openHour: String;
  closeHour: String;
  openMinutes: String;
  closeMinutes: String;
  break: String;
  newBreakString: String;
  newHourString: String;
  newMinutesString: String;
  hourOptions= [];
  minutesOptions= [];
  breakOptions= [];
  cinema: Cinema = new Cinema();

  constructor(public modalRef: BsModalRef, private cinemasService: CinemasService, private dataService: DataService) { }

  ngOnInit() {
    this.createHourOptions();
    this.createMinutesOptions();
    this.createBreakOptions();
    this.openHour=this.getHour(this.timeOpen);
    this.openMinutes=this.getMinutes(this.timeOpen);
    this.closeHour=this.getHour(this.timeClose);
    this.closeMinutes=this.getMinutes(this.timeClose);
    this.break=this.getBreak(this.pause);
  }

  editCinema(){
    this.cinema.id=this.id;
    this.cinema.timeOpen=(Number(this.openHour)*60)+Number(this.openMinutes);
    this.cinema.timeClose=(Number(this.closeHour)*60)+Number(this.closeMinutes);
    this.cinema.pause=Number(this.break);
    this.cinema.name=this.name;
    console.log(this.cinema);
    this.cinemasService.editCinema(this.cinema).subscribe(() =>{
      this.dataService.updateCinemas();
      this.modalRef.hide();
    });
  }


  getBreak(breakstring){
    this.newBreakString="";
    for (let i = 0; i < breakstring.length; i++) {
      if (breakstring[i]!=" ") {
        this.newBreakString+=breakstring[i];
      }
      else{
        break;
      }
    }
    return this.newBreakString;
  }

  getHour(stringHour){
    this.newHourString="";
    for (let i = 0; i < stringHour.length; i++) {
      if (stringHour[i]!="H") {
        this.newHourString+=stringHour[i];
      }
      else{
        break;
      }
    }
    return this.newHourString;
  }
  getMinutes(stringHour){
    this.newMinutesString="";
    for (let i = 0; i < stringHour.length; i++) {
      if (stringHour[i]==":") {
        this.newMinutesString=stringHour[i+1]+stringHour[i+2];
      }
      else{
        continue;
      }
    }
    return this.newMinutesString;
  }
  createHourOptions(){
    for (let i = 0; i < 24; i++) {
        this.hourOptions.push(String(i));
         }
    }
    createMinutesOptions(){
      for (let i = 0; i < 60; i=i+5) {
        if (i<10){
          this.minutesOptions.push("0"+ String(i));
        }
        else{
          this.minutesOptions.push(String(i));
        }
      }
      }
    createBreakOptions(){
      for (let i = 10; i <= 55; i=i+5) {
          this.breakOptions.push(String(i));
      }
  
  }
}
