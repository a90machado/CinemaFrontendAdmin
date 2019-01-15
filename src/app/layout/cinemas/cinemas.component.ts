import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { Cinema } from 'src/app/shared/models/cinema';
import { DataService } from '../shared/services';
import { CinemasService } from '../shared/services/cinemas.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NewCinemaModalComponent } from '../shared/components/modals/new-cinema-modal/new-cinema-modal.component';
import { EditCinemaModalComponent } from '../shared/components/modals/edit-cinema-modal/edit-cinema-modal.component';
import { RoomsModalComponent } from '../shared/components/modals/rooms-modal/rooms-modal.component';
import { Room } from 'src/app/shared/models/room';

@Component({
  selector: 'app-cinemas',
  templateUrl: './cinemas.component.html',
  styleUrls: ['./cinemas.component.css']
})
export class CinemasComponent implements OnInit {

  
  public cinemas$: ReplaySubject<Cinema[]>;
  public rooms$: ReplaySubject<Room[]>;
  newRooms=[];
  cinemaName="";
  movieName="";

  cinema: Cinema;
  modalRef: BsModalRef;
 
  config = {
    animated: true,
    keyboard: true,
    backdrop: true,
    ignoreBackdropClick: false,
    class: 'my-modal'
  };


  constructor(private dataService: DataService, private cinemasService: CinemasService, public modalService: BsModalService) {
    this.cinemas$ = this.dataService.cinemas$;
    this.rooms$ = this.dataService.rooms$;

  }

  ngOnInit() {
  }

  handleDelete(eventData) {
    this.cinemasService.deleteCinema(eventData.id).subscribe(() => {
      this.dataService.updateCinemas();
    });
  }
  handleEdit(eventData) {
    const initialState = eventData;
    this.modalRef = this.modalService.show(EditCinemaModalComponent, { "initialState": initialState });
  }

  addNew() {

    this.modalRef = this.modalService.show(NewCinemaModalComponent);
  }
  handleRooms(row){
    this.dataService.updateRooms();

    var initialState = {rooms$:this.rooms$};
    
    this.modalRef = this.modalService.show(RoomsModalComponent, Object.assign({}, this.config, {class: 'my-modal' , initialState }));
  }

}
