import { Injectable } from "@angular/core";
import { Headers } from "@angular/Http";
import { Toast } from '@ionic-native/toast';

@Injectable()
export class GlobalProvider {

  public host = "http://localhost/water/";
  public headers = new Headers().append("content-type", "application/x-www-form-urlencoded");
  public userId = null;
  public name = null;

  public problemStatus = [
    '',
    'แจ้งปัญหา',
    'ตรวจสอบแล้ว',
    'สามารถแก้ไขปัญหาได้',
    'ไม่สามารถแก้ไขปัญหาได้'
];

  constructor(private toast: Toast) { }

  setFormData(obj){
    let formdata = new FormData();
    for(let property in obj) {
      formdata.append(property, obj[property]);
    }
    return formdata;
  }

  showToast(message, nav){
    this.toast.show(message, '5000', 'bottom').subscribe(
      () => {
        if(nav != null){
          nav.pop();
        }
      }
    );
  }

}