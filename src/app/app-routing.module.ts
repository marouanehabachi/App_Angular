import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { Add1Component } from './add1/add1.component';
import { InformationComponent } from './information/information.component';
import { AddautreComponent } from './addautre/addautre.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './admin/auth/login/login.component';
import { SignupComponent } from './admin/auth/signup/signup.component';
import { ModifyPhysiqueComponent } from './admin/modify-physique/modify-physique.component';
import { SinglePhysiqueComponent } from './admin/single-physique/single-physique.component';
import { InformationlogComponent } from './admin/informationlog/informationlog.component';
import { StuffListComponent } from './admin/stuff-list/stuff-list.component';
import { NewPhysiqueComponent } from './new-physique/new-physique.component';
import { PayementComponent } from './payement/payement.component';
import { AuthGuard } from './services/auth-guard.service';
import { HomeComponent } from './home/home.component';
import { ActiviteComponent } from './activite/activite.component';
import { FraisComponent } from './frais/frais.component';
import { FondsComponent } from './fonds/fonds.component';
import { FidyaComponent } from './fidya/fidya.component';
import { NewMoralComponent } from './new-moral/new-moral.component';
import { StuffMListComponent } from './admin/stuffM-list/stuffM-list.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'add', component: AddComponent},
  { path: 'add1', component: Add1Component},
  { path: 'frais', component: FraisComponent},
  { path: 'fonds', component: FondsComponent},
  { path: 'fidya', component: FidyaComponent},
  { path: 'addaut', component: AddautreComponent},
  { path: 'activite', component: ActiviteComponent},
  { path: 'information', component: InformationComponent},
  { path: 'payement', component: PayementComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'new-physique', component: NewPhysiqueComponent},
  { path: 'new-moral', component: NewMoralComponent},
  { path: 'all-stuff', component: StuffListComponent, canActivate: [AuthGuard] },
  { path: 'all-stuffM', component: StuffMListComponent, canActivate: [AuthGuard] },
  { path: 'informationlog', component: InformationlogComponent, canActivate: [AuthGuard] },
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
export const routingComponents = [AddComponent, Add1Component, AddautreComponent , InformationComponent, 
PayementComponent, AdminComponent, NewPhysiqueComponent, StuffListComponent,StuffMListComponent, SinglePhysiqueComponent,
ModifyPhysiqueComponent, LoginComponent, SignupComponent,NewMoralComponent, InformationlogComponent, ActiviteComponent, FraisComponent, FondsComponent, FidyaComponent]




