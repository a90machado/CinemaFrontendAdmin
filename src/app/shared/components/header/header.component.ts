import { Component, OnInit } from '@angular/core';
import { AccountApi } from '../../sdk';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private _accountApi: AccountApi,
              private _router: Router) { }

  ngOnInit() {
  }

  logout() {
    this._accountApi.logout();
    this._router.navigate(['/login']);
  }

}
