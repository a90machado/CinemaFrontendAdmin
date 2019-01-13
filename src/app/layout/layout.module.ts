import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { CinemasComponent } from './cinemas/cinemas.component';
import { LandingComponent } from './landing/landing.component';
import { MoviesComponent } from './movies/movies.component';
import { UsersComponent } from './users/users.component';
import { HeaderComponent } from '../shared/components/index';
import { TableComponent } from './shared/components/index';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NewUserModalComponent } from './shared/components/modals/new-user-modal/new-user-modal.component';
import { EditUserModalComponent } from './shared/components/modals/edit-user-modal/edit-user-modal.component';
import {MatIconModule} from '@angular/material/icon';
import { NewMovieModalComponent } from './shared/components/modals/new-movie-modal/new-movie-modal.component';
import { MovieModalComponent } from './shared/components/modals/movie-modal/movie-modal.component';
import { EditMovieModalComponent } from './shared/components/modals/edit-movie-modal/edit-movie-modal.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import {MatSelectModule} from '@angular/material/select';
import { NewCinemaModalComponent } from './shared/components/modals/new-cinema-modal/new-cinema-modal.component';


@NgModule({
  declarations: [
    LayoutComponent,
    CinemasComponent,
    LandingComponent,
    MoviesComponent,
    HeaderComponent,
    UsersComponent,
    TableComponent,
    NewUserModalComponent,
    EditUserModalComponent,
    NewMovieModalComponent,
    MovieModalComponent,
    EditMovieModalComponent,
    NewMovieModalComponent,
    NewCinemaModalComponent
  ],
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    FormsModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    BsDatepickerModule.forRoot(),
    LayoutRoutingModule,
    MatSelectModule
  ],

  entryComponents: [ NewUserModalComponent, EditUserModalComponent, MovieModalComponent, EditMovieModalComponent, NewMovieModalComponent, NewCinemaModalComponent ]
})
export class LayoutModule { }
