import { Component, OnDestroy, OnInit } from '@angular/core';
import { StateService } from '../services/state.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Physique } from '../models/Physique.model';
import { StuffService } from '../services/stuff.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-new-physique',
  templateUrl: './new-physique.component.html',
  styleUrls: ['./new-physique.component.scss']
})
export class NewPhysiqueComponent implements OnInit, OnDestroy {

  public physiqueForm: FormGroup;
  public loading = false;
  public part: number;
  public userId: string;
  public errorMessage: string;

  private partSub: Subscription;

  constructor(private state: StateService,
              private formBuilder: FormBuilder,
              private stuffService: StuffService,
              private router: Router,
              private auth: AuthService) { }

  ngOnInit() {
    this.state.mode$.next('form');
    this.physiqueForm = this.formBuilder.group({
      nom: [null, Validators.required],
      prenom: [null, Validators.required],
      telephone: [null, Validators.required],
      mail: [null, Validators.required]
    });
    this.partSub = this.state.part$.subscribe(
      (part) => {
        this.part = part;
      }
    );
    this.userId = this.part >= 2 ? this.auth.userId : 'userID40282382';
  }

  onSubmit() {
    this.loading = true;
    const physique = new Physique();
    physique.nom = this.physiqueForm.get('nom').value;
    physique.prenom = this.physiqueForm.get('prenom').value;
    physique.telephone = this.physiqueForm.get('telephone').value;
    physique.mail = this.physiqueForm.get('mail').value;
    physique._id = new Date().getTime().toString();
    physique.userId = this.userId;
    this.stuffService.createNewPhysique(physique).then(
      () => {
        this.physiqueForm.reset();
        this.loading = false;
        switch (this.part) {
          case 1:
          case 2:
            this.router.navigate(['/all-stuff']);
            break;
        }
      }
    ).catch(
      (error) => {
        this.loading = false;
        this.errorMessage = error.message;
      }
    );
  }

  ngOnDestroy() {
    this.partSub.unsubscribe();
  }
}
