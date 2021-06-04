import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule , routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { Add1Component } from './add1/add1.component';
import { AddautreComponent } from './addautre/addautre.component';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    Add1Component,
    AddautreComponent,
    HomeComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
