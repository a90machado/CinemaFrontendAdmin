import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { AccountsService } from './accounts.service';
import { MovieApiService } from './movie-api.service';
import { DatePipe } from '@angular/common';
import { CinemasService } from './cinemas.service';
import { RoomsService } from './rooms.service';
import { Room } from 'src/app/shared/models/room';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public accounts$: ReplaySubject<any[]> = new ReplaySubject(1);
  public movies$: ReplaySubject<any []>= new ReplaySubject(1);
  public cinemas$: ReplaySubject<any []>= new ReplaySubject(1);
  public rooms$: ReplaySubject<any []>= new ReplaySubject(1);


  constructor( private _accountService: AccountsService , private movieApi: MovieApiService, public datepipe: DatePipe, private cinemasService: CinemasService,private roomsService: RoomsService) {
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

        for (const iterator of res){
          if (iterator.timeOpen%60==0) {
            iterator.timeOpen = String(iterator.timeOpen/60)+"H:00 min";
          }
          else if (iterator.timeOpen%60>=10){
            iterator.timeOpen = String(Math.trunc(iterator.timeOpen/60))+"H:"+String(iterator.timeOpen%60)+" min";
          }
          else{
            iterator.timeOpen = String(Math.trunc(iterator.timeOpen/60))+"H:"+"0"+String(iterator.timeOpen%60)+" min";
          }
        }

        for (const iterator of res){
          if (iterator.timeClose%60==0) {
            iterator.timeClose = String(iterator.timeClose/60)+"H:00 min";
          }
          else if (iterator.timeClose%60>=10){
            iterator.timeClose = String(Math.trunc(iterator.timeClose/60))+"H:"+String(iterator.timeClose%60)+" min";
          }
          else{
            iterator.timeClose = String(Math.trunc(iterator.timeClose/60))+"H:"+"0"+String(iterator.timeClose%60)+" min";
          }
        }

        for (const iterator of res){
          
          iterator.pause = String(iterator.pause)+ " min";
        }

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

  public updateRooms(id) {
    this.roomsService.getRooms(id).subscribe((res: Room[]) => {

      this.rooms$.next(res);
    });
  }

}
