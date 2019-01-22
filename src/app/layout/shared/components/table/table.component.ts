import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../services';
import { NgClass } from '@angular/common';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input()  header: any;
  @Input()  data$: any;
  @Input()  value = false;
  @Input()  theme = 'table-dark';
  @Output() selectedRow: EventEmitter<any> = new EventEmitter<any>();
  @Output() delete: EventEmitter<any> = new EventEmitter<any>();
  @Output() edit: EventEmitter<any> = new EventEmitter<any>();
  public headerRename = [];

 
  @Output() rooms: EventEmitter<any> = new EventEmitter<any>();
  @Output() typeOfTickets: EventEmitter<any> = new EventEmitter<any>();
  
  modalRef: BsModalRef;


  constructor(private dataService: DataService, private modalService: BsModalService,  ) {


  }

  ngOnInit() {
    for (let iterator of this.header) {
      if (iterator === 'createdAt') {
        iterator = 'created at';
      }
      this.headerRename.push(iterator);
    }
  }

  clickedRow(row) {
    this.selectedRow.emit(row);
  }

  clickDelete(row) {
    this.delete.emit(row);
  }
  clickEdit(row) {
    this.edit.emit(row);
  }
  clickSeeRooms(row){
    this.rooms.emit(row);
  }
  clickSeeTickets(row){
    this.typeOfTickets.emit(row);
  }

}
