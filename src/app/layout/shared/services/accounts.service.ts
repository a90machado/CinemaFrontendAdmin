import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AccountApi, AccessToken } from 'src/app/shared/sdk';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  token: AccessToken;

  constructor(  private _hhtpClient: HttpClient,
                private _accountApi: AccountApi ) {
                  this.token = this._accountApi.getCurrentToken();
                }

  public getAccounts() {
    return this._hhtpClient.get('http://localhost:3000/api/account?access_token=' + this.token);
  }
}
