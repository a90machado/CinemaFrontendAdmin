import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { LandingComponent } from './landing/landing.component';
import { CinemasComponent } from './cinemas/cinemas.component';
import { MoviesComponent } from './movies/movies.component';
import { UsersComponent } from './users/users.component';
import { UserRoleGuard } from '../shared/guards/index';
import { RoomsComponent } from './rooms/rooms.component';

const routes: Routes = [
  {path: '', component: LayoutComponent, children: [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: LandingComponent},
    {path: 'cinemas', component: CinemasComponent},
    {path: 'movies', component: MoviesComponent},
    { path: 'roomsTable/:id', component: RoomsComponent},
    {path: 'manage/users', component: UsersComponent, canActivate: [UserRoleGuard]}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
