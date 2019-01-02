import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { DataService } from '../shared/services';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { NewUserModalComponent, EditUserModalComponent } from '../shared/components';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  accounts$: ReplaySubject<Account[]>;
  modalRef: BsModalRef;

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
    console.log(eventData);
    console.log(eventData.name);
    const initialState = eventData;
    this.modalRef = this._modalService.show(EditUserModalComponent, {initialState});
  }

}

