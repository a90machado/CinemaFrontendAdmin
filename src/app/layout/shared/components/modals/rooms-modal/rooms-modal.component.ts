import { Component, OnInit, Input } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DataService } from '../../../services';
import { NewRoomModalComponent } from '../new-room-modal/new-room-modal.component';
import { EditRoomModalComponent } from '../edit-room-modal/edit-room-modal.component';
import { RoomsService } from '../../../services/rooms.service';
import { ReplaySubject } from 'rxjs';
import { Cinema } from 'src/app/shared/models/cinema';
import { Room } from 'src/app/shared/models/room';

@Component({
  selector: 'app-rooms-modal',
  templateUrl: './rooms-modal.component.html',
  styleUrls: ['./rooms-modal.component.css']
})
export class RoomsModalComponent implements OnInit {

  @Input() rooms$;
  @Input() row;
  private subs: any;

  roomsString$= new ReplaySubject<any>(1);

  cinema: Cinema;
  IntersectionObserverEntryInit
  config = {
    animated: true,
    keyboard: true,
    backdrop: true,
    ignoreBackdropClick: false,
    class: 'my-modal'
  };

  constructor(private dataService: DataService, public modalService: BsModalService, public modalRef: BsModalRef, private roomService: RoomsService) {

  }

  ngOnInit() {
    this.subs = this.rooms$.subscribe((a) => {
      // console.log(a);
       let rooms = [];
      for (let i = 0; i < a.length; i++) {
        rooms[i]=JSON.parse(JSON.stringify(a[i]))
        rooms[i].cinema= rooms[i].cinema.name;
        rooms[i].movie= rooms[i].movie.title;
      }
      this.roomsString$.next(rooms);
    });



    this.cinema = this.row;

  }
  // ngOnDestroy() {
  //   this.subs.unsubscribe();
  // }
  addNew() {
    console.log(this.row)
    const initialState = { 'cinema': this.cinema };
    this.modalRef = this.modalService.show(NewRoomModalComponent, Object.assign({}, this.config, { class: 'my-modal', initialState }));
  }
  handleEdit(eventData) {
    const initialState = eventData;
    this.modalRef = this.modalService.show(EditRoomModalComponent, { "initialState": initialState });
  }
  handleDelete(eventData) {

    this.roomService.deleteRoom(eventData.id).subscribe(() => {
      this.dataService.updateRooms(eventData.id);
    });
  }

}