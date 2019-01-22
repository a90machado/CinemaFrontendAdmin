import { Component, OnInit, Input } from '@angular/core';
import { TypeOfTicket } from 'src/app/shared/models/typeofticket';
import { TypeOfTicketsService } from '../../../services/type-of-tickets.service';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { DataService } from '../../../services';

@Component({
  selector: 'app-new-typeoftickets-modal',
  templateUrl: './new-typeoftickets-modal.component.html',
  styleUrls: ['./new-typeoftickets-modal.component.css']
})
export class NewTypeofticketsModalComponent implements OnInit {

  typeOfTicket='';
  priceOfTicket:number;
  @Input()cinema:any;
  cinemaCopy:any;
  createTypeOfTicket:TypeOfTicket= new TypeOfTicket();
  newBreakString: String;
  newHourString: String;
  newMinutesString: String;
  timeOpenNumber;
  timeCloseNumber;
  pauseNumber;


  constructor(private typeOfTicketService: TypeOfTicketsService,public modalRef: BsModalRef, private dataService: DataService) { }

  ngOnInit() {

    //making a copy of cinema because I'm going to change cinema in future to send cinema in format that backend wants and I don't want to change my cinema in frontEnd
    this.cinemaCopy=JSON.parse(JSON.stringify(this.cinema));
  }

  newTypeOfTicket(){
    console.log(this.typeOfTicket)
    this.createTypeOfTicket.typeOfTicket=this.typeOfTicket;
    this.createTypeOfTicket.priceOfTicket=this.priceOfTicket;
    this.createTypeOfTicket.cinema=this.cinemaCopy;

    //converting cinema timeclose, timeopen and pause in number again to send to backend because I convert to string when I receive in dataservices
    this.timeOpenNumber=(Number(this.getHour(this.createTypeOfTicket.cinema.timeOpen))*60)+(Number(this.getMinutes(this.createTypeOfTicket.cinema.timeOpen)));
    this.timeCloseNumber=(Number(this.getHour(this.createTypeOfTicket.cinema.timeClose))*60)+(Number(this.getMinutes(this.createTypeOfTicket.cinema.timeClose)));
    this.pauseNumber=Number(this.getBreak(this.createTypeOfTicket.cinema.pause));

    this.createTypeOfTicket.cinema.timeOpen=this.timeOpenNumber;
    this.createTypeOfTicket.cinema.timeClose=this.timeCloseNumber;
    this.createTypeOfTicket.cinema.pause=this.pauseNumber;

    console.log(this.createTypeOfTicket)

     //sending typeOfTicket to backend, updating table and hiding modalRef
     this.typeOfTicketService.addTypeOfTicket(this.createTypeOfTicket).subscribe(() =>{
      this.dataService.updateTypeOfTickets(this.createTypeOfTicket.cinema.id);
      this.modalRef.hide();
    });
  }

   //method to take " min" to get pause
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

  //method to take "H:.." of hour, to get hours
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

  //method to take "..H:" of minutes, to get minutes
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

}
