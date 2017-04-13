import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Signup } from '../pages/signup/signup';

// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';


// AF2 Settings
export const firebaseConfig = {
  apiKey: "AIzaSyA4UHAZ0NOEsvCV7vNOKbZS3Gci28POGm8",
    authDomain: "salao-app-c600e.firebaseapp.com",
    databaseURL: "https://salao-app-c600e.firebaseio.com",
    projectId: "salao-app-c600e",
    storageBucket: "salao-app-c600e.appspot.com",
    messagingSenderId: "186271927259"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Signup
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Signup
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
