import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StateService } from '../../services/state.service';
import { StuffService } from '../../services/stuff.service';
import { Physique } from '../../models/Physique.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-modify-physique',
  templateUrl: './modify-physique.component.html',
  styleUrls: ['./modify-physique.component.scss']
})
export class ModifyPhysiqueComponent implements OnInit {

  physique: Physique;
  physiqueForm: FormGroup;
  loading = false;
  errorMessage: string;
  part: number;

  private partSub: Subscription;

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private state: StateService,
              private stuffService: StuffService) { }

  ngOnInit() {
    this.loading = true;
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
    this.state.mode$.next('form');
    this.route.params.subscribe(
      (params) => {
        this.stuffService.getPhysiqueById(params.id).then(
          (physique: Physique) => {
            this.physique = physique;
            this.physiqueForm.get('nom').setValue(this.physique.nom);
            this.physiqueForm.get('prenom').setValue(this.physique.prenom);
            this.physiqueForm.get('telephone').setValue(this.physique.telephone);
            this.physiqueForm.get('mail').setValue(this.physique.mail);
            this.loading = false;
          }
        );
      }
    );
  }

  onSubmit() {
    this.loading = true;
    const physique = new Physique();
    physique.nom = this.physiqueForm.get('nom').value;
    physique.prenom = this.physiqueForm.get('prenom').value;
    physique.telephone = this.physiqueForm.get('telephone').value;
    physique.mail = this.physiqueForm.get('mail').value;
    physique._id = new Date().getTime().toString();
    physique.userId = this.physique.userId;
    this.stuffService.modifyPhysique(this.physique._id, physique).then(
      () => {
        this.physiqueForm.reset();
        this.loading = false;
        switch (this.part) {
          case 1:
          case 2:
            this.router.navigate(['/admin/all-stuff']);
            break;
        }
      },
      (error) => {
        this.loading = false;
        this.errorMessage = error.message;
      }
    );
  }
}
