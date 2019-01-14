import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
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
  email = '';
  username = '';
  name = '';
  role = '';

  constructor(  public _modalRef: BsModalRef,

                private _accountApi: AccountApi,
                private _dataService: DataService) { }

  ngOnInit() {

  }

  updateUser() {

  }

}
