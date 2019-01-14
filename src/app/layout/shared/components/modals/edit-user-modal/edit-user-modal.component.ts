import { Component, OnInit, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AccountApi, Account } from 'src/app/shared/sdk';
import { DataService } from '../../../services';

@Component({
  selector: 'app-edit-user-modal',
  templateUrl: './edit-user-modal.component.html',
  styleUrls: ['./edit-user-modal.component.css']
})
export class EditUserModalComponent implements OnInit {

  account: Account = new Account();
  message = '';
  roles = ['admin', 'user'];

  @Input()id: number;
  @Input()name = '';
  @Input()role = '';
  @Input()email = '';
  @Input()username= '';

  constructor(  public _modalRef: BsModalRef,
                private _accountApi: AccountApi,
                private _dataService: DataService,
              ) { }

  ngOnInit() {

  }

  resetPassword(){
    this._accountApi.res
  }

  updateUser() {
    this.account.role = this.role;
    this._accountApi.updateAttributes(this.id, this.account).subscribe(() => {
      this._modalRef.hide();
      this._dataService.updateAccounts();
    }, err => {
      console.log(err);
    });
  }

}
