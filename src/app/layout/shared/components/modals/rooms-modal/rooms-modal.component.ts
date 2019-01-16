import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DataService } from '../../../services';
import { NewRoomModalComponent } from '../new-room-modal/new-room-modal.component';
import { EditRoomModalComponent } from '../edit-room-modal/edit-room-modal.component';
import { RoomsService } from '../../../services/rooms.service';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-rooms-modal',
  templateUrl: './rooms-modal.component.html',
  styleUrls: ['./rooms-modal.component.css']
})
export class RoomsModalComponent implements OnInit, OnDestroy {

  @Input() rooms$;
  cinema: any;
  private subs: any;


  config = {
    animated: true,
    keyboard: true,
    backdrop: true,
    ignoreBackdropClick: false,
    class: 'my-modal'
  };

  constructor(private dataService: DataService, public modalService: BsModalService,public modalRef: BsModalRef, private roomService: RoomsService) { 


  }

  ngOnInit() {
    this.subs = this.rooms$.subscribe((a) => {
      for (let i = 0; i < a.length; i++) {
        this.cinema = a[i].cinema
        a[i].movie = a[i].movie.title;
        a[i].cinema = a[i].cinema.name;
      }
    });

  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
  addNew() {
    // console.log(this.cinema);
    const initialState = {'cinema': this.cinema};
    this.modalRef = this.modalService.show(NewRoomModalComponent, Object.assign({}, this.config, {class: 'my-modal' , initialState }));
  }
  handleEdit(eventData) {
    const initialState = eventData;
    this.modalRef = this.modalService.show(EditRoomModalComponent, { "initialState": initialState });
  }
  handleDelete(eventData){

    this.roomService.deleteRoom(eventData.id).subscribe(()=>{
      this.dataService.updateRooms();
    });
  }

}