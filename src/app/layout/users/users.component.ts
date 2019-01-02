import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { DataService } from '../shared/services';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { NewUserModalComponent, TableComponent } from '../shared/components';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  accounts$: ReplaySubject<Account[]>;
  modalRef: BsModalRef;

  constructor(  private _dataService: DataService,
                private _modelService: BsModalService,
                private _tableComponent: TableComponent) {
    this.accounts$ = this._dataService.accounts$;
  }

  ngOnInit() {
  }

  updateUsers() {
    this._dataService.updateAccounts();
  }

  addNewUser() {
    this.modalRef = this._modelService.show(NewUserModalComponent);
  }

  deleteUser() {

  }

}
