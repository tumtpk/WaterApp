import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GlobalProvider } from '../../providers/global.provider';
import { Http } from '@angular/Http';
// import { HTTP } from '@ionic-native/http';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public form : FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams,public nav: Nav, public formBuilder: FormBuilder, public global: GlobalProvider, public http: Http) {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    this.form.controls.email.reset("user@mail.com");
    this.form.controls.password.reset("password");
  }

  login() {
    let isValid = this.form.valid;
    if(isValid){
      let formdata = this.global.setFormData(this.form.value);
      // let data = {
      //   'email': this.form.controls.email.value,
      //   'password': this.form.controls.password.value
      // };
      // let headers = {
      //     'Content-Type': 'application/json'
      // };
      // this.http.post(this.global.host+'Login/loginApp', data, headers)
      //   .then(data => {
      //     let result = JSON.parse(data.data);
      //     alert(result.message);
      //     if(result.result){
      //       this.global.userId = result.userId;
      //       this.global.name = result.name;
      //       this.nav.setRoot(HomePage);
      //     }

      //   })
      //   .catch(error => {

      //     console.log(error);
      //     console.log(error.error); // error message as string
      //     console.log(error.headers);
      //     alert("กรอก username password");

      //   });
      this.http.post(this.global.host+'Login/loginApp', formdata)
        .map(res => res.json())
        .subscribe(data => {
          alert(data.message);
          if(data.result){
            this.global.userId = data.userId;
            this.global.name = data.name;
            this.nav.setRoot(HomePage);
          }
        }
      ); 
    }else{
      // show กรอก username password
      alert("กรอก username password");
    }
  }

  createAccount(){
    this.navCtrl.push(RegisterPage);
  }

}
