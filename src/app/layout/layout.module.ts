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
    EditMovieModalComponent
  ],
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    FormsModule,
    MatIconModule,
    LayoutRoutingModule
  ],
  entryComponents: [ NewUserModalComponent, EditUserModalComponent, MovieModalComponent ]
})
export class LayoutModule { }
