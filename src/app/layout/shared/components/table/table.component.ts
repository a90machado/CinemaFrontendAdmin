import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../services';
import { NgClass } from '@angular/common';

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

  constructor(  private dataService: DataService ) {


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

}
