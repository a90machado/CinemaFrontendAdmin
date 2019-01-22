import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ContentRoutingModule } from './content-routing.module';
import { ContentComponent } from './content.component';
import { CinemasComponent } from './cinemas/cinemas.component';
import { LandingComponent } from './landing/landing.component';
import { MoviesComponent } from './movies/movies.component';
import { UsersComponent } from './users/users.component';
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
import { UserModalComponent } from './shared/components/modals/user-modal/user-modal.component';
import { NewCinemaModalComponent } from './shared/components/modals/new-cinema-modal/new-cinema-modal.component';
import { EditCinemaModalComponent } from './shared/components/modals/edit-cinema-modal/edit-cinema-modal.component';
import { CreatedAtPipePipe } from './shared/components/modals/user-modal/created-at-pipe.pipe';
import { ConfirmEqualValidatorDirective } from './shared/validators';
import { MainNavComponent } from './shared/components/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatListModule } from '@angular/material';

@NgModule({
  declarations: [
    ContentComponent,
    CinemasComponent,
    LandingComponent,
    MoviesComponent,
    UsersComponent,
    TableComponent,
    NewUserModalComponent,
    EditUserModalComponent,
    NewMovieModalComponent,
    MovieModalComponent,
    EditMovieModalComponent,
    NewMovieModalComponent,
    UserModalComponent,
    NewCinemaModalComponent,
    EditCinemaModalComponent,
    CreatedAtPipePipe,
    ConfirmEqualValidatorDirective,
    MainNavComponent
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
    ContentRoutingModule,
    MatSelectModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule
  ],

  entryComponents: [  NewUserModalComponent,
                      EditUserModalComponent,
                      MovieModalComponent,
                      EditMovieModalComponent,
                      NewMovieModalComponent,
                      NewCinemaModalComponent,
                      EditCinemaModalComponent,
                      UserModalComponent ]
})
export class ContentModule { }
