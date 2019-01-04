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
import { TableComponent } from './layout/shared/components';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    FormsModule,
    SDKBrowserModule.forRoot(),
  ],
  providers: [ TableComponent, DatePipe ],
  bootstrap: [AppComponent]
})
export class AppModule { }
