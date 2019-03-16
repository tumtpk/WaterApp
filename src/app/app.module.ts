import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Toast } from '@ionic-native/toast';
import {RoundProgressModule} from 'angular-svg-round-progressbar';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { HomePage } from '../pages/home/home';
import { HeaderMenuComponent } from '../components/header-menu/header-menu';
import { PinPage } from '../pages/pin/pin';
import { CreatepinPage } from '../pages/createpin/createpin';
import { ProblemPage } from '../pages/problem/problem';
import { TrackPage } from '../pages/track/track';
import { AnalysisPage } from '../pages/analysis/analysis';
import { GlobalProvider } from '../providers/global.provider';
import { Geolocation } from '@ionic-native/geolocation';
import { ResultPage } from '../pages/result/result';
import { TabsPage } from '../pages/tabs/tabs';
import { ModalPage } from '../pages/modal/modal';
import { HTTP } from '@ionic-native/http';
import { HttpModule } from '@angular/Http';
import { QualityPage } from '../pages/quality/quality';
import { SettingPage } from '../pages/setting/setting';
import { ModalProblemResultPage } from '../pages/modal-problem-result/modal-problem-result';


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegisterPage,
    HomePage,
    PinPage,
    CreatepinPage,
    ProblemPage,
    TrackPage,
    AnalysisPage,
    ResultPage,
    TabsPage,
    ModalPage,
    QualityPage,
    SettingPage,
    ModalProblemResultPage,
    HeaderMenuComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RoundProgressModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RegisterPage,
    HomePage,
    PinPage,
    CreatepinPage,
    ProblemPage,
    TrackPage,
    AnalysisPage,
    ResultPage,
    ModalPage,
    QualityPage,
    SettingPage,
    ModalProblemResultPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GlobalProvider,
    Toast,
    HTTP,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
