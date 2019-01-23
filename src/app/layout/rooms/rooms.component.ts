import { Component, OnInit, Input, OnDestroy } from '@angular/core';
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
export class RoomsComponent implements OnInit, OnDestroy {

  private subs: any;
  private subs2: any;
  selectedId:number;
  roomsString$= new ReplaySubject<any>(1);
  rooms$:any;
  cinemas$:any;
  modalRef: BsModalRef;

  cinema: Cinema;
  IntersectionObserverEntryInit
  config = {
    animated: true,
    keyboard: true,
    backdrop: true,
    ignoreBackdropClick: false
  };

  constructor(private dataService: DataService, public modalService: BsModalService,  private roomService: RoomsService, private _router: Router, private route: ActivatedRoute) {

    this.route.paramMap.subscribe(
      params => {
        this.selectedId = +params.get('id');
      }
    );
    console.log(this.selectedId)
    //getting rooms
    this.dataService.updateRooms(this.selectedId);
    this.rooms$=this.dataService.rooms$;

    //getting cinemas
    this.cinemas$=this.dataService.cinemas$;

  }

  ngOnInit() {

    //making a copy of rooms named roomsString to present name of cinema and title of the movie instead of object cinema and movie

    this.subs = this.rooms$.subscribe((a) => {
      console.log('a : ', a);
       let rooms = [];
      for (let i = 0; i < a.length; i++) {
        rooms[i]=JSON.parse(JSON.stringify(a[i]))
        rooms[i].cinema= rooms[i].cinema.name;
        if(rooms[i].movie!=null){
          rooms[i].movie= rooms[i].movie.title;
        }
      }
      this.roomsString$.next(rooms);
    });

    //getting object cinema with selected id
    this.subs2=this.cinemas$.subscribe((a)=>{
      for (let i = 0; i < a.length; i++) {
        if (a[i].id==this.selectedId) {
          this.cinema=a[i];
        }
      }
    })

  }
  ngOnDestroy() {
    this.subs.unsubscribe();
    this.subs2.unsubscribe();
  }

  //showing modal add room, passing object cinema to send with information that user puts in room
  addNew() {
    const initialState = { 'cinema': this.cinema };
    this.modalRef = this.modalService.show(NewRoomModalComponent, Object.assign({}, this.config, { initialState }));
  }

  //showing modal edit room, passing object room to send with information that user puts in room
  handleEdit(eventData) {
    const initialState = eventData;
    this.modalRef = this.modalService.show(EditRoomModalComponent, { "initialState": initialState });
  }

//showing modal delete room, passing object room to delete by id
  handleDelete(eventData) {

    this.roomService.deleteRoom(eventData.id).subscribe(() => {
      console.log(eventData);
      this.dataService.updateRooms(this.cinema.id);
    });
  }


}
