import { Component, OnInit, Input } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DataService } from '../../../services';
import { NewRoomModalComponent } from '../new-room-modal/new-room-modal.component';
import { EditRoomModalComponent } from '../edit-room-modal/edit-room-modal.component';
import { RoomsService } from '../../../services/rooms.service';
import { ReplaySubject } from 'rxjs';
import { Cinema } from 'src/app/shared/models/cinema';

@Component({
  selector: 'app-rooms-modal',
  templateUrl: './rooms-modal.component.html',
  styleUrls: ['./rooms-modal.component.css']
})
export class RoomsModalComponent implements OnInit {

  @Input() rooms$;
  @Input() row;
  private subs: any;

  cinema:Cinema;
IntersectionObserverEntryInit
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
        a[i].cinema=JSON.parse(JSON.stringify(a[i].cinema.name));
        a[i].movie=JSON.parse(JSON.stringify(a[i].movie.title));
      }
    });
    this.cinema=this.row;

  }
  // ngOnDestroy() {
  //   this.subs.unsubscribe();
  // }
  addNew() {
    console.log(this.row)
    const initialState = {'cinema': this.cinema};
    this.modalRef = this.modalService.show(NewRoomModalComponent, Object.assign({}, this.config, {class: 'my-modal' , initialState }));
  }
  handleEdit(eventData) {
    const initialState = eventData;
    this.modalRef = this.modalService.show(EditRoomModalComponent, { "initialState": initialState });
  }
  handleDelete(eventData){

    this.roomService.deleteRoom(eventData.id).subscribe(()=>{
      this.dataService.updateRooms(eventData.id);
    });
  }

}