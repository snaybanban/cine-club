import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseAuthentication } from '@ionic-native/firebase-authentication/ngx';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  number: string;

  constructor(private router: Router, private firebaseAuthentication: FirebaseAuthentication, public alertController: AlertController) {}

  enviarmsj() {
    this.firebaseAuthentication.verifyPhoneNumber('+505'+this.number.toString(), 30000).then(verificationId => {
      alert('El código de verificación es: ' + verificationId);
      this.verificarcodigo(verificationId)
    })
  }

  async verificarcodigo(verificationId) {
      const prompt = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'ingresa el codigo',
        inputs: [
          {
            name: 'code',
            type: 'number',
            placeholder: 'Ingresa tu código'
          },
          ],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              console.log('Confirm Cancel');
            }
          }, {
            text: 'Ok',
            handler: (response) => {
              const smsCode = response.code;
              this.firebaseAuthentication.signInWithVerificationId(verificationId, smsCode).then(res => alert(res))
            }
          }
        ]
      });
  
      await prompt.present();
    }
  


  goToHome() {
    this.router.navigate(['/inicio1']);
  }
  inic() {
    this.router.navigate(['/interfas']);
  }

}
