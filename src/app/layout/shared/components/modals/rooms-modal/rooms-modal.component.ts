import { Component, OnInit, Input } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-rooms-modal',
  templateUrl: './rooms-modal.component.html',
  styleUrls: ['./rooms-modal.component.css']
})
export class RoomsModalComponent implements OnInit {
@Input() rooms$:ReplaySubject<any>;
  constructor() { }

  ngOnInit() {
    this.rooms$.subscribe((rooms)=>{
      console.log(rooms);
      
    })
  }

}
