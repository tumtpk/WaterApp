import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ModalProblemResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-problem-result',
  templateUrl: 'modal-problem-result.html',
})
export class ModalProblemResultPage {

  public wqi;
  public do;
  public bod;
  public nh3;
  public fcb;
  public tss;
  public ph;
  public sal;
  public problemResult;
  public suggest;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    let wqiData = navParams.get('item');
    this.wqi = wqiData.result.wqi;
    this.do = wqiData.result.do;
    this.bod = wqiData.result.bod;
    this.nh3 = wqiData.result.nh3;
    this.fcb = wqiData.result.fcb;
    this.tss = wqiData.result.tss;
    this.ph = wqiData.result.ph;
    this.sal = wqiData.result.sal;
    this.problemResult = wqiData.problemResult;
    this.suggest = wqiData.suggestion;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalProblemResultPage');
  }

  closeModal() {
    this.navCtrl.pop();
  }

}
