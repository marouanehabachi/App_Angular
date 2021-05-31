import { Component } from '@angular/core';
import firebase from "firebase/app";
import "firebase/firestore";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  template: `
   `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'route-demo';
 constructor(){
     const firebaseConfig = {
      apiKey: 'AIzaSyBWIbmfW4z-i52zlrtASKNoI1o_Mhy2u1c',
      authDomain: 'gestiondedon.firebaseapp.com',
      projectId: 'gestiondedon',
      storageBucket: 'gestiondedon.appspot.com',
      messagingSenderId: '293859794923',
      appId: '1:293859794923:web:7d3fa257bc41e05f7283ae',
      measurementId: 'G-X1Y6CQCW87'
};
firebase.initializeApp(firebaseConfig);
 }

}

