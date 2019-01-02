import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { AccountsService } from './accounts.service';
import { MovieApiService } from './movie-api.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public accounts$: ReplaySubject<any[]> = new ReplaySubject(1);
  public movies$: ReplaySubject<any []>= new ReplaySubject(1);


  constructor( private _accountService: AccountsService , private movieApi: MovieApiService) {
    this.updateAccounts();
    this.updateMovies();
  }

  public updateAccounts() {
    this._accountService.getAccounts().subscribe(
      (res: any) => {
        this.accounts$.next(res);
      }
    );
  }
  public updateMovies() {
    
    this.movieApi.getMovies().subscribe((res: any) => {

      this.movies$.next(res);
    });
  }
}
