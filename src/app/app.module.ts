import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Add1Component } from './add1/add1.component';
import { AddautreComponent } from './addautre/addautre.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './admin/auth/login/login.component';
import { SignupComponent } from './admin/auth/signup/signup.component';
import { ModifyPhysiqueComponent } from './admin/modify-physique/modify-physique.component';
import { SinglePhysiqueComponent } from './admin/single-physique/single-physique.component';
import { StuffListComponent } from './admin/stuff-list/stuff-list.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthInterceptor } from './interceptors/auth-interceptor';
import { NewPhysiqueComponent } from './new-physique/new-physique.component';
import { PayementComponent } from './payement/payement.component';
import { InformationComponent } from './information/information.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    Add1Component,
    AddautreComponent,
    PayementComponent,
    AdminComponent,
    StuffListComponent,
    NewPhysiqueComponent,
    SinglePhysiqueComponent,
    ModifyPhysiqueComponent,
    LoginComponent,
    SignupComponent,
    InformationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }