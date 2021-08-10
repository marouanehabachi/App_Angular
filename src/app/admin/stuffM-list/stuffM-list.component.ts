import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Moral } from '../../models/Moral.model';
import { StateService } from '../../services/state.service';
import { StuffMService } from '../../services/stuffM.service';

@Component({
  selector: 'app-stuffM-list',
  templateUrl: './stuffM-list.component.html',
  styleUrls: ['./stuffM-list.component.scss']
})
export class StuffMListComponent implements OnInit, OnDestroy {

  public stuffM: Moral[] = [];
  public loading: boolean;

  private stuffSub: Subscription;
  stuffMSub: any;
  stuffService: any;
  

  constructor(private state: StateService,
              private stuffMService: StuffMService,
              private router: Router) { }

  ngOnInit() {
    this.loading = true;
    this.state.mode$.next('list');
    this.stuffMSub = this.stuffMService.stuff$.subscribe(
      (stuffM) => {
        this.stuffM = stuffM;
        this.loading = false;
      }
    );

    this.stuffMService.getStuffM();
  }

  onProductClicked(id: string) {
    
      this.router.navigate(['/admin/moral/' + id]);
  }

  ngOnDestroy() {
    this.stuffMSub.unsubscribe();
  }

}
