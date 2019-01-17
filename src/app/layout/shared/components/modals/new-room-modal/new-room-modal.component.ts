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



  constructor(private dataService: DataService,public modalRef: BsModalRef,private roomService: RoomsService) {   
    this.movies$ = this.dataService.movies$;

  }

  ngOnInit() {
  }
  
  newRoom(){
    this.movies$.subscribe((a) => {
      for (let i = 0; i < a.length; i++) {
        if (a[i].title==this.movieTitle) {
          this.movie = a[i]
        }
      }
    });
    this.room.cinema=this.cinema;
    this.room.movie=this.movie;
    this.room.numberOfQueues=this.nQueues;
    this.room.numberOfSeatsPerQueue=this.nSeats;

    this.timeOpenNumber=(Number(this.getHour(this.room.cinema.timeOpen))*60)+(Number(this.getMinutes(this.room.cinema.timeOpen)));
    this.timeCloseNumber=(Number(this.getHour(this.room.cinema.timeClose))*60)+(Number(this.getMinutes(this.room.cinema.timeClose)));
    this.pauseNumber=Number(this.getBreak(this.room.cinema.pause));
    this.room.cinema.timeOpen=this.timeOpenNumber;
    this.room.cinema.timeClose=this.timeCloseNumber;
    this.room.cinema.pause=this.pauseNumber;
    
    console.log(this.room)
    this.roomService.addRoom(this.room).subscribe(() =>{
      this.dataService.updateRooms(this.room.cinema.id);
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
}
