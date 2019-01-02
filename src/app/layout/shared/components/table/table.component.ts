import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input()  header: any;
  @Input()  data$: any;
  @Input()  theme = 'table-dark';
  @Output() selectedRow: EventEmitter<any> = new EventEmitter<any>();

  constructor( ) {
  }

  ngOnInit() {
  }

  clickedRow(row) {
    this.selectedRow.emit(row);
  }

}
