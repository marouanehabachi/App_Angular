import { Component, OnDestroy, OnInit } from '@angular/core';
import { StateService } from '../../services/state.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Physique } from '../../models/Physique.model';
import { StuffService } from '../../services/stuff.service';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-single-physique',
  templateUrl: './single-physique.component.html',
  styleUrls: ['./single-physique.component.scss']
})
export class SinglePhysiqueComponent implements OnInit, OnDestroy {

  public physique: Physique;
  public loading: boolean;
  public userId: string;
  public part: number;

  private partSub: Subscription;

  constructor(private state: StateService,
              private router: Router,
              private route: ActivatedRoute,
              private stuffService: StuffService,
              private auth: AuthService) { }

  ngOnInit() {
    this.loading = true;
    this.state.mode$.next('single-physique');
    this.userId = this.auth.userId ? this.auth.userId : 'userID40282382';
    this.route.params.subscribe(
      (params: Params) => {
        this.stuffService.getPhysiqueById(params.id).then(
          (physique: Physique) => {
            this.loading = false;
            this.physique = physique;
          }
        );
      }
    );
    this.partSub = this.state.part$.subscribe(
      (part) => {
        this.part = part;
        if (part >= 2) {
          this.userId = this.auth.userId;
        }
      }
    );
  }

  onGoBack() {
  }

  onModify() {
    switch (this.part) {
      case 1:
      case 2:
        this.router.navigate(['/admin/modify-physique/' + this.physique._id]);
        break;
    }
  }

  onDelete() {
    this.loading = true;
    this.stuffService.deletePhysique(this.physique._id).then(
      () => {
        this.loading = false;
        switch (this.part) {
          case 1:
          case 2:
            this.router.navigate(['/oui/all-stuff']);
            break;
        }
      }
    );
  }

  ngOnDestroy() {
    this.partSub.unsubscribe();
  }
}
