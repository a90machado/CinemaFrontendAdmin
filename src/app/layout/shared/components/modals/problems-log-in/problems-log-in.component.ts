import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-problems-log-in',
  templateUrl: './problems-log-in.component.html',
  styleUrls: ['./problems-log-in.component.css']
})
export class ProblemsLogInComponent implements OnInit {

  email = {
    email: String,
    name: String,
    subject: String,
    message: String
  };

  constructor( public _modalRef: BsModalRef ) { }

  ngOnInit() {
  }

  emailUs() {

  }

}
