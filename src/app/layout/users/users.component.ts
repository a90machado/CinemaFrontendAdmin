import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { DataService } from '../shared/services';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { NewUserModalComponent } from '../shared/components';
import { UserModalComponent } from '../shared/components/modals/user-modal/user-modal.component';


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
                private _modalService: BsModalService) {

                  this.accounts$ = this._dataService.accounts$;
  }

  ngOnInit() {
  }

  updateUsers() {
    this._dataService.updateAccounts();
  }

  addNewUser() {
    this.modalRef = this._modalService.show(NewUserModalComponent);
  }

  deleteUser() {

  }

  handleSelectedRow(eventData) {
    const initialState = eventData;
    this.modalRef = this._modalService.show(UserModalComponent, Object.assign({}, this.config, {class: 'details-user' , initialState }));

  }

}

