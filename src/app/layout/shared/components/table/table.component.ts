import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../services';

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
  @Input()  inputFunction: Function;
  @Input()  title = '';
  @Output() selectedRow: EventEmitter<any> = new EventEmitter<any>();
  @Output() delete: EventEmitter<any> = new EventEmitter<any>();
  @Output() edit: EventEmitter<any> = new EventEmitter<any>();

  constructor(private dataService: DataService ) {


  }

  ngOnInit() {
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
