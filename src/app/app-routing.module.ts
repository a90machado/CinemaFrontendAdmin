import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { Page404Component } from './page404/page404.component';
import { AuthGuard } from './shared/guards/index';
import { RoomsComponent } from './layout/rooms/rooms.component';

const routes: Routes = [
  { path: '', loadChildren: './layout/layout.module#LayoutModule', canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: '**', component: Page404Component },
  { path: 'roomsTable/:id', component: RoomsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
