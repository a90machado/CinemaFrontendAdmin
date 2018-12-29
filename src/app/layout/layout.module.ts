import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { CinemasComponent } from './cinemas/cinemas.component';
import { LandingComponent } from './landing/landing.component';
import { MoviesComponent } from './movies/movies.component';
import { UsersComponent } from './users/users.component';
import { HeaderComponent } from '../shared/components/index';
import { MatTableModule, MatPaginatorModule, MatSortModule, MatFormFieldModule,MatInputModule } from '@angular/material';
import { TablesComponent } from './shared/components/tables/tables.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LayoutComponent,
    CinemasComponent,
    LandingComponent,
    MoviesComponent,
    HeaderComponent,
    UsersComponent,
    TablesComponent
  ],
  imports: [
    CommonModule, 
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSortModule,
    MatInputModule,
    FormsModule,
    LayoutRoutingModule,
  ]
})
export class LayoutModule { }
