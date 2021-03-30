import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule , routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { Add1Component } from './add1/add1.component';
import { AddautreComponent } from './addautre/addautre.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    Add1Component,
    AddautreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
