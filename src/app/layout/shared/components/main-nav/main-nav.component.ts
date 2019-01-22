import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AccountApi, Account } from 'src/app/shared/sdk';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
    roleUser = false;
    account: Account;
    message = '';

  constructor(private breakpointObserver: BreakpointObserver,
    private _accountApi: AccountApi,
                private _router: Router) {
    this.checkRoleUser();
  }

  logout() {
    this._accountApi.logout();
    this._router.navigate(['/login']);
  }

  private checkRoleUser() {
    this._accountApi.getCurrent().subscribe((result: any) => {
      this.account = result;
      this.roleUser = (this.account.role === 'Admin') ? true : false;
    });
  }

}
