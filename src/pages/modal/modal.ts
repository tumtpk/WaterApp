import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  current: number = 0;
  max: number = 100;
  stroke: number = 15;
  radius: number = 90;
  semicircle: boolean = false;
  rounded: boolean = false;
  responsive: boolean = true;
  clockwise: boolean = true;
  color: string = '#45ccce';
  background: string = '#eaeaea';
  duration: number = 800;
  animation: string = 'easeOutCubic';
  animationDelay: number = 5;
  animations: string[] = [];
  gradient: boolean = false;
  realCurrent: number = 0;
  rate:number;

  result = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, params: NavParams) {
    let wqiData = params.get('wqiData');
    let result = params.get('result');
    this.result = result;
    this.current = wqiData.val;
    this.color = wqiData.color;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

  closeModal() {
    this.navCtrl.pop();
  }

}
