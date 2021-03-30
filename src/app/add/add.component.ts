import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  template: 
  `
  <br><br><br>
  <p align="center">Veuillez choisir le montant ? </p>
  <br><br><br> 
  <div style="position: absolute; left: 350px; top: 150px;">
   <nav align="center"> 
      <a routerLink="/add1" routerLinkActive="active" > 10 €&nbsp; </a>
   </nav> 
  </div>
  <div style="position: absolute; left: 510px; top: 150px;">
   <nav align="center"> 
      <a routerLink="/add1" routerLinkActive="active" > 20 €&nbsp; </a>
   </nav> 
  </div>
  <div style="position: absolute; left: 350px; top: 220px;">
  <nav align="center"> 
     <a routerLink="/add1" routerLinkActive="active" > 30 €&nbsp; </a>
  </nav> 
 </div>
 <div style="position: absolute; left: 510px; top: 220px;">
  <nav align="center"> 
     <a routerLink="/add1" routerLinkActive="active" > 50 &euro;&nbsp; </a>
  </nav> 
 </div>
 <div style="position: absolute; left: 350px; top: 280px;">
 <nav align="center"> 
    <a routerLink="/add1" routerLinkActive="active" > 100 € </a>
 </nav> 
</div>
<div style="position: absolute; left: 510px; top: 280px;">
 <nav align="center"> 
    <a routerLink="/addaut" routerLinkActive="active" > Autre </a>
 </nav> 
</div>
  `,
  styles: [
  ]
})
export class AddComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
