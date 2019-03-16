import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import 'rxjs/add/operator/map';
import { GlobalProvider } from '../../providers/global.provider';
import { Http } from '@angular/Http';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  public form : FormGroup;
  public provinceData = null;
  public districtOption = [];
  public districtData = null;
  public subdistrictOption = [];
  public subdistrictData = null;

  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http,  public formBuilder: FormBuilder, public global: GlobalProvider) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      gender: ['', Validators.required],
      dob: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]{2}/[0-9]{2}/[0-9]{4}')])],
      phone: ['', Validators.required],
      village: ['', Validators.required],
      province: ['', Validators.required],
      district: ['', Validators.required],
      subdistrict: ['', Validators.required],
      email: ['', [Validators.email,Validators.required]],
      password: ['', Validators.required]
    });
  }

  registerForm(){
    console.log(this.form.value); 
    let formdata = this.global.setFormData(this.form.value);
    this.http.post(this.global.host+'Register/addNewUser', formdata)
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

  hideShowPassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }

  clearDistrict(){
    this.districtOption = []
    this.form.controls.district.setValue('');
    this.clearSubdistrict();
  }

  clearSubdistrict(){
    this.subdistrictOption = [];
    this.form.controls.subdistrict.setValue('');
  }

  setProvince(province){
    this.clearDistrict();
    this.districtData.filter((item) => {
      if(item.province_id == province){
        this.districtOption.push(item);
      }
    });
  }

  setDistrict(district){
    this.clearSubdistrict();
    this.subdistrictData.filter((item) => {
      if(item.amphur_id == district){
        this.subdistrictOption.push(item);
      }
    });
  }

  ionViewDidLoad() {
    this.http.get('./assets/data/provinces.json').map(res => res.json()).subscribe(data => {
        this.provinceData = data;
        console.log(this.provinceData);
    });
    this.http.get('./assets/data/amphures.json').map(res => res.json()).subscribe(data => {
        this.districtData = data;
        console.log(this.districtData);
    });
    this.http.get('./assets/data/districts.json').map(res => res.json()).subscribe(data => {
        this.subdistrictData = data;
        console.log(this.subdistrictData);
    });
  }

}
