import { Component, OnInit, Input } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { DataService } from '../../../services';
import { Room } from 'src/app/shared/models/room';
import { BsModalRef } from 'ngx-bootstrap/modal';

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
  public movies$: ReplaySubject<any>;
  room:Room=new Room();


  constructor(private dataService: DataService,public modalRef: BsModalRef) {
    this.movies$ = this.dataService.movies$;

   }

  ngOnInit() {
    // this.movies$.subscribe((a) => {
    //   for (let i = 0; i < a.length; i++) {
    //     if (a[i].title==this.movieTitle) {
    //       this.movie = a[i]
    //     }
    //   }
    // });
  }

  editRoom(){
    this.movies$.subscribe((a) => {
      for (let i = 0; i < a.length; i++) {
        if (a[i].title==this.movie) {
          this.movieObject = a[i]
        }
      }
    });
    console.log(this.movieObject)


    this.room.id=this.id;
    this.room.cinema=this.cinema;
    this.room.movie=this.movie;
    this.room.numberOfQueues=this.numberOfQueues;
    this.room.numberOfSeatsPerQueue=this.numberOfSeatsPerQueue;

    console.log(this.room)

  }

}
