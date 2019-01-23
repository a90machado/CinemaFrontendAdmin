import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { DataService } from '../shared/services';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { NewUserModalComponent, EditUserModalComponent } from '../shared/components';
import { UserModalComponent } from '../shared/components/modals/user-modal/user-modal.component';
import { AccountApi } from 'src/app/shared/sdk';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  accounts$: ReplaySubject<Account[]>;
  modalRef: BsModalRef;

  config = {
    animated: true,
    keyboard: true,
    backdrop: true,
    ignoreBackdropClick: false
  };

  constructor(  private _dataService: DataService,
                private _accountApi: AccountApi,
                private _modalService: BsModalService) {

                this.accounts$ = this._dataService.accounts$;
  }

  ngOnInit() {
  }

  updateUsers() {
    this._dataService.updateAccounts();
  }

  addNewUser() {
    this.modalRef = this._modalService.show(NewUserModalComponent, Object.assign({}, this.config, {class: 'edit-user'}));
  }

  handleSelectedRow(eventData) {
    const initialState = eventData;
    this.modalRef = this._modalService.show(UserModalComponent, Object.assign({}, this.config, {class: 'details-user' , initialState }));
  }

  handleEdit(eventData) {
    const initialState = eventData;
    this.modalRef = this._modalService.show(EditUserModalComponent, Object.assign({}, this.config, {class: 'edit-user' , initialState }));
  }

  handleDelete(eventData) {
    const id = eventData.id;
    this._accountApi.deleteById(id).subscribe(() => {
      this._dataService.updateAccounts();
    }, err => {
      console.log(err);
    });
  }

}

