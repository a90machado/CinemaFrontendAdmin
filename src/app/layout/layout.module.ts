import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { CinemasComponent } from './cinemas/cinemas.component';
import { LandingComponent } from './landing/landing.component';
import { MoviesComponent } from './movies/movies.component';
import { UsersComponent } from './users/users.component';
import { HeaderComponent } from './_shared/_components/header/header.component';

@NgModule({
  declarations: [LayoutComponent, CinemasComponent, LandingComponent, MoviesComponent, UsersComponent, HeaderComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
