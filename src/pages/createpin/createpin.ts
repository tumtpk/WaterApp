import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GlobalProvider } from '../../providers/global.provider';
import { Http } from '@angular/Http';

/**
 * Generated class for the CreatepinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-createpin',
  templateUrl: 'createpin.html',
})
export class CreatepinPage {

  public pin;
  public form : FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public global:GlobalProvider, public http: Http) {
    this.pin = navParams.get("pin");
    console.log(this.pin);
    this.form = this.formBuilder.group({
      val1: ['', null],
      val2: ['', null],
      val3: ['', null],
      val4: ['', null],
      val5: ['', null],
      val6: ['', null],
      val7: ['', null],
      val8: ['', null],
      description: ['', null],
      userId: [this.global.userId, null],
      pinId: [this.pin.pinId, null]
    });
  }

  save(){
    let formdata = this.global.setFormData(this.form.value);
    this.http.post(this.global.host+'Wqi/addNewWqi', formdata)
      .map(res => res.json())
      .subscribe(data => {
        // alert(data.message);
        if(data.result){
          this.global.showToast(data.message, this.navCtrl);
        }else{
          this.global.showToast(data.message, null);
        }
      }
    ); 
  }

}
