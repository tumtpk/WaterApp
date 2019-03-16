import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Http } from '@angular/Http';
import { GlobalProvider } from '../../providers/global.provider';
import { ModalProblemResultPage } from '../modal-problem-result/modal-problem-result';

/**
 * Generated class for the QualityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quality',
  templateUrl: 'quality.html',
})
export class QualityPage {

  public items = [];
  public data = [];
  public searchStr;
  public problemStatus = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public global: GlobalProvider, public modalCtrl: ModalController) {
    this.problemStatus = this.global.problemStatus;
  }

  ionViewDidLoad() {
    let data = {
      "userId": this.global.userId
    }
    // console.log(this.global.userId);
    this.http.post(this.global.host+'/Problem/getAllProblemAndResult', this.global.setFormData(data))
      .map(res => res.json())
      .subscribe(data => {
        this.data = data;
        this.items = data;
      }
    ); 
  }

  itemSelected(problemId){
    console.log(problemId);
  //   // this.navCtrl.push(CreatepinPage, {
  //   //   "pin": pin
  //   // });
  }

  getItems() {
    var q = this.searchStr;
    this.items = this.data
    if (q.trim() == '') {
      return;
    }
  
    this.items = this.items.filter((v) => {
      return (v.positionName).includes(q);
    })
  }

  resetData(){
    this.items = this.data;
  }

  presentModal(item) {
    let resultModal = this.modalCtrl.create(ModalProblemResultPage, {"item": item});
    resultModal.present();
  }

}
