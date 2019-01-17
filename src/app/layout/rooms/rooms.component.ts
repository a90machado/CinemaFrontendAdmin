import { Component, OnInit, Input } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ReplaySubject } from 'rxjs';
import { Cinema } from 'src/app/shared/models/cinema';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../shared/services';
import { RoomsService } from '../shared/services/rooms.service';
import { NewRoomModalComponent } from '../shared/components/modals/new-room-modal/new-room-modal.component';
import { EditRoomModalComponent } from '../shared/components/modals/edit-room-modal/edit-room-modal.component';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  @Input() rooms$;
  @Input() row;
  private subs: any;
  selectedId:number;
  roomsString$= new ReplaySubject<any>(1);
  //public rooms$: ReplaySubject<any>;

  cinema: Cinema;
  IntersectionObserverEntryInit
  config = {
    animated: true,
    keyboard: true,
    backdrop: true,
    ignoreBackdropClick: false,
    class: 'my-modal'
  };

  constructor(private dataService: DataService, public modalService: BsModalService, public modalRef: BsModalRef, private roomService: RoomsService, private _router: Router, private route: ActivatedRoute) {

    this.route.paramMap.subscribe(
      params => {
        this.selectedId = +params.get('id');

      }
    );
    //this.rooms$ =this.dataService.updateRooms(this.selectedId);
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
