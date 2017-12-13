import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { JurusanPage } from '../jurusan/jurusan';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {
  }
  onJurusan() {
    this.navCtrl.push(JurusanPage)
  }

}
