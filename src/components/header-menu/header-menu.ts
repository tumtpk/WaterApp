import { Component } from '@angular/core';
import { App, MenuController, NavController } from 'ionic-angular';
import { GlobalProvider } from '../../providers/global.provider';
import { PinPage } from '../../pages/pin/pin';
import { TabsPage } from '../../pages/tabs/tabs';
import { ProblemPage } from '../../pages/problem/problem';
import { QualityPage } from '../../pages/quality/quality';
import { SettingPage } from '../../pages/setting/setting';
//import { AuthServiceProvider } from '../../providers/auth/auth-service';

@Component({
  selector: 'header-menu',
  templateUrl: 'header-menu.html'
})
export class HeaderMenuComponent {
  constructor(public menuCtrl: MenuController,
              public app: App, public global: GlobalProvider) {
    console.log('Hello HeaderMenuComponent Component');
  }
  logoutClicked() {
    console.log("Logout");
    //this.authService.logout();
    this.menuCtrl.close();
    var nav = this.app.getRootNav();
    nav.setRoot(TabsPage);
  }

  gotoTrack(){
    // this.navCtrl.push(TrackPage);
  }

  gotoProblem(){
    var nav = this.app.getRootNav();
    nav.push(ProblemPage);
  }

  gotoQuality(){
    var nav = this.app.getRootNav();
    nav.push(QualityPage);
  }

  gotoPin(){
    var nav = this.app.getRootNav();
    nav.push(PinPage);
  }

  gotoSetting(){
    var nav = this.app.getRootNav();
    nav.push(SettingPage);
  }

  gotoAnalysis(){
    // this.navCtrl.push(AnalysisPage);
  }

}