import { Component, OnInit } from '@angular/core';
import { Cinema } from 'src/app/shared/models/cinema';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { CinemasService } from '../../../services/cinemas.service';
import { DataService } from '../../../services';

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
  cinema: Cinema = new Cinema();

  constructor(public modalRef: BsModalRef, public cinemasService: CinemasService, public dataService: DataService) { }

  ngOnInit() {
    this.createHourOptions();
   this.createMinutesOptions();
    this.createBreakOptions();
  }

  newCinema(){
    this.cinema.timeOpen=(Number(this.openHour)*60)+Number(this.openMinutes);
    this.cinema.timeClose=(Number(this.closeHour)*60)+Number(this.closeMinutes);
    this.cinema.pause=Number(this.break);
    console.log(this.cinema.pause);

      this.cinemasService.addCinema(this.cinema).subscribe(() =>{
        this.dataService.updateCinemas();
        this.modalRef.hide();
      });
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
        if (i<10){
          this.breakOptions.push("0"+ String(i));
        }
        else{
          this.breakOptions.push(String(i));
        }
      }
      }

}
