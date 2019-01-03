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
  @Input()  value: boolean=false;
  @Input()  theme = 'table-dark';
  @Output() selectedRow: EventEmitter<any> = new EventEmitter<any>();
  @Output() deleteRow: EventEmitter<boolean> = new EventEmitter();


  constructor(private dataService: DataService, ) {
  }

  ngOnInit() {
  }

  clickedRow(row) {
    console.log(this.value)
    this.selectedRow.emit({row:row,value:this.value});
  }
  clickDelete(){
    this.value=true;
  }
  updateMovies(){
    this.dataService.updateMovies();
  }
}
