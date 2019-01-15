import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { DataService } from '../../../services';
import { ReplaySubject } from 'rxjs';
import { Cinema } from 'src/app/shared/models/cinema';

@Component({
  selector: 'app-new-room-modal',
  templateUrl: './new-room-modal.component.html',
  styleUrls: ['./new-room-modal.component.css']
})
export class NewRoomModalComponent implements OnInit  {
  public movies$: ReplaySubject<any>;
  movie:any;
  nQueues:number;
  nSeats:number;
  @Input()cinema:any;


  constructor(private dataService: DataService) {   
    this.movies$ = this.dataService.movies$;

  }

  ngOnInit() {
  }
  
  newRoom(){
    console.log(this.cinema)
  }
}
