import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { TimerApp } from './app.component';

import {TimerpopupComponent} from '../components/timerpopup/timerpopup';

@NgModule({
  declarations: [
    TimerApp,
    TimerpopupComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(TimerApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    TimerApp,
    TimerpopupComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
