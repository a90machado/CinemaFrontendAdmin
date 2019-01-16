import { Component, OnInit, Input } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { DataService } from '../../../services';
import { Room } from 'src/app/shared/models/room';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { RoomsService } from '../../../services/rooms.service';

@Component({
  selector: 'app-edit-room-modal',
  templateUrl: './edit-room-modal.component.html',
  styleUrls: ['./edit-room-modal.component.css']
})
export class EditRoomModalComponent implements OnInit {
  @Input()numberOfQueues:any;
  @Input()numberOfSeatsPerQueue:any;
  @Input()cinema:any;
  @Input()movie:any;
  @Input()id:number;
  @Input()movieObject:any;
  numberOfQueuesOld:any;
  numberOfSeatsPerQueueOld:any;
  movieOld:any;

  public movies$: ReplaySubject<any>;
  room:Room=new Room();


  constructor(private dataService: DataService,public modalRef: BsModalRef, public roomService: RoomsService) {
    this.movies$ = this.dataService.movies$;

   }

  ngOnInit() {
    this.numberOfQueuesOld=this.numberOfQueues;
    this.numberOfSeatsPerQueueOld= this.numberOfSeatsPerQueue;
    this.movieOld=this.movie;
  }

  editRoom(){
    this.movies$.subscribe((a) => {
      for (let i = 0; i < a.length; i++) {
        if (a[i].title==this.movie) {
          this.movieObject = a[i]
        }
      }
    });

    this.room.id=this.id;
    this.room.cinema=this.cinema;
    this.room.movie=this.movieObject;
    this.room.numberOfQueues=this.numberOfQueues;
    this.room.numberOfSeatsPerQueue=this.numberOfSeatsPerQueue;

    if (this.movieOld!=this.room.movie.title||this.numberOfQueuesOld!=this.room.numberOfQueues||this.numberOfSeatsPerQueueOld!=this.numberOfSeatsPerQueue) {
      this.roomService.editRoom(this.room).subscribe(()=>{
        this.dataService.updateRooms();
        this.modalRef.hide();
      })
      console.log(this.room.cinema);
      console.log("fez pedido")
    }

  }

}
