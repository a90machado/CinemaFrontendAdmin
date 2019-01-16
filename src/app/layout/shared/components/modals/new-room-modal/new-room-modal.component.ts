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
    
    this.roomService.addRoom(this.room).subscribe(() =>{
      this.dataService.updateRooms();
      this.modalRef.hide();
    });
  }
}
