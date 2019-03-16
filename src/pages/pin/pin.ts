import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CreatepinPage } from '../createpin/createpin';
import { GlobalProvider } from '../../providers/global.provider';
import { Http } from '@angular/Http';

/**
 * Generated class for the PinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pin',
  templateUrl: 'pin.html',
})
export class PinPage {
  public items = [];
  public data = [];
  public searchStr;
  constructor(public navCtrl: NavController, public navParams: NavParams, public global: GlobalProvider, public http: Http) {
  }

  ionViewDidLoad() {
    let data = {
      "userId": this.global.userId
    }
    // console.log(this.global.userId);
    this.http.post(this.global.host+'/Wqi/getAllPin', this.global.setFormData(data))
      .map(res => res.json())
      .subscribe(data => {
        this.data = data;
        this.items = data;
      }
    ); 
  }

  itemSelected(pin){
    this.navCtrl.push(CreatepinPage, {
      "pin": pin
    });
  }

  getItems() {
    var q = this.searchStr;
    this.items = this.data
    if (q.trim() == '') {
      return;
    }
  
    this.items = this.items.filter((v) => {
      return (v.pinName).includes(q);
    })
  }

  resetData(){
    this.items = this.data;
  }

}
