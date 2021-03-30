import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add1',
  template: `
    <div align="center">
    <br><br><br>
      <p>Voulez vous un recu ? </p>
      <br><br><br> 
      <nav align="center"> 
    <a routerLink="/add1" routerLinkActive="active" style="position: absolute; left: 370px; top: 180px;" > Oui </a>
 </nav>
 <nav align="center"> 
    <a routerLink="/add1" routerLinkActive="active" style="position: absolute; left: 500px; top: 180px;" > Non </a>
 </nav>
    </div>
  `,
  styles: [
  ]
})
export class Add1Component implements OnInit {
   
  constructor() { }

  ngOnInit(): void {
  }

}
