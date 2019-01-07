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
import { NewUserModalComponent, EditUserModalComponent, ProblemsLogInComponent } from './shared/components/';

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
    ProblemsLogInComponent
  ],
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    FormsModule,
    LayoutRoutingModule
  ],
  entryComponents: [ NewUserModalComponent, EditUserModalComponent ]
})
export class LayoutModule { }
