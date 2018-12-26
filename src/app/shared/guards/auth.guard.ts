import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AccountApi } from '../sdk';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(private _router: Router,
    private _accountApi: AccountApi) {
  }

  canActivate(): boolean {
    if (this._accountApi.isAuthenticated()) {
      return true;
    } else {
      this._router.navigate(['/login']);
      return false;
    }
  }
}
