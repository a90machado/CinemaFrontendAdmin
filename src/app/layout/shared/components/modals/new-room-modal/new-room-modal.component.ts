import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { DataService } from '../../../services';
import { ReplaySubject } from 'rxjs';
import { Cinema } from 'src/app/shared/models/cinema';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-new-room-modal',
  templateUrl: './new-room-modal.component.html',
  styleUrls: ['./new-room-modal.component.css']
})
export class NewRoomModalComponent implements OnInit  {
  public movies$: ReplaySubject<any>;
  movieTitle:any;
  movie:any
  nQueues:number;
  nSeats:number;
  @Input()cinema:any;



  constructor(private dataService: DataService,public modalRef: BsModalRef) {   
    this.movies$ = this.dataService.movies$;

  }

  ngOnInit() {
  }
  
  newRoom(){
    this.movies$.subscribe((a) => {
      for (let i = 0; i < a.length; i++) {
        if (a[i].title==this.movieTitle) {
          this.movie = a[i]
        }
      }
    });
    console.log(this.cinema,this.movie,this.nQueues,this.nSeats)
  }
}
