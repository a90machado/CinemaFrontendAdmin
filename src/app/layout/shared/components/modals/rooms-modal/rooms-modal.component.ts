import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rooms-modal',
  templateUrl: './rooms-modal.component.html',
  styleUrls: ['./rooms-modal.component.css']
})
export class RoomsModalComponent implements OnInit {
  
  @Input()rooms$;
  
  constructor() { }

  ngOnInit() {

  }

}
