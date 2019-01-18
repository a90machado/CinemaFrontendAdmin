import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { Page404Component } from './page404/page404.component';
import { DatePipe } from '@angular/common';
import { SDKBrowserModule } from './shared/sdk/index';
import { TableComponent, ProblemsLogInComponent } from './layout/shared/components';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProblemsLogInComponent,
    Page404Component
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    FormsModule,
    ModalModule.forRoot(),
    SDKBrowserModule.forRoot()
  ],
  entryComponents: [ ProblemsLogInComponent ],
  providers: [ TableComponent, DatePipe ],
  bootstrap: [AppComponent]
})
export class AppModule { }
