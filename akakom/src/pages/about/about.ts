import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { VisiPage } from '../visimisi/visimisi';
import { HomePage } from '../home/home';
import {ProfilePage} from '../profile/profile';
import { KontakPage } from '../kontak/kontak';
import { DosenPage } from '../dosen/dosen';
import { PejabatPage } from '../pejabat/pejabat';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})


export class AboutPage {
  constructor(public navCtrl: NavController) {
  }
  onVisiMisi() {
    this.navCtrl.push(VisiPage)
  }

  onProfile() {
    this.navCtrl.push(ProfilePage)
  }

  onKontak() {
    this.navCtrl.push(KontakPage)
  }

  onDosen() {
    this.navCtrl.push(DosenPage)
  }

  onPejabat() {
    this.navCtrl.push(PejabatPage)
  }
  
}
