import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ModalPage } from '../modal/modal';
import { GlobalProvider } from '../../providers/global.provider';
import { Http } from '@angular/Http';

/**
 * Generated class for the ResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
})
export class ResultPage {

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

  wqiAllPin = [];
  pinId = null;
  wqi = [];
  do = [];
  bod = [];
  tss = [];
  sal = [];
  ph = [];
  fcb = [];
  nh3 = [];
  result = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public global: GlobalProvider, public http: Http) {
  }

  ionViewDidLoad() {
    // let headers = {
    //   'Content-Type': 'application/json'
    // };
    // this.http.post(this.global.host+'Wqi/getWqiAllPin', {}, headers)
    // .then(data => {
    //   console.log(data);
    // })
    // .catch(error => {
    //   alert("ไม่สามารถเชื่อมต่อข้อมูลได้");
    // });
    this.http.get(this.global.host+'Wqi/getWqiAllPin').map(res => res.json()).subscribe(data => {
        console.log(data);
        this.wqiAllPin = data;
        this.pinId = data[0].pinId;
        this.getWqiByPinId(this.pinId);
    });
  }

  getWqi(){
    this.getWqiByPinId(this.pinId);
  }

  getWqiByPinId(pinId){
    this.http.get(this.global.host+'Wqi/getWqiDataByPinId?pinId='+pinId)
      .map(res => res.json())
      .subscribe(data => {
        this.wqi = data.wqi;

        this.current = data.wqi.val;
        this.color = data.wqi.color;

        this.do = data.do;
        this.bod = data.bod;
        this.tss = data.tss;
        this.ph = data.ph;
        this.sal = data.sal;
        this.fcb = data.fcb;
        this.nh3 = data.nh3;
        this.result = data.problemResult;
      }
    ); 
  }

  presentModal() {
    let resultModal = this.modalCtrl.create(ModalPage, {"wqiData":this.wqi, "result": this.result});
    resultModal.present();
  }

}
