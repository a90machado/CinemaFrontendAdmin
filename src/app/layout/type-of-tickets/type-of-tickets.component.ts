import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../shared/services';

@Component({
  selector: 'app-type-of-tickets',
  templateUrl: './type-of-tickets.component.html',
  styleUrls: ['./type-of-tickets.component.css']
})
export class TypeOfTicketsComponent implements OnInit {

  selectedId:number;
  typeoftickets$:any;


  constructor(private dataService: DataService, private _router: Router, private route: ActivatedRoute) {

    this.route.paramMap.subscribe(
      params => {
        this.selectedId = +params.get('id');
      }
    );

    this.dataService.updateRooms(this.selectedId);
    this.typeoftickets$=this.dataService.typeoftickets$;
   }

  ngOnInit() {
  }

}
