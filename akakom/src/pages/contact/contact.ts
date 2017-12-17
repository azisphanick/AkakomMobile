import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { JurusanPage } from '../jurusan/jurusan';
import { CordovaPage } from '../cordova/cordova';
import { BrowserTab } from '@ionic-native/browser-tab';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController, private browserTab: BrowserTab) {
  }
  onJurusan() {
    this.navCtrl.push(JurusanPage)
  }

  onCordova() {
    this.navCtrl.push(CordovaPage)
  }

  onTautan() {
    this.browserTab.isAvailable()
      .then((isAvailable: boolean) => {

        if (isAvailable) {

          this.browserTab.openUrl('https://ionic.io');

        } else {

          console.log("Hello")

        }

      });

  }

}
