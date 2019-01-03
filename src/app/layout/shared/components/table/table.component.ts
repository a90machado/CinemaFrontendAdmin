import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input()  header: any;
  @Input()  data$: any;
  @Input()  value: boolean=false;
  @Input()  theme = 'table-dark';
  @Output() selectedRow: EventEmitter<any> = new EventEmitter<any>();
  @Output() deleteRow: EventEmitter<boolean> = new EventEmitter();


  constructor( ) {
  }

  ngOnInit() {
  }

  clickedRow(row) {
    this.selectedRow.emit({row:row,value:this.value});
  }
  clickDelete(){
    this.value=true;
  }

}
