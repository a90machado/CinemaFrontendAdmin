import { Component, OnInit } from '@angular/core';
import { AccountApi, Account, AccessToken } from '../../sdk';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  roleUser = false;
  account: Account;
  message = '';

  constructor(  private _accountApi: AccountApi,
                private _router: Router) { }

  ngOnInit() {
    this.checkRoleUser();
  }

  logout() {
    this._accountApi.logout();
    this._router.navigate(['/login']);
  }

  private checkRoleUser() {
    this._accountApi.getCurrent().subscribe((result: any) => {
      this.account = result;
      this.roleUser = (this.account.role === 'Admin') ? true : false;
    });
  }

}
