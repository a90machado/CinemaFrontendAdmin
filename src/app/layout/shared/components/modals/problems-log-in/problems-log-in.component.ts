import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import * as emailjs from 'emailjs-com';

@Component({
  selector: 'app-problems-log-in',
  templateUrl: './problems-log-in.component.html',
  styleUrls: ['./problems-log-in.component.css']
})
export class ProblemsLogInComponent implements OnInit {

  email = {
    reply_to: '',
    from_name: '',
    subject: '',
    message_html: ''
  };

  constructor(public _modalRef: BsModalRef) {
  }

  ngOnInit() {

  }

  emailUs() {

    emailjs.send('gmail', 'template_Usm8sltX', this.email, 'user_D79wQNojPhIDfDrMSz3OI')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      }, (err) => {
        console.log('FAILED...', err);
      });
  }

}
