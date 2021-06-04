import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  template: `
  <nav align="center"> 
  <a routerLink="/add" routerLinkActive="active" > Faire un Don de : </a>
</nav> `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'route-demo';
  public now: Date = new Date();

  constructor() {
    setInterval(() => {
      this.now = new Date();
    }, 1);
  }
}

