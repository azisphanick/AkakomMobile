import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

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
    TIPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
