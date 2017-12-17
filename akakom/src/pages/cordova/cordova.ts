import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

@Component({
    selector: 'page-cordova',
    templateUrl: 'cordova.html'
})
export class CordovaPage {
    public photos: any;
    public base64Image: string;
    constructor(public navCtrl: NavController, private camera: Camera, private alertCtrl: AlertController) {
    }

    ngOnInit() {
        this.photos = [];
    }

    takePhoto() {
        console.log("coming here");

        const options: CameraOptions = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            targetWidth: 450,
            targetHeight: 450,
            saveToPhotoAlbum: false
        };

        this.camera.getPicture(options).then(
            imageData => {
                this.base64Image = "data:image/jpeg;base64," + imageData;
                this.photos.push(this.base64Image);
                this.photos.reverse();
            },
            err => {
                console.log(err);
            }
        );
    }

    deletePhoto(index) {
        let confirm = this.alertCtrl.create({
            title: 'Apakah anda ingin menghapus foto ini ?',
            message: '',
            buttons: [
                {
                    text: 'Disagree',
                    handler: () => {
                       
                    }
                },
                {
                    text: 'Yes',
                    handler: () => {
                        this.photos.splice(index, 1); 
                    }
                }
            ]
        });
        confirm.present();
    }
}
