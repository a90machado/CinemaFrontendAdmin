import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AccountApi } from '../sdk';


@Injectable({
  providedIn: 'root'
})
export class UserRoleGuard implements CanActivate {

  roleUser: boolean;

  constructor(private _router: Router,
              private _accountApi: AccountApi) { }

  canActivate() {

    this._accountApi.getCurrent().subscribe((result: any) => {
      this.roleUser = (result.role === 'Admin') ? true : false;
    });

    if (this.roleUser) {
      return true;
    } else {
      this._router.navigate(['/home']);
      return false;
    }
  }
}
