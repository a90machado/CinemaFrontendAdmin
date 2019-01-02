import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input()  header: any;
  @Input()  data$: any;
  @Input()  theme = 'table-dark';
  selectedRow: Number;

  constructor( ) {
  }

  ngOnInit() {
  }

  clickedRow(index) {
    this.selectedRow = index;
    console.log(this.selectedRow);
  }

}
