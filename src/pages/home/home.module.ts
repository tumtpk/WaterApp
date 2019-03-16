import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {RoundProgressModule} from 'angular-svg-round-progressbar';
import { HomePage } from './home';

@NgModule({
  declarations: [
    HomePage
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    RoundProgressModule
  ],
})
export class HomePageModule {}
