import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseAuthentication } from '@ionic-native/firebase-authentication/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router, private firebaseAuthentication: FirebaseAuthentication) {}

  goToHome() {
    this.router.navigate(['/inicio1']);
  }
  inic() {
    this.router.navigate(['/interfas']);
  }

}
