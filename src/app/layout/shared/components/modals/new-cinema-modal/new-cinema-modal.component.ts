import { Component, OnInit } from '@angular/core';
import { Cinema } from 'src/app/shared/models/cinema';

@Component({
  selector: 'app-new-cinema-modal',
  templateUrl: './new-cinema-modal.component.html',
  styleUrls: ['./new-cinema-modal.component.css']
})
export class NewCinemaModalComponent implements OnInit {

  openHour: String;
  closeHour: String;
  openMinutes: String;
  closeMinutes: String;
  break: String;
  hourOptions= [];
  minutesOptions= [];
  breakOptions= [];
  cinema: Cinema;

  constructor() { }

  ngOnInit() {
    this.createHourOptions();
    this.createMinutesOptions();
    this.createBreakOptions()
  }

  newCinema(){
    this.cinema.timeOpen=(Number(this.openHour)*60)+Number(this.openMinutes);
    this.cinema.timeClose=(Number(this.closeHour)*60)+Number(this.closeMinutes);
    this.cinema.pause=(Number(this.closeHour)*60)+Number(this.closeMinutes);

  }

  createHourOptions(){
  for (let i = 0; i < 24; i++) {
    if (i<10){
      this.hourOptions.push("0"+ String(i));
    }
    else{
      this.hourOptions.push(String(i));
    }
  }
  }
  createMinutesOptions(){
    for (let i = 0; i <= 60; i+5) {
      if (i<10){
        this.minutesOptions.push("0"+ String(i));
      }
      else{
        this.minutesOptions.push(String(i));
      }
    }
    }
    createBreakOptions(){
      for (let i = 0; i <= 45; i+5) {
        if (i<10){
          this.breakOptions.push("0"+ String(i));
        }
        else{
          this.breakOptions.push(String(i));
        }
      }
      }

}
