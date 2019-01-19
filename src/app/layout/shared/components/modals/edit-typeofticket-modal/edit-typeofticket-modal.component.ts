import { Component, OnInit, Input } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { DataService } from '../../../services';
import { TypeOfTicket } from 'src/app/shared/models/typeofticket';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { TypeOfTicketsService } from '../../../services/type-of-tickets.service';

@Component({
  selector: 'app-edit-typeofticket-modal',
  templateUrl: './edit-typeofticket-modal.component.html',
  styleUrls: ['./edit-typeofticket-modal.component.css']
})
export class EditTypeofticketModalComponent implements OnInit {

  @Input()id:number;
  @Input()typeOfTicket:string;
  @Input()priceOfTicket:number;
  @Input()cinemaDto:any;
  cinemaObject:any;
  typeOfTicketOld:string;
  priceOfTicketOld:number;
  cinemaCopy:any;
  newBreakString: String;
  newHourString: String;
  newMinutesString: String;
  timeOpenNumber;
  timeCloseNumber;
  pauseNumber;
  public cinemas$: ReplaySubject<any>;
  typeOfTicketNew: TypeOfTicket= new TypeOfTicket();

  constructor(private dataService: DataService,public modalRef: BsModalRef,private typeOfTicketService: TypeOfTicketsService) {
    this.cinemas$= this.dataService.cinemas$;

   }

  ngOnInit() {
    //making a copy of cinema because I'm going to change cinema in future to send cinema in format that backend wants and I don't want to change my cinema in frontEnd
    this.cinemaCopy=JSON.parse(JSON.stringify(this.cinemaDto));

    //saving original information of room in variables
    this.typeOfTicketOld=this.typeOfTicket;
    this.priceOfTicketOld=this.priceOfTicket;
    console.log(this.cinemaDto)
  }

  editTypeOfTicket(){

    //searching/getting cinema object by title choosed by user
        this.cinemas$.subscribe((a) => {
          for (let i = 0; i < a.length; i++) {
            if (a[i].name==this.cinemaDto) {
              this.cinemaObject = JSON.parse(JSON.stringify(a[i]));
            }
          }
        });

    //putting information in the typeOfTicket I want to edit
    this.typeOfTicketNew.id=this.id;
    this.typeOfTicketNew.cinema=this.cinemaObject;
    this.typeOfTicketNew.priceOfTicket=this.priceOfTicket;
    this.typeOfTicketNew.typeOfTicket=this.typeOfTicket;

    //converting cinema timeclose, timeopen and pause in number again to send to backend because I convert to string when I receive in dataservices
    this.timeOpenNumber=(Number(this.getHour(this.typeOfTicketNew.cinema.timeOpen))*60)+(Number(this.getMinutes(this.typeOfTicketNew.cinema.timeOpen)));
    this.timeCloseNumber=(Number(this.getHour(this.typeOfTicketNew.cinema.timeClose))*60)+(Number(this.getMinutes(this.typeOfTicketNew.cinema.timeClose)));
    this.pauseNumber=Number(this.getBreak(this.typeOfTicketNew.cinema.pause));
    this.typeOfTicketNew.cinema.timeOpen=this.timeOpenNumber;
    this.typeOfTicketNew.cinema.timeClose=this.timeCloseNumber;
    this.typeOfTicketNew.cinema.pause=this.pauseNumber;

    //editing room only if something changed, update table rooms and hide modal
    if (this.typeOfTicketOld!=this.typeOfTicketNew.typeOfTicket||this.priceOfTicketOld!=this.typeOfTicketNew.priceOfTicket) {
        this.typeOfTicketService.editTypeOfTicket(this.typeOfTicketNew).subscribe(()=>{
        this.dataService.updateTypeOfTickets(this.typeOfTicketNew.cinema.id);
        this.modalRef.hide();
        console.log("fez pedido")
      })
    
  }
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
