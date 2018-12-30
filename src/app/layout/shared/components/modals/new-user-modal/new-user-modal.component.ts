import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/';

@Component({
  selector: 'app-new-user-modal',
  templateUrl: './new-user-modal.component.html',
  styleUrls: ['./new-user-modal.component.css']
})
export class NewUserModalComponent implements OnInit {

  constructor( public _modalRef: BsModalRef ) { }

  ngOnInit() {
  }

}
