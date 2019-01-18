import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { DataService } from '../../../services';
import { ReplaySubject } from 'rxjs';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Room } from 'src/app/shared/models/room';
import { RoomsService } from '../../../services/rooms.service';

@Component({
  selector: 'app-new-room-modal',
  templateUrl: './new-room-modal.component.html',
  styleUrls: ['./new-room-modal.component.css']
})
export class NewRoomModalComponent implements OnInit  {
  public movies$: ReplaySubject<any>;
  movieTitle:any;
  movie:any
  nQueues:number;
  nSeats:number;
  @Input()cinema:any;
  room:Room= new Room();
  newBreakString: String;
  newHourString: String;
  newMinutesString: String;
  timeOpenNumber;
  timeCloseNumber;
  pauseNumber;
  cinemaCopy:any;

  constructor(private dataService: DataService,private roomService: RoomsService,public modalRef: BsModalRef) {
    
    //getting movies
    this.movies$ = this.dataService.movies$;

  }

  ngOnInit() {
    //making a copy of cinema because I'm going to change cinema in future to send cinema in format that backend wants and I don't want to change my cinema in frontEnd
    this.cinemaCopy=JSON.parse(JSON.stringify(this.cinema));
    console.log( this.cinemaCopy);
  }
  
  newRoom(){

    //searching movie by title that user puts in ngModel
    this.movies$.subscribe((a) => {
      for (let i = 0; i < a.length; i++) {
        if (a[i].title==this.movieTitle) {
          this.movie = a[i]
        }
      }
    });

    //putting information in the room I want to send/create
    this.room.cinema=this.cinemaCopy;
    this.room.movie=this.movie;
    this.room.numberOfQueues=this.nQueues;
    this.room.numberOfSeatsPerQueue=this.nSeats;

    //converting cinema timeclose, timeopen and pause in number again to send to backend because I convert to string when I receive in dataservices
    this.timeOpenNumber=(Number(this.getHour(this.room.cinema.timeOpen))*60)+(Number(this.getMinutes(this.room.cinema.timeOpen)));
    this.timeCloseNumber=(Number(this.getHour(this.room.cinema.timeClose))*60)+(Number(this.getMinutes(this.room.cinema.timeClose)));
    this.pauseNumber=Number(this.getBreak(this.room.cinema.pause));
    this.room.cinema.timeOpen=this.timeOpenNumber;
    this.room.cinema.timeClose=this.timeCloseNumber;
    this.room.cinema.pause=this.pauseNumber;

    //sending room to backend, updating table and hiding modalRef
    this.roomService.addRoom(this.room).subscribe(() =>{
      this.dataService.updateRooms(this.room.cinema.id);
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
