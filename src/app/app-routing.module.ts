import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { Add1Component } from './add1/add1.component';
import { AddautreComponent } from './addautre/addautre.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './admin/auth/login/login.component';
import { SignupComponent } from './admin/auth/signup/signup.component';
import { ModifyPhysiqueComponent } from './admin/modify-physique/modify-physique.component';
import { SinglePhysiqueComponent } from './admin/single-physique/single-physique.component';
import { StuffListComponent } from './admin/stuff-list/stuff-list.component';
import { NewPhysiqueComponent } from './new-physique/new-physique.component';
import { PayementComponent } from './payement/payement.component';
import { AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  { path: 'add', component: AddComponent},
  { path: 'add1', component: Add1Component},
  { path: 'addaut', component: AddautreComponent},
  { path: 'payement', component: PayementComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'new-physique', component: NewPhysiqueComponent},
  { path: 'all-stuff', component: StuffListComponent, canActivate: [AuthGuard] },
  { path: 'physique/:id', component: SinglePhysiqueComponent, canActivate: [AuthGuard] },
  { path: 'modify-physique/:id', component: ModifyPhysiqueComponent, canActivate: [AuthGuard] },
  { path: 'auth/login', component: LoginComponent },
  { path: 'auth/signup', component: SignupComponent },
  { path: '', pathMatch: 'full', redirectTo: '/' },
  { path: '**', redirectTo: 'all-stuff' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
export const routingComponents = [AddComponent, Add1Component, AddautreComponent , 
PayementComponent, AdminComponent, NewPhysiqueComponent, StuffListComponent, SinglePhysiqueComponent,
ModifyPhysiqueComponent, LoginComponent, SignupComponent]




