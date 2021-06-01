import { Component, OnDestroy, OnInit } from '@angular/core';
import { StateService } from '../../services/state.service';
import { StuffService } from '../../services/stuff.service';
import { Subscription } from 'rxjs';
import { Physique } from '../../models/Physique.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stuff-list',
  templateUrl: './stuff-list.component.html',
  styleUrls: ['./stuff-list.component.scss']
})
export class StuffListComponent implements OnInit, OnDestroy {

  public stuff: Physique[] = [];
  public loading: boolean;

  private stuffSub: Subscription;
  

  constructor(private state: StateService,
              private stuffService: StuffService,
              private router: Router) { }

  ngOnInit() {
    this.loading = true;
    this.state.mode$.next('list');
    this.stuffSub = this.stuffService.stuff$.subscribe(
      (stuff) => {
        this.stuff = stuff;
        this.loading = false;
      }
    );

    this.stuffService.getStuff();
  }

  onProductClicked(id: string) {
    
      this.router.navigate(['/admin/physique/' + id]);
  }

  ngOnDestroy() {
    this.stuffSub.unsubscribe();
  }

}
