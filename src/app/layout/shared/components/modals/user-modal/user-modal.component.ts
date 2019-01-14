import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.css']
})
export class UserModalComponent implements OnInit {

  name = '';
  email = '';
  username = '';
  role = '';

  constructor(  public _modalRef: BsModalRef ) { }

  ngOnInit() {
  }

}
