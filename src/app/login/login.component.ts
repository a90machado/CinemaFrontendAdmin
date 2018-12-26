import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Account, AccessToken, AccountApi } from '../shared/sdk';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  account: Account = new Account();
  menssage = '';

  constructor(  private _accountApi: AccountApi,
                private _router: Router ) { }

  ngOnInit() {
  }

  onLogin() {
        this._accountApi.login(this.account).subscribe((token: AccessToken) => {
          this._router.navigate(['/home']);
      }, err => {
        this.menssage = err;
      }
      );
  }

}
