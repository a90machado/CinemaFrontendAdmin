import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { AccountsService } from './accounts.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public accounts$: ReplaySubject<any[]> = new ReplaySubject(1);

  constructor( private _accountService: AccountsService ) {
    this.updateAccounts();
  }

  public updateAccounts() {
    this._accountService.getAccounts().subscribe(
      (res: any) => {
        this.accounts$.next(res);
      }
    );
  }
}
