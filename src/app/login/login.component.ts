import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';

import { Account, AccessToken, AccountApi } from '../shared/sdk';
import { ProblemsLogInComponent } from '../layout/shared/components';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  account: Account = new Account();
  clicked = false;
  toggleViewPWD = 'password';
  message = '';
  modalRef: BsModalRef;

  constructor(private _accountApi: AccountApi,
              private _router: Router,
              private _modalService: BsModalService
              ) { }

  ngOnInit() {
  }

  onLogin() {
    this._accountApi.login(this.account).subscribe((token: AccessToken) => {
      this._router.navigate(['/home']);
    }, err => {
      if (err.statusCode === 400) {
        this.message = 'Username or email is required.';
      } else if (err.statusCode === 401) {
        this.message = 'Username or password do not match.';
      }
    }
    );
  }

  viewPWD() {
    this.clicked = !this.clicked; 
    if (this.toggleViewPWD === 'password') {
      this.toggleViewPWD = 'text';
    } else {
      this.toggleViewPWD = 'password';
    }
  }

  problems() {
    this._modalService.config.class = 'modal-lg';
    this.modalRef = this._modalService.show(ProblemsLogInComponent, {
      animated: false
    });
  }

}
