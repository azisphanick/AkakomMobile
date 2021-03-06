import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { Camera } from '@ionic-native/camera';
import { BrowserTab } from '@ionic-native/browser-tab';


import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { VisiPage } from '../pages/visimisi/visimisi';
import { ProfilePage } from '../pages/profile/profile';
import { KontakPage } from '../pages/kontak/kontak';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DosenPage } from '../pages/dosen/dosen';
import { PejabatPage } from '../pages/pejabat/pejabat';
import { JurusanPage } from '../pages/jurusan/jurusan';
<<<<<<< HEAD
=======
import { CordovaPage } from '../pages/cordova/cordova';
>>>>>>> aadf5644210ec0a98c3791961c68e4de74e5a0af
import { TIPage } from '../pages/ti/ti';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    VisiPage,
    ProfilePage,
    KontakPage,
    DosenPage,
    PejabatPage,
    JurusanPage,
<<<<<<< HEAD
=======
    CordovaPage,
>>>>>>> aadf5644210ec0a98c3791961c68e4de74e5a0af
    TIPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    VisiPage,
    ProfilePage,
    KontakPage,
    DosenPage,
    PejabatPage,
    JurusanPage,
<<<<<<< HEAD
=======
    CordovaPage,
>>>>>>> aadf5644210ec0a98c3791961c68e4de74e5a0af
    TIPage
  ],
  providers: [
    StatusBar,
    SplashScreen,Camera, BrowserTab,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
