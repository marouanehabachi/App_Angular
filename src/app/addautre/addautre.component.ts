import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addautre',
  template: `
  <div align="center">
    <br><br><br>
      <p> Veillez saisir le montant  </p>
      <br><br><br> 
      <nav align="center"> 
    <input type="number" placeholder ="XXX &euro;" style="position: absolute; left: 370px; top: 180px;" >
 </nav>
 <nav align="center"> 
    <a routerLink="/add1" routerLinkActive="active" style="position: absolute; left: 420px; top: 210px;" > Valider </a>
 </nav>
    </div>
  `,
  styles: [
  ]
})
export class AddautreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
