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
    this.rooms$.subscribe((a)=> {
      a[0].movie = a[0].movie.title;
      a[0].cinema = a[0].cinema.name;
    });

  }

}
