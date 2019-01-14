import { Component, OnInit, Input } from '@angular/core';
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

  @Input()id: number;
  @Input()email: string;
  @Input()username: string;
  @Input()name: string;
  @Input()role: string;
  @Input()createdAt: Date;

  constructor(  public _modalRef: BsModalRef,

                private _accountApi: AccountApi,
                private _dataService: DataService) { }

  ngOnInit() {

  }

  updateUser() {
    this.account.id = this.id;
    this.account.email = this.email;
    this.account.username = this.username;
    this.account.name = this.name;
    this.account.role = this.role;
    this.account.createdAt = this.createdAt;

    this._accountApi.updateAttributes(this.id, this.account).subscribe(() => {
      this._modalRef.hide();
    }, err => {
      console.log(err);
    });
  }

}
