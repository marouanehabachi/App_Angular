import { AddComponent } from './add/add.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Add1Component } from './add1/add1.component';
import { AddautreComponent } from './addautre/addautre.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'add', component: AddComponent},
  { path: 'add1', component: Add1Component},
  { path: 'addaut', component: AddautreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AddComponent, Add1Component, AddautreComponent]




