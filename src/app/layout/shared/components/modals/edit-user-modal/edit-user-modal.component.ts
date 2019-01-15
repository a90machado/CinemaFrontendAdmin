import { Component, OnInit, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AccountApi, Account } from 'src/app/shared/sdk';
import { DataService } from '../../../services';
import * as emailjs from 'emailjs-com';

@Component({
  selector: 'app-edit-user-modal',
  templateUrl: './edit-user-modal.component.html',
  styleUrls: ['./edit-user-modal.component.css']
})
export class EditUserModalComponent implements OnInit {

  account: Account = new Account();
  message = '';
  roles = ['Admin', 'User'];

  emailResetPassword = {
    name: '',
    email: '',
    password: ''
  };

  @Input()id: number;
  @Input()name = '';
  @Input()role = '';
  @Input()email = '';
  @Input()username = '';
  @Input()password = '';

  constructor(  public _modalRef: BsModalRef,
                private _accountApi: AccountApi,
                private _dataService: DataService,
              ) { }

  ngOnInit() {

  }

  resetPassword() {
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

  resetPwd() {
    // Generate a random password
    // Make update and on sucess send email
    this.account.password = this.generatePassword(8);

    this._accountApi.updateAttributes(this.id, this.account).subscribe((account) => {
      this._dataService.updateAccounts();
      // Create email
      this.emailResetPassword.name = account.name;
      this.emailResetPassword.email = account.email;
      this.emailResetPassword.password = this.account.password;
      // Send
      emailjs.send('gmail', 'reset_password', this.emailResetPassword, 'user_D79wQNojPhIDfDrMSz3OI')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      }, (err) => {
        console.log('FAILED...', err);
      });
    }, err => {
      console.log(err);
    });

  }

  private generatePassword(n) {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let index = 0; index < n; index++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

}
