import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../shared/services';
import { Cinema } from 'src/app/shared/models/cinema';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NewTypeofticketsModalComponent } from '../shared/components/modals/new-typeoftickets-modal/new-typeoftickets-modal.component';
import { ReplaySubject } from 'rxjs';
import { EditTypeofticketModalComponent } from '../shared/components/modals/edit-typeofticket-modal/edit-typeofticket-modal.component';
import { TypeOfTicketsService } from '../shared/services/type-of-tickets.service';

@Component({
  selector: 'app-type-of-tickets',
  templateUrl: './type-of-tickets.component.html',
  styleUrls: ['./type-of-tickets.component.css']
})
export class TypeOfTicketsComponent implements OnInit {

  selectedId:number;
  typeoftickets$:any;
  cinemas$:any;
  typeofticketsString$= new ReplaySubject<any>(1);
  private subs: any;
  private subs2: any;
  cinema: Cinema;
  modalRef: BsModalRef;
  config = {
    animated: true,
    keyboard: true,
    backdrop: true,
    ignoreBackdropClick: false,
    class: 'my-modal'
  };


  constructor(private dataService: DataService, public modalService: BsModalService, private _router: Router, private route: ActivatedRoute,private typeOfTicketService: TypeOfTicketsService) {

    this.route.paramMap.subscribe(
      params => {
        this.selectedId = +params.get('id');
      }
    );

    //getting typeoftickets
    this.dataService.updateTypeOfTickets(this.selectedId);
    this.typeoftickets$=this.dataService.typeoftickets$;


    //getting cinemas
    this.cinemas$=this.dataService.cinemas$;
   }

  ngOnInit() {

    //making a copy of typeoftickets named typeofticketsString$ to present name of cinema instead of object cinema and movie
    this.subs = this.typeoftickets$.subscribe((a) => {
    console.log('a : ',a );
    let typeoftickets = [];
      for (let i = 0; i < a.length; i++) {
        typeoftickets[i]=JSON.parse(JSON.stringify(a[i]))
        console.log(a[i])
        typeoftickets[i].cinemaDto= typeoftickets[i].cinemaDto.name;
      }
    this.typeofticketsString$.next(typeoftickets);
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
  }

  // showing modal add ticket, passing object cinema to send with information that user puts in ticket
  addNew() {
    const initialState = { 'cinema': this.cinema };
    this.modalRef = this.modalService.show(NewTypeofticketsModalComponent, Object.assign({}, { initialState }));
  }

  //showing modal edit ticket, passing object ticket to send with information that user puts in ticket
  handleEdit(eventData) {
    const initialState = eventData;
    this.modalRef = this.modalService.show(EditTypeofticketModalComponent, {  initialState });
  }

  //showing modal delete ticket, passing object ticket to delete by id
  handleDelete(eventData) {

    this.typeOfTicketService.deleteTypeOfTicket(eventData.id).subscribe(() => {
      console.log(eventData);
      this.dataService.updateTypeOfTickets(this.cinema.id);
    });
  }



}
