import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { AccountsService } from './accounts.service';
import { MovieApiService } from './movie-api.service';
import { DatePipe } from '@angular/common';
import { CinemasService } from './cinemas.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public accounts$: ReplaySubject<any[]> = new ReplaySubject(1);
  public movies$: ReplaySubject<any []>= new ReplaySubject(1);
  public cinemas$: ReplaySubject<any []>= new ReplaySubject(1);


  constructor( private _accountService: AccountsService , private movieApi: MovieApiService, public datepipe: DatePipe, private cinemasService: CinemasService) {
    this.updateAccounts();
    this.updateMovies();
    this.updateCinemas();
  }

  public updateAccounts() {
    this._accountService.getAccounts().subscribe(
      (res: any) => {
        this.accounts$.next(res);
      }
    );
  }
  public updateCinemas() {
    this.cinemasService.getCinemas().subscribe(
      (res: any) => {
        this.cinemas$.next(res);
      }
    );
  }
  
  public updateMovies() {
    this.movieApi.getMovies().subscribe((res: any) => {
      
     
      
      // for (const iterator of res) {
      //   iterator.releaseDate = this.datepipe.transform(iterator.releaseDate, 'yyyy-MM-dd');
      //   iterator.endDate = this.datepipe.transform(iterator.endDate, 'yyyy-MM-dd');
      // }

      this.movies$.next(res);
    });
  }

}
