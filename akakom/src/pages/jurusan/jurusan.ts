import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TIPage } from '../ti/ti';

@Component({
    selector: 'page-jurusan',
    templateUrl: 'jurusan.html'
})
export class JurusanPage {

    constructor(public navCtrl: NavController) {

    }
    onTI(){
    	this.navCtrl.push(TIPage)
    }

}