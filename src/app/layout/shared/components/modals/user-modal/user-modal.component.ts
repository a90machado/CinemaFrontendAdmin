import { Component, OnInit, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.css']
})
export class UserModalComponent implements OnInit {

  @Input()name = '';
  @Input()email = '';
  @Input()username = '';
  @Input()role = '';
  @Input()createdAt;

  constructor(  public _modalRef: BsModalRef ) {

  }

  ngOnInit() {
  }



}
