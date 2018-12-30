import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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


@NgModule({
  declarations: [
    LayoutComponent,
    CinemasComponent,
    LandingComponent,
    MoviesComponent,
    HeaderComponent,
    UsersComponent,
    TableComponent,
    NewUserModalComponent
  ],
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    LayoutRoutingModule
  ],
  entryComponents: [ NewUserModalComponent ]
})
export class LayoutModule { }
