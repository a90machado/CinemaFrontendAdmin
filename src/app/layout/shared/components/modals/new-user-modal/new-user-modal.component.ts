import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/';
import { Account, AccountApi } from 'src/app/shared/sdk';
import { DataService } from '../../../services';


@Component({
  selector: 'app-new-user-modal',
  templateUrl: './new-user-modal.component.html',
  styleUrls: ['./new-user-modal.component.css']
})
export class NewUserModalComponent implements OnInit {

  account: Account = new Account();
  message = '';

  constructor(  public _modalRef: BsModalRef,
                private _accountApi: AccountApi,
                private _dataService: DataService ) {
                }

  ngOnInit() {
    this.account.createdAt = new Date;
  }

  private newUser() {
    this._accountApi.create(this.account).subscribe(() => {
      this._modalRef.hide();
      this._dataService.updateAccounts();
  }, err => {
    this.message = err;
  }
  );
  }

}
