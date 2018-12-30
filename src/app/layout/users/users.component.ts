import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { AccountsService, DataService } from '../shared/services';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  accounts$: ReplaySubject<Account[]>;

  constructor( private _dataService: DataService ) {
    this.accounts$ = this._dataService.accounts$;
  }

  ngOnInit() {
  }

  updateUsers() {
    this._dataService.updateAccounts();
  }

  addNewUser() {
  }

}
