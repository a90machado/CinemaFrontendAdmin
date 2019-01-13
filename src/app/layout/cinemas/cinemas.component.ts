import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { Cinema } from 'src/app/shared/models/cinema';
import { DataService } from '../shared/services';
import { CinemasService } from '../shared/services/cinemas.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal/public_api';
import { NewCinemaModalComponent } from '../shared/components/modals/new-cinema-modal/new-cinema-modal.component';

@Component({
  selector: 'app-cinemas',
  templateUrl: './cinemas.component.html',
  styleUrls: ['./cinemas.component.css']
})
export class CinemasComponent implements OnInit {
  
  public cinemas$: ReplaySubject<Cinema[]>;
  cinema: Cinema;

  constructor(private dataService: DataService, private cinemasService: CinemasService, private modalRef: BsModalRef, private modalService: BsModalService) {
    this.cinemas$=this.dataService.cinemas$;
    
   }

  ngOnInit() {
  }
  handleDelete(eventData){
    this.cinemasService.deleteCinema(eventData.id).subscribe(() =>{
      this.dataService.updateCinemas();
    });
}
addNew(){
  this.modalRef = this.modalService.show(NewCinemaModalComponent);
}

}
