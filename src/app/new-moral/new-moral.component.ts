import { Component, OnDestroy, OnInit } from '@angular/core';
import { StateService } from '../services/state.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Moral } from '../models/Moral.model';
import { StuffMService } from '../services/stuffM.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-new-moral',
  templateUrl: './new-moral.component.html',
  styleUrls: ['./new-moral.component.css']
})

export class NewMoralComponent implements OnInit, OnDestroy {

  public moralForm: FormGroup;
  public loading = false;
  public part: number;
  public userId: string;
  public errorMessage: string;

  private partSub: Subscription;

  constructor(private state: StateService,
              private formBuilder: FormBuilder,
              private stuffMService: StuffMService,
              private router: Router,
              private auth: AuthService) { }

  ngOnInit() {
    this.state.mode$.next('form');
    this.moralForm = this.formBuilder.group({
      entreprise: [null, Validators.required],
      adresse: [null, Validators.required],
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
    const moral = new Moral();
    moral.entreprise = this.moralForm.get('entreprise').value;
    moral.adresse = this.moralForm.get('adresse').value;
    moral.telephone = this.moralForm.get('telephone').value;
    moral.mail = this.moralForm.get('mail').value;
    moral._id = new Date().getTime().toString();
    moral.userId = this.userId;
    this.stuffMService.createNewMoral(moral).then(
      () => {
        this.moralForm.reset();
        this.loading = false;
        switch (this.part) {
          case 1:
          case 2:
            this.router.navigate(['/all-stuffM']);
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
