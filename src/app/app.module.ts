import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { TimerApp } from './app.component';


import { Timerpopup2Component } from '../components/timerpopup2/timerpopup2';

@NgModule({
  declarations: [
    TimerApp,
    Timerpopup2Component
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(TimerApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    TimerApp,
    Timerpopup2Component
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
