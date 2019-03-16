import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResultPage } from './result';
import {RoundProgressModule} from 'angular-svg-round-progressbar';

@NgModule({
  declarations: [
    ResultPage,
  ],
  imports: [
    IonicPageModule.forChild(ResultPage),
    RoundProgressModule
  ],
})
export class ResultPageModule {}
