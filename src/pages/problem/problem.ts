import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Geolocation } from '@ionic-native/geolocation';
import { GlobalProvider } from '../../providers/global.provider';
import { Http } from '@angular/Http';

/**
 * Generated class for the ProblemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-problem',
  templateUrl: 'problem.html',
})
export class ProblemPage {

  public form : FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public geolocation: Geolocation, public global:GlobalProvider, public http: Http) {
    this.form = this.formBuilder.group({
      positionName: ['', Validators.required],
      description: ['', null],
      val1: ['', null],
      val2: ['', null],
      val3: ['', null],
      val6: ['', null],
      val7: ['', null],
      val8: ['', null],
      latitude: ['', null],
      longitude: ['', null],
      userId: [this.global.userId, null]
    });
    this.getLocation();
  }

  save(){
    if(this.form.valid){
      console.log(this.form.value);
      let formdata = this.global.setFormData(this.form.value);
      this.http.post(this.global.host+'Problem/addNewProblem', formdata)
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
    }else{
      alert('กรอกชื่อตำแหน่ง');
    }
  }

  getLocation() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.form.controls.latitude.reset(resp.coords.latitude);
      this.form.controls.longitude.reset(resp.coords.longitude);
    }).catch((error) => {
      alert('ไม่สามารถดึงตำแหน่งปัจจุบันได้');
    });
  }

}
