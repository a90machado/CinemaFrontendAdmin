import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { CinemasComponent } from './cinemas/cinemas.component';
import { LandingComponent } from './landing/landing.component';
import { MoviesComponent } from './movies/movies.component';
import { UsersComponent } from './users/users.component';
import { HeaderComponent } from '../shared/components/index';
import { DataTableComponent } from '../data-table/data-table.component';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';

@NgModule({
  declarations: [
    LayoutComponent,
    CinemasComponent,
    LandingComponent,
    MoviesComponent,
    HeaderComponent,
    DataTableComponent,
    UsersComponent
  ],
  imports: [
    CommonModule, 
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
