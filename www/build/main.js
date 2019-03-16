webpackJsonp([15],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreatepinPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_provider__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_Http__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the CreatepinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreatepinPage = /** @class */ (function () {
    function CreatepinPage(navCtrl, navParams, formBuilder, global, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.global = global;
        this.http = http;
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
    CreatepinPage.prototype.save = function () {
        var _this = this;
        var formdata = this.global.setFormData(this.form.value);
        this.http.post(this.global.host + 'Wqi/addNewWqi', formdata)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            // alert(data.message);
            if (data.result) {
                _this.global.showToast(data.message, _this.navCtrl);
            }
            else {
                _this.global.showToast(data.message, null);
            }
        });
    };
    CreatepinPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-createpin',template:/*ion-inline-start:"C:\Users\SWE-PC\Desktop\water\src\pages\createpin\createpin.html"*/'<!--\n  Generated template for the CreatepinPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>เพิ่มพิกัด</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <form [formGroup]="form" (ngSubmit)="save()">\n        <ion-list>\n            <ion-list-header>\n                ข้อมูลน้ำ  {{pin.pinName + " ("+ pin.latitude+ ","+ pin.longitude+")"}}\n            </ion-list-header>\n            <ion-item>\n                <ion-label stacked>ออกซิเจนละลายน้ำ (DO)</ion-label>\n                <ion-input type="text" formControlName="val1"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label stacked>ความสกปรกในรูปสารอินทรีย์ (BOD)</ion-label>\n                <ion-input type="text" formControlName="val2"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label stacked>แอมโมเนีย (NH<sub>3</sub>)</ion-label>\n                <ion-input type="text" formControlName="val3"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label stacked>แบคทีเรียกลุ่มฟีคัลโคลิฟอร์ม (FCB)</ion-label>\n                <ion-input type="text" formControlName="val4"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label stacked>แบคทีเรียกลุ่มฟีคัลโคลิฟอร์มทั้งหมด (TCB)</ion-label>\n                <ion-input type="text" formControlName="val5"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label stacked>ปริมาณของแข็งที่ละลายได้ในน้ำ (TSS)</ion-label>\n                <ion-input type="text" formControlName="val7"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label stacked>ความเป็นกรด-เบส (pH)</ion-label>\n                <ion-input type="text" formControlName="val6"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label stacked>ความเค็ม (Sal)</ion-label>\n                <ion-input type="text" formControlName="val8"></ion-input>\n            </ion-item>\n            <ion-list-header>\n                    ปัญหา\n            </ion-list-header>\n            <ion-item>\n                <ion-label stacked>สาเหตุที่ไม่สามาถส่งค่าของน้ำได้</ion-label>\n                <ion-textarea rows="3" formControlName="description"></ion-textarea>\n            </ion-item>\n        </ion-list>\n\n        <button ion-button full icon-start type="submit">\n            <ion-icon name="checkmark-circle"></ion-icon>\n            ส่งข้อมูล\n        </button>\n  \n    </form>\n</ion-content>\n'/*ion-inline-end:"C:\Users\SWE-PC\Desktop\water\src\pages\createpin\createpin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_global_provider__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_4__angular_Http__["b" /* Http */]])
    ], CreatepinPage);
    return CreatepinPage;
}());

//# sourceMappingURL=createpin.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalProblemResultPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ModalProblemResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalProblemResultPage = /** @class */ (function () {
    function ModalProblemResultPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        var wqiData = navParams.get('item');
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
    ModalProblemResultPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalProblemResultPage');
    };
    ModalProblemResultPage.prototype.closeModal = function () {
        this.navCtrl.pop();
    };
    ModalProblemResultPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-modal-problem-result',template:/*ion-inline-start:"C:\Users\SWE-PC\Desktop\water\src\pages\modal-problem-result\modal-problem-result.html"*/'<!--\n  Generated template for the ModalProblemResultPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n      <ion-title>ผลลัพธ์</ion-title>\n      <ion-buttons end>\n          <button ion-button icon-only (click)="closeModal()">\n              <ion-icon item-right name="ios-close-outline"></ion-icon>\n          </button>\n      </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div class="shadow">\n      <ion-card-content class="result">\n        <h3>ค่า WQI เท่ากับ <span class="result {{wqi.class}}">{{wqi.val}}</span></h3> \n        <ion-grid>\n          <ion-row>\n            <ion-col col-9>\n              ออกซิเจนละลายน้ำ (DO)<br>\n            </ion-col>\n            <ion-col col-3>\n              <span class="result {{do.class}}">{{do.val}}</span>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-9>\n              ความสกปรกในรูปสารอินทรีย์ (BOD)\n            </ion-col>\n            <ion-col col-3>\n              <span class="result {{bod.class}}">{{bod.val}}</span>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-9>\n              แอมโมเนีย (NH<sub>3</sub>)\n            </ion-col>\n            <ion-col col-3>\n              <span class="result {{nh3.class}}">{{nh3.val}}</span>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-9>\n              แบคทีเรียกลุ่มฟีคัลโคลิฟอร์ม (FCB)\n            </ion-col>\n            <ion-col col-3>\n              <span class="result {{fcb.class}}">{{fcb.val}}</span>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-9>\n              ปริมาณของแข็งที่ละลายได้ในน้ำ (TSS)\n            </ion-col>\n            <ion-col col-3>\n              <span class="result {{tss.class}}">{{tss.val}}</span>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-9>\n              ความเป็นกรด-เบส (pH)\n            </ion-col>\n            <ion-col col-3>\n              <span class="result {{ph.class}}">{{ph.val}}</span>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-9>\n              ความเค็ม (Sal)\n            </ion-col>\n            <ion-col col-3>\n              <span class="result {{sal.class}}">{{sal.val}}</span>\n            </ion-col>\n          </ion-row>\n        </ion-grid>             \n      </ion-card-content>\n      <ion-card-content class="result">\n          <div [innerHTML]=problemResult.header></div>\n          <div [innerHTML]=problemResult.content></div>    \n      </ion-card-content>\n      <ion-card-content class="result">\n          <h3>ข้อแนะนำ</h3>\n          {{suggest}}                \n      </ion-card-content>\n      <button ion-button full (click)="closeModal()">ปิด</button>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <img src="./assets/img/result2.png" />\n</ion-footer>'/*ion-inline-end:"C:\Users\SWE-PC\Desktop\water\src\pages\modal-problem-result\modal-problem-result.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ModalProblemResultPage);
    return ModalProblemResultPage;
}());

//# sourceMappingURL=modal-problem-result.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProblemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_provider__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_Http__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the ProblemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProblemPage = /** @class */ (function () {
    function ProblemPage(navCtrl, navParams, formBuilder, geolocation, global, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.geolocation = geolocation;
        this.global = global;
        this.http = http;
        this.form = this.formBuilder.group({
            positionName: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
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
    ProblemPage.prototype.save = function () {
        var _this = this;
        if (this.form.valid) {
            console.log(this.form.value);
            var formdata = this.global.setFormData(this.form.value);
            this.http.post(this.global.host + 'Problem/addNewProblem', formdata)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                // alert(data.message);
                if (data.result) {
                    _this.global.showToast(data.message, _this.navCtrl);
                }
                else {
                    _this.global.showToast(data.message, null);
                }
            });
        }
        else {
            alert('กรอกชื่อตำแหน่ง');
        }
    };
    ProblemPage.prototype.getLocation = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.form.controls.latitude.reset(resp.coords.latitude);
            _this.form.controls.longitude.reset(resp.coords.longitude);
        }).catch(function (error) {
            alert('ไม่สามารถดึงตำแหน่งปัจจุบันได้');
        });
    };
    ProblemPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-problem',template:/*ion-inline-start:"C:\Users\SWE-PC\Desktop\water\src\pages\problem\problem.html"*/'<!--\n  Generated template for the ProblemPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>แจ้งปัญหาน้ำ</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <form [formGroup]="form" (ngSubmit)="save()">\n        <p class="scrollDiv">\n            <ion-list>\n                <ion-item>\n                    <ion-label stacked>ชื่อตำแหน่ง</ion-label>\n                    <ion-input type="text" class="text-right" formControlName="positionName"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label stacked>รายละเอียดปัญหา</ion-label>\n                    <ion-textarea rows="3" formControlName="description"></ion-textarea>\n                </ion-item>\n                <ion-item>\n                    <ion-label stacked>ออกซิเจนละลายน้ำ (DO)</ion-label>\n                    <ion-input type="text" formControlName="val1"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label stacked>ความสกปรกในรูปสารอินทรีย์ (BOD)</ion-label>\n                    <ion-input type="text" formControlName="val2"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label stacked>แอมโมเนีย (NH<sub>3</sub>)</ion-label>\n                    <ion-input type="text" formControlName="val3"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label stacked>ปริมาณของแข็งที่ละลายได้ในน้ำ (TSS)</ion-label>\n                    <ion-input type="text" formControlName="val7"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label stacked>ความเป็นกรด-เบส (pH)</ion-label>\n                    <ion-input type="text" formControlName="val6"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label stacked>ความเค็ม (SAL)</ion-label>\n                    <ion-input type="text" formControlName="val8"></ion-input>\n                </ion-item>\n            </ion-list>\n        </p>\n\n        <button ion-button full icon-start type="submit" [disabled]="!form.valid">\n            <ion-icon name="checkmark-circle"></ion-icon>\n            ส่งข้อมูล\n        </button>\n\n    </form> \n\n</ion-content>\n'/*ion-inline-end:"C:\Users\SWE-PC\Desktop\water\src\pages\problem\problem.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__providers_global_provider__["a" /* GlobalProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_global_provider__["a" /* GlobalProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__angular_Http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_Http__["b" /* Http */]) === "function" && _f || Object])
    ], ProblemPage);
    return ProblemPage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=problem.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_global_provider__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_Http__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// import { HTTP } from '@ionic-native/http';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, nav, formBuilder, global, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.nav = nav;
        this.formBuilder = formBuilder;
        this.global = global;
        this.http = http;
        this.form = this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]
        });
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
        this.form.controls.email.reset("user@mail.com");
        this.form.controls.password.reset("password");
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        var isValid = this.form.valid;
        if (isValid) {
            var formdata = this.global.setFormData(this.form.value);
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
            this.http.post(this.global.host + 'Login/loginApp', formdata)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                alert(data.message);
                if (data.result) {
                    _this.global.userId = data.userId;
                    _this.global.name = data.name;
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
                }
            });
        }
        else {
            // show กรอก username password
            alert("กรอก username password");
        }
    };
    LoginPage.prototype.createAccount = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\SWE-PC\Desktop\water\src\pages\login\login.html"*/'<ion-content class="login-content" padding class="animated fadeIn login auth-page">\n  <div class="login-content">\n      <div padding-horizontal text-center class="animated fadeInDown">\n        <h2 ion-text class="text-primary">\n          <strong>หมอน้ำ</strong>\n        </h2>\n        <div class="logo"></div>\n      </div>\n\n      <!-- Login form -->\n    <form class="list-form" [formGroup]="form" (ngSubmit)="login()">\n        <ion-item>\n          <ion-label floating>\n            <ion-icon name="mail" item-start class="text-primary"></ion-icon>\n            อีเมล์\n          </ion-label>\n          <ion-input type="email" formControlName="email"></ion-input>\n        </ion-item>\n  \n        <ion-item>\n          <ion-label floating>\n            <ion-icon name="lock" item-start class="text-primary"></ion-icon>\n            รหัสผ่าน\n          </ion-label>\n          <ion-input type="password" formControlName="password"></ion-input>\n        </ion-item>\n      </form>\n  \n      <div>\n        <button ion-button icon-start block color="dark" tappable (click)="login()">\n          <ion-icon name="log-in"></ion-icon>\n          เข้าสู่ระบบ\n        </button>\n  \n      </div>\n\n  </div>\n  <!-- <ion-row class="logo-row">\n    <ion-col></ion-col>\n    <ion-col width-67>\n      <img src="http://placehold.it/300x200"/><br>\n      <h2>Application</h2>\n    </ion-col>\n    <ion-col></ion-col>\n  </ion-row>\n  <div class="login-box">\n    <form [formGroup]="form" (ngSubmit)="login()">\n      <ion-row>\n        <ion-col>\n          <ion-list inset>\n            \n            <ion-item>\n              <ion-input type="text" placeholder="Email" formControlName="email"></ion-input>\n            </ion-item>\n            \n            <ion-item>\n              <ion-input type="password" placeholder="Password" name="password" formControlName="password"></ion-input>\n            </ion-item>\n            \n          </ion-list>\n        </ion-col>\n      </ion-row>\n      \n      <ion-row>\n        <ion-col class="signup-col">\n          <button ion-button class="submit-btn" full type="submit">เข้าสู่ระบบ</button>\n          <button type="button" ion-button class="register-btn" block clear (click)="createAccount()">ลงทะเบียน</button>\n        </ion-col>\n      </ion-row>\n      \n    </form>\n  </div> -->\n</ion-content>'/*ion-inline-end:"C:\Users\SWE-PC\Desktop\water\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_5__providers_global_provider__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_6__angular_Http__["b" /* Http */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingPage = /** @class */ (function () {
    function SettingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SettingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingPage');
    };
    SettingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-setting',template:/*ion-inline-start:"C:\Users\SWE-PC\Desktop\water\src\pages\setting\setting.html"*/'<!--\n  Generated template for the SettingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>ตั้งค่าแจ้งเตือน</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\SWE-PC\Desktop\water\src\pages\setting\setting.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], SettingPage);
    return SettingPage;
}());

//# sourceMappingURL=setting.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QualityPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_Http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_provider__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modal_problem_result_modal_problem_result__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the QualityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var QualityPage = /** @class */ (function () {
    function QualityPage(navCtrl, navParams, http, global, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.global = global;
        this.modalCtrl = modalCtrl;
        this.items = [];
        this.data = [];
        this.problemStatus = [];
        this.problemStatus = this.global.problemStatus;
    }
    QualityPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var data = {
            "userId": this.global.userId
        };
        // console.log(this.global.userId);
        this.http.post(this.global.host + '/Problem/getAllProblemAndResult', this.global.setFormData(data))
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.data = data;
            _this.items = data;
        });
    };
    QualityPage.prototype.itemSelected = function (problemId) {
        console.log(problemId);
        //   // this.navCtrl.push(CreatepinPage, {
        //   //   "pin": pin
        //   // });
    };
    QualityPage.prototype.getItems = function () {
        var q = this.searchStr;
        this.items = this.data;
        if (q.trim() == '') {
            return;
        }
        this.items = this.items.filter(function (v) {
            return (v.positionName).includes(q);
        });
    };
    QualityPage.prototype.resetData = function () {
        this.items = this.data;
    };
    QualityPage.prototype.presentModal = function (item) {
        var resultModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__modal_problem_result_modal_problem_result__["a" /* ModalProblemResultPage */], { "item": item });
        resultModal.present();
    };
    QualityPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-quality',template:/*ion-inline-start:"C:\Users\SWE-PC\Desktop\water\src\pages\quality\quality.html"*/'<!--\n  Generated template for the QualityPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>ผลการแจ้งปัญหา</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-searchbar showCancelButton placeholder="ค้นหา" [(ngModel)]="searchStr" (input)="getItems()" (ionClear)="resetData()"></ion-searchbar>\n    <!-- <ion-list>\n        <ion-grid>\n          <ion-row *ngFor="let item of items" (click)="itemSelected(item)" class="border">\n            <ion-col col-8>\n                  {{ item.positionName }}\n            </ion-col>\n            <ion-col col-4>\n                <ion-icon  name="checkmark-circle" color="secondary"></ion-icon>\n                <div class="text" *ngIf="item.createdDtm != null">ส่งแล้ว</div>\n                <div class="not-text" *ngIf="item.createdDtm == null">ไม่มีข้อมูล</div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n    </ion-list> -->\n\n    <ion-card *ngFor="let item of items" (click)="itemSelected(item)">\n      \n      <ion-item>\n        <h2>{{ item.positionName }}</h2>\n        <ion-row>\n            <ion-col class="date">\n                {{ item.pcreatedDtm }}\n            </ion-col>\n            <ion-col class="right">\n                {{ problemStatus[item.status] }}\n            </ion-col>\n        </ion-row>\n      </ion-item>\n\n      <ion-row>\n        <ion-col>\n          <button ion-button icon-only small round full [disabled]="item.createdDtm == null" (click)="presentModal(item)">\n              <ion-icon name="eye"></ion-icon> เพิ่มเติม\n          </button>\n        </ion-col>\n        <ion-col>\n          <button ion-button icon-only small round full color="secondary" [disabled]="item.createdDtm == null">\n              <ion-icon name="checkmark-circle"></ion-icon> สำเร็จ\n          </button>\n        </ion-col>\n        <ion-col>\n            <button ion-button icon-only small round full color="danger" [disabled]="item.createdDtm == null">\n                <ion-icon name="close-circle"></ion-icon> ไม่สำเร็จ\n            </button>\n          </ion-col>\n      </ion-row>\n    \n    </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\SWE-PC\Desktop\water\src\pages\quality\quality.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_Http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__providers_global_provider__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], QualityPage);
    return QualityPage;
}());

//# sourceMappingURL=quality.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_modal__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_provider__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_Http__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ResultPage = /** @class */ (function () {
    function ResultPage(navCtrl, navParams, modalCtrl, global, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.global = global;
        this.http = http;
        this.current = 0;
        this.max = 100;
        this.stroke = 15;
        this.radius = 90;
        this.semicircle = false;
        this.rounded = false;
        this.responsive = true;
        this.clockwise = true;
        this.color = '#45ccce';
        this.background = '#eaeaea';
        this.duration = 800;
        this.animation = 'easeOutCubic';
        this.animationDelay = 5;
        this.animations = [];
        this.gradient = false;
        this.realCurrent = 0;
        this.wqiAllPin = [];
        this.pinId = null;
        this.wqi = [];
        this.do = [];
        this.bod = [];
        this.tss = [];
        this.sal = [];
        this.ph = [];
        this.fcb = [];
        this.nh3 = [];
        this.result = [];
    }
    ResultPage.prototype.ionViewDidLoad = function () {
        var _this = this;
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
        this.http.get(this.global.host + 'Wqi/getWqiAllPin').map(function (res) { return res.json(); }).subscribe(function (data) {
            console.log(data);
            _this.wqiAllPin = data;
            _this.pinId = data[0].pinId;
            _this.getWqiByPinId(_this.pinId);
        });
    };
    ResultPage.prototype.getWqi = function () {
        this.getWqiByPinId(this.pinId);
    };
    ResultPage.prototype.getWqiByPinId = function (pinId) {
        var _this = this;
        this.http.get(this.global.host + 'Wqi/getWqiDataByPinId?pinId=' + pinId)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.wqi = data.wqi;
            _this.current = data.wqi.val;
            _this.color = data.wqi.color;
            _this.do = data.do;
            _this.bod = data.bod;
            _this.tss = data.tss;
            _this.ph = data.ph;
            _this.sal = data.sal;
            _this.fcb = data.fcb;
            _this.nh3 = data.nh3;
            _this.result = data.problemResult;
        });
    };
    ResultPage.prototype.presentModal = function () {
        var resultModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__modal_modal__["a" /* ModalPage */], { "wqiData": this.wqi, "result": this.result });
        resultModal.present();
    };
    ResultPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-result',template:/*ion-inline-start:"C:\Users\SWE-PC\Desktop\water\src\pages\result\result.html"*/'<!--\n  Generated template for the ResultPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<!-- <ion-header>\n    <ion-navbar>\n        <ion-title>Page1</ion-title>\n      <button ion-button round outline float-right>\n          <ion-icon name="star"></ion-icon> เข้าสู่ระบบ\n      </button>\n    </ion-navbar>\n</ion-header> -->\n\n<!-- <ion-header>\n\n  <ion-navbar color="sky">\n    <ion-title>\n      <img src="./assets/img/avatar.png" />\n      หมอน้ำ\n    </ion-title>\n  </ion-navbar>\n\n</ion-header> -->\n  \n<ion-content padding>    \n        <div class="shadow">  \n            <ion-item>\n                <ion-label>สถานที่</ion-label>\n                <ion-select [(ngModel)]="pinId" (ngModelChange)="getWqi()">\n                  <ion-option *ngFor="let item of wqiAllPin" value="{{item.pinId}}" [selected]="item.pinId == pinId">{{item.pinName}}</ion-option>\n                </ion-select>\n              </ion-item>          \n              <div>\n                  <div class="progress-percentage-wrapper">\n                      <div class="progress-percentage-header-logo ng-cloak">\n                          <img src="./assets/img/avatar.png" class="img" />\n                      </div>\n                      <div class="progress-percentage-header ng-cloak">WQI</div>\n                      <div class="progress-percentage ng-cloak">{{current}}<small>/100</small></div>\n\n                    <round-progress [current]="current" [max]="max" [stroke]="stroke" [radius]="radius" [semicircle]="semicircle" [rounded]="rounded"\n                    [responsive]="responsive" [clockwise]="clockwise" [color]="gradient ? \'url(#gradient)\' : color" [background]="background"\n                    [duration]="duration" [animation]="animation" [animationDelay]="animationDelay"></round-progress>\n                \n                    <div class="progress-percentage-button ng-cloak">\n                        <button ion-button outline small (click)="presentModal()">รายละเอียด</button>\n                    </div>\n                  </div>\n              </div>\n              <br>\n              <ion-grid>\n                <ion-row>\n                  <ion-col class="border">\n                    <ion-row>\n                      <ion-col>DO</ion-col>\n                      <ion-col class="tag {{do.class}}">{{ do.val }}</ion-col>\n                    </ion-row>\n                  </ion-col>\n                  <ion-col class="border">\n                    <ion-row>\n                      <ion-col>pH</ion-col>\n                      <ion-col class="tag {{ph.class}}">{{ ph.val }}</ion-col>\n                    </ion-row>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n              <ion-grid>\n                <ion-row>\n                    <ion-col class="border">\n                      <ion-row>\n                        <ion-col>NH<sub>3</sub></ion-col>\n                        <ion-col class="tag {{nh3.class}}">{{ nh3.val }}</ion-col>\n                      </ion-row>\n                    </ion-col>\n                    <ion-col class="border">\n                      <ion-row>\n                        <ion-col>Sal</ion-col>\n                        <ion-col class="tag {{sal.class}}">{{ sal.val }}</ion-col>\n                      </ion-row>\n                    </ion-col>\n                </ion-row>\n              </ion-grid>\n              <ion-grid>\n                <ion-row>\n                    <ion-col class="border">\n                      <ion-row>\n                        <ion-col>FCB</ion-col>\n                        <ion-col class="tag {{fcb.class}}">{{ fcb.val }}</ion-col>\n                      </ion-row>\n                    </ion-col>\n                    <ion-col class="border">\n                      <ion-row>\n                        <ion-col>TSS</ion-col>\n                        <ion-col class="tag {{tss.class}}">{{ tss.val }}</ion-col>\n                      </ion-row>\n                    </ion-col>\n                </ion-row>\n              </ion-grid>\n              <ion-grid>\n                <ion-row>\n                    <ion-col class="border">\n                      <ion-row>\n                        <ion-col>BOD</ion-col>\n                        <ion-col class="tag {{bod.class}}">{{ bod.val }}</ion-col>\n                      </ion-row>\n                    </ion-col>\n                    <ion-col class="border">\n                    </ion-col>\n                </ion-row>\n              </ion-grid>\n        </div>\n\n</ion-content>\n\n<ion-footer>\n    <img src="./assets/img/result2.png" />\n</ion-footer>'/*ion-inline-end:"C:\Users\SWE-PC\Desktop\water\src\pages\result\result.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__providers_global_provider__["a" /* GlobalProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_global_provider__["a" /* GlobalProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_Http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_Http__["b" /* Http */]) === "function" && _e || Object])
    ], ResultPage);
    return ResultPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=result.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PinPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__createpin_createpin__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_provider__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_Http__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the PinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PinPage = /** @class */ (function () {
    function PinPage(navCtrl, navParams, global, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.global = global;
        this.http = http;
        this.items = [];
        this.data = [];
    }
    PinPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var data = {
            "userId": this.global.userId
        };
        // console.log(this.global.userId);
        this.http.post(this.global.host + '/Wqi/getAllPin', this.global.setFormData(data))
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.data = data;
            _this.items = data;
        });
    };
    PinPage.prototype.itemSelected = function (pin) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__createpin_createpin__["a" /* CreatepinPage */], {
            "pin": pin
        });
    };
    PinPage.prototype.getItems = function () {
        var q = this.searchStr;
        this.items = this.data;
        if (q.trim() == '') {
            return;
        }
        this.items = this.items.filter(function (v) {
            return (v.pinName).includes(q);
        });
    };
    PinPage.prototype.resetData = function () {
        this.items = this.data;
    };
    PinPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-pin',template:/*ion-inline-start:"C:\Users\SWE-PC\Desktop\water\src\pages\pin\pin.html"*/'<!--\n  Generated template for the PinPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>จุดที่รับผิดชอบ</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-searchbar showCancelButton placeholder="ค้นหา" [(ngModel)]="searchStr" (input)="getItems()" (ionClear)="resetData()"></ion-searchbar>\n  <ion-list>\n      <ion-grid>\n        <ion-row *ngFor="let item of items" (click)="itemSelected(item)" class="border">\n          <ion-col col-8>\n                {{ item.pinName }}\n          </ion-col>\n          <ion-col col-4>\n              <!-- <ion-icon  name="checkmark-circle" color="secondary"></ion-icon> -->\n              <div class="text" *ngIf="item.createdDtm != null">ส่งแล้ว</div>\n              <div class="not-text" *ngIf="item.createdDtm == null">ไม่มีข้อมูล</div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n  </ion-list>\n  \n</ion-content>\n'/*ion-inline-end:"C:\Users\SWE-PC\Desktop\water\src\pages\pin\pin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_global_provider__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_4__angular_Http__["b" /* Http */]])
    ], PinPage);
    return PinPage;
}());

//# sourceMappingURL=pin.js.map

/***/ }),

/***/ 125:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 125;

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/analysis/analysis.module": [
		293,
		14
	],
	"../pages/analysisdetail/analysisdetail.module": [
		294,
		1
	],
	"../pages/createpin/createpin.module": [
		295,
		13
	],
	"../pages/login/login.module": [
		301,
		12
	],
	"../pages/modal-problem-result/modal-problem-result.module": [
		296,
		11
	],
	"../pages/modal/modal.module": [
		299,
		10
	],
	"../pages/pin/pin.module": [
		307,
		9
	],
	"../pages/problem/problem.module": [
		297,
		8
	],
	"../pages/problemdetail/problemdetail.module": [
		298,
		0
	],
	"../pages/quality/quality.module": [
		303,
		7
	],
	"../pages/register/register.module": [
		300,
		6
	],
	"../pages/result/result.module": [
		305,
		5
	],
	"../pages/setting/setting.module": [
		302,
		4
	],
	"../pages/tabs/tabs.module": [
		306,
		3
	],
	"../pages/track/track.module": [
		304,
		2
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 167;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_Http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_toast__ = __webpack_require__(168);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GlobalProvider = /** @class */ (function () {
    function GlobalProvider(toast) {
        this.toast = toast;
        this.host = "http://localhost/water/";
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_Http__["a" /* Headers */]().append("content-type", "application/x-www-form-urlencoded");
        this.userId = null;
        this.name = null;
        this.problemStatus = [
            '',
            'แจ้งปัญหา',
            'ตรวจสอบแล้ว',
            'สามารถแก้ไขปัญหาได้',
            'ไม่สามารถแก้ไขปัญหาได้'
        ];
    }
    GlobalProvider.prototype.setFormData = function (obj) {
        var formdata = new FormData();
        for (var property in obj) {
            formdata.append(property, obj[property]);
        }
        return formdata;
    };
    GlobalProvider.prototype.showToast = function (message, nav) {
        this.toast.show(message, '5000', 'bottom').subscribe(function () {
            if (nav != null) {
                nav.pop();
            }
        });
    };
    GlobalProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_toast__["a" /* Toast */]])
    ], GlobalProvider);
    return GlobalProvider;
}());

//# sourceMappingURL=global.provider.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_provider__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_modal__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_Http__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams, modalCtrl, global, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.global = global;
        this.http = http;
        this.current = 0;
        this.max = 100;
        this.stroke = 15;
        this.radius = 90;
        this.semicircle = false;
        this.rounded = false;
        this.responsive = true;
        this.clockwise = true;
        this.color = '#45ccce';
        this.background = '#eaeaea';
        this.duration = 800;
        this.animation = 'easeOutCubic';
        this.animationDelay = 5;
        this.animations = [];
        this.gradient = false;
        this.realCurrent = 0;
        this.wqiAllPin = [];
        this.pinId = null;
        this.wqi = [];
        this.do = [];
        this.bod = [];
        this.tss = [];
        this.sal = [];
        this.ph = [];
        this.fcb = [];
        this.nh3 = [];
        this.result = [];
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
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
        this.http.get(this.global.host + 'Wqi/getWqiAllPin').map(function (res) { return res.json(); }).subscribe(function (data) {
            console.log(data);
            _this.wqiAllPin = data;
            _this.pinId = data[0].pinId;
            _this.getWqiByPinId(_this.pinId);
        });
    };
    HomePage.prototype.getWqi = function () {
        this.getWqiByPinId(this.pinId);
    };
    HomePage.prototype.getWqiByPinId = function (pinId) {
        var _this = this;
        this.http.get(this.global.host + 'Wqi/getWqiDataByPinId?pinId=' + pinId)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.wqi = data.wqi;
            _this.current = data.wqi.val;
            _this.color = data.wqi.color;
            _this.do = data.do;
            _this.bod = data.bod;
            _this.tss = data.tss;
            _this.ph = data.ph;
            _this.sal = data.sal;
            _this.fcb = data.fcb;
            _this.nh3 = data.nh3;
            _this.result = data.problemResult;
        });
    };
    HomePage.prototype.presentModal = function () {
        var resultModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__modal_modal__["a" /* ModalPage */], { "wqiData": this.wqi, "result": this.result });
        resultModal.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\SWE-PC\Desktop\water\src\pages\home\home.html"*/'<!--\n  Generated template for the ResultPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<!-- <ion-header>\n    <ion-navbar>\n        <ion-title>Page1</ion-title>\n      <button ion-button round outline float-right>\n          <ion-icon name="star"></ion-icon> เข้าสู่ระบบ\n      </button>\n    </ion-navbar>\n</ion-header> -->\n\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n      หมอน้ำ\n    </ion-title>\n    <ion-buttons right>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name=\'menu\'></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n  \n<ion-content padding>    \n  <div class="shadow">  \n      <ion-item>\n          <ion-label>สถานที่</ion-label>\n          <ion-select [(ngModel)]="pinId" (ngModelChange)="getWqi()">\n            <ion-option *ngFor="let item of wqiAllPin" value="{{item.pinId}}" [selected]="item.pinId == pinId">{{item.pinName}}</ion-option>\n          </ion-select>\n        </ion-item>          \n        <div>\n            <div class="progress-percentage-wrapper">\n                <div class="progress-percentage-header-logo ng-cloak">\n                    <img src="./assets/img/avatar.png" class="img" />\n                </div>\n                <div class="progress-percentage-header ng-cloak">WQI</div>\n                <div class="progress-percentage ng-cloak">{{current}}<small>/100</small></div>\n\n              <round-progress [current]="current" [max]="max" [stroke]="stroke" [radius]="radius" [semicircle]="semicircle" [rounded]="rounded"\n              [responsive]="responsive" [clockwise]="clockwise" [color]="gradient ? \'url(#gradient)\' : color" [background]="background"\n              [duration]="duration" [animation]="animation" [animationDelay]="animationDelay"></round-progress>\n          \n              <div class="progress-percentage-button ng-cloak">\n                  <button ion-button outline small (click)="presentModal()">รายละเอียด</button>\n              </div>\n            </div>\n        </div>\n        <br>\n        <ion-grid>\n          <ion-row>\n            <ion-col class="border">\n              <ion-row>\n                <ion-col>DO</ion-col>\n                <ion-col class="tag {{do.class}}">{{ do.val }}</ion-col>\n              </ion-row>\n            </ion-col>\n            <ion-col class="border">\n              <ion-row>\n                <ion-col>pH</ion-col>\n                <ion-col class="tag {{ph.class}}">{{ ph.val }}</ion-col>\n              </ion-row>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n        <ion-grid>\n          <ion-row>\n              <ion-col class="border">\n                <ion-row>\n                  <ion-col>NH<sub>3</sub></ion-col>\n                  <ion-col class="tag {{nh3.class}}">{{ nh3.val }}</ion-col>\n                </ion-row>\n              </ion-col>\n              <ion-col class="border">\n                <ion-row>\n                  <ion-col>Sal</ion-col>\n                  <ion-col class="tag {{sal.class}}">{{ sal.val }}</ion-col>\n                </ion-row>\n              </ion-col>\n          </ion-row>\n        </ion-grid>\n        <ion-grid>\n          <ion-row>\n              <ion-col class="border">\n                <ion-row>\n                  <ion-col>FCB</ion-col>\n                  <ion-col class="tag {{fcb.class}}">{{ fcb.val }}</ion-col>\n                </ion-row>\n              </ion-col>\n              <ion-col class="border">\n                <ion-row>\n                  <ion-col>TSS</ion-col>\n                  <ion-col class="tag {{tss.class}}">{{ tss.val }}</ion-col>\n                </ion-row>\n              </ion-col>\n          </ion-row>\n        </ion-grid>\n        <ion-grid>\n          <ion-row>\n              <ion-col class="border">\n                <ion-row>\n                  <ion-col>BOD</ion-col>\n                  <ion-col class="tag {{bod.class}}">{{ bod.val }}</ion-col>\n                </ion-row>\n              </ion-col>\n              <ion-col class="border">\n              </ion-col>\n          </ion-row>\n        </ion-grid>\n  </div>\n\n</ion-content>\n\n<ion-footer>\n<img src="./assets/img/result2.png" />\n</ion-footer>'/*ion-inline-end:"C:\Users\SWE-PC\Desktop\water\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__providers_global_provider__["a" /* GlobalProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_global_provider__["a" /* GlobalProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_Http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_Http__["b" /* Http */]) === "function" && _e || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnalysisPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AnalysisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AnalysisPage = /** @class */ (function () {
    function AnalysisPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AnalysisPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AnalysisPage');
    };
    AnalysisPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-analysis',template:/*ion-inline-start:"C:\Users\SWE-PC\Desktop\water\src\pages\analysis\analysis.html"*/'<!--\n  Generated template for the AnalysisPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>ผลการวินิจฉัย</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <p class="scrollDiv">\n        <ion-list inset>\n            <button ion-item>\n                <ion-icon name="checkmark-circle" class="green"></ion-icon>\n                จุดที่ 1\n                <span class="t-green">บริโภค</span> \n                <span class="t-green">เลี้ยงสัตว์</span>\n                <span class="t-green">เพาะปลูก</span>\n            </button>\n            <button ion-item>\n                <ion-icon name="alert" class="gray"></ion-icon>\n                จุดที่ 2\n            </button>\n            <button ion-item>\n                <ion-icon name="checkmark-circle" class="green"></ion-icon>\n                จุดที่ 3\n                <span class="t-orange">บริโภค</span> \n                <span class="t-green">เลี้ยงสัตว์</span>\n                <span class="t-green">เพาะปลูก</span>\n            </button>\n            <button ion-item>\n                <ion-icon name="alert" class="gray"></ion-icon>\n                จุดที่ 4\n            </button>\n        </ion-list>\n    </p>\n</ion-content>\n'/*ion-inline-end:"C:\Users\SWE-PC\Desktop\water\src\pages\analysis\analysis.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], AnalysisPage);
    return AnalysisPage;
}());

//# sourceMappingURL=analysis.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TrackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TrackPage = /** @class */ (function () {
    function TrackPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TrackPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TrackPage');
    };
    TrackPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-track',template:/*ion-inline-start:"C:\Users\SWE-PC\Desktop\water\src\pages\track\track.html"*/'<!--\n  Generated template for the TrackPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>ส่งข้อมูลน้ำ</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <p class="scrollDiv">\n        <ion-list>\n            <ion-item>\n                <ion-label>พิกัด</ion-label>\n                <ion-select>\n                  <ion-option>เลือกพิกัด</ion-option>\n                </ion-select>\n            </ion-item>\n            <ion-list-header>\n                ค่า WQI\n            </ion-list-header>\n            <ion-item>\n                <ion-input type="text" placeholder="ค่าที่ 1"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-input type="text" placeholder="ค่าที่ 2"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-input type="text" placeholder="ค่าที่ 3"></ion-input>\n            </ion-item>\n        </ion-list>\n    </p>\n  \n    <div class="bottom" text-center>\n      <button ion-button round full><ion-icon name="checkmark-circle"></ion-icon>&nbsp;บันทึก</button>\n    </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\SWE-PC\Desktop\water\src\pages\track\track.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], TrackPage);
    return TrackPage;
}());

//# sourceMappingURL=track.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(240);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_toast__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_svg_round_progressbar__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_svg_round_progressbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular_svg_round_progressbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_register_register__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_header_menu_header_menu__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_pin_pin__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_createpin_createpin__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_problem_problem__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_track_track__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_analysis_analysis__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_global_provider__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_geolocation__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_result_result__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_tabs_tabs__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_modal_modal__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_http__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_Http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_quality_quality__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_setting_setting__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_modal_problem_result_modal_problem_result__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_pin_pin__["a" /* PinPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_createpin_createpin__["a" /* CreatepinPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_problem_problem__["a" /* ProblemPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_track_track__["a" /* TrackPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_analysis_analysis__["a" /* AnalysisPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_result_result__["a" /* ResultPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_modal_modal__["a" /* ModalPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_quality_quality__["a" /* QualityPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_setting_setting__["a" /* SettingPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_modal_problem_result_modal_problem_result__["a" /* ModalProblemResultPage */],
                __WEBPACK_IMPORTED_MODULE_11__components_header_menu_header_menu__["a" /* HeaderMenuComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_23__angular_Http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6_angular_svg_round_progressbar__["RoundProgressModule"],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/analysis/analysis.module#AnalysisPageModule', name: 'AnalysisPage', segment: 'analysis', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/analysisdetail/analysisdetail.module#AnalysisdetailPageModule', name: 'AnalysisdetailPage', segment: 'analysisdetail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/createpin/createpin.module#CreatepinPageModule', name: 'CreatepinPage', segment: 'createpin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-problem-result/modal-problem-result.module#ModalProblemResultPageModule', name: 'ModalProblemResultPage', segment: 'modal-problem-result', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/problem/problem.module#ProblemPageModule', name: 'ProblemPage', segment: 'problem', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/problemdetail/problemdetail.module#ProblemdetailPageModule', name: 'ProblemdetailPage', segment: 'problemdetail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal/modal.module#ModalPageModule', name: 'ModalPage', segment: 'modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setting/setting.module#SettingPageModule', name: 'SettingPage', segment: 'setting', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/quality/quality.module#QualityPageModule', name: 'QualityPage', segment: 'quality', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/track/track.module#TrackPageModule', name: 'TrackPage', segment: 'track', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/result/result.module#ResultPageModule', name: 'ResultPage', segment: 'result', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pin/pin.module#PinPageModule', name: 'PinPage', segment: 'pin', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_pin_pin__["a" /* PinPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_createpin_createpin__["a" /* CreatepinPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_problem_problem__["a" /* ProblemPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_track_track__["a" /* TrackPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_analysis_analysis__["a" /* AnalysisPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_result_result__["a" /* ResultPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_modal_modal__["a" /* ModalPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_quality_quality__["a" /* QualityPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_setting_setting__["a" /* SettingPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_modal_problem_result_modal_problem_result__["a" /* ModalProblemResultPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_17__providers_global_provider__["a" /* GlobalProvider */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_toast__["a" /* Toast */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_http__["a" /* HTTP */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_geolocation__["a" /* Geolocation */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_provider__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, global) {
        this.global = global;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\SWE-PC\Desktop\water\src\app\app.html"*/'<ion-menu [content]="content">\n    <ion-header>\n        <ion-toolbar class="user-profile">\n\n            <ion-grid>\n                <ion-row>\n                    <ion-col padding-top col-12>\n                        <h2 ion-text class="no-margin bold text-white">\n                            <ion-icon name="contact"></ion-icon> {{global.name}}\n                        </h2>\n                    </ion-col>\n                </ion-row>\n        \n                <ion-row no-padding class="other-data">\n                    <!-- <ion-col no-padding class="column">\n                        <button ion-button icon-left small full color="light" menuClose disabled>\n                        <ion-icon name="contact"></ion-icon>\n                        แก้ไขข้อมูลส่วนตัว\n                        </button>\n                    </ion-col> -->\n                </ion-row>\n        \n            </ion-grid>\n        \n        </ion-toolbar>\n    </ion-header>\n    <ion-content>\n        <header-menu></header-menu>\n    </ion-content>\n</ion-menu>\n<ion-nav [root]="rootPage" #content></ion-nav>'/*ion-inline-end:"C:\Users\SWE-PC\Desktop\water\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__providers_global_provider__["a" /* GlobalProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_provider__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_pin_pin__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_problem_problem__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_quality_quality__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_setting_setting__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








//import { AuthServiceProvider } from '../../providers/auth/auth-service';
var HeaderMenuComponent = /** @class */ (function () {
    function HeaderMenuComponent(menuCtrl, app, global) {
        this.menuCtrl = menuCtrl;
        this.app = app;
        this.global = global;
        console.log('Hello HeaderMenuComponent Component');
    }
    HeaderMenuComponent.prototype.logoutClicked = function () {
        console.log("Logout");
        //this.authService.logout();
        this.menuCtrl.close();
        var nav = this.app.getRootNav();
        nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */]);
    };
    HeaderMenuComponent.prototype.gotoTrack = function () {
        // this.navCtrl.push(TrackPage);
    };
    HeaderMenuComponent.prototype.gotoProblem = function () {
        var nav = this.app.getRootNav();
        nav.push(__WEBPACK_IMPORTED_MODULE_5__pages_problem_problem__["a" /* ProblemPage */]);
    };
    HeaderMenuComponent.prototype.gotoQuality = function () {
        var nav = this.app.getRootNav();
        nav.push(__WEBPACK_IMPORTED_MODULE_6__pages_quality_quality__["a" /* QualityPage */]);
    };
    HeaderMenuComponent.prototype.gotoPin = function () {
        var nav = this.app.getRootNav();
        nav.push(__WEBPACK_IMPORTED_MODULE_3__pages_pin_pin__["a" /* PinPage */]);
    };
    HeaderMenuComponent.prototype.gotoSetting = function () {
        var nav = this.app.getRootNav();
        nav.push(__WEBPACK_IMPORTED_MODULE_7__pages_setting_setting__["a" /* SettingPage */]);
    };
    HeaderMenuComponent.prototype.gotoAnalysis = function () {
        // this.navCtrl.push(AnalysisPage);
    };
    HeaderMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'header-menu',template:/*ion-inline-start:"C:\Users\SWE-PC\Desktop\water\src\components\header-menu\header-menu.html"*/'<ion-content color="primary" persistent="true">\n    <ion-list class="user-list">\n        <button ion-item menuClose class="text-1x" (click)="gotoPin()">\n            <ion-icon item-left name="swap" color="primary"></ion-icon>\n            <span ion-text> ส่งข้อมูลน้ำ</span>\n        </button>\n        <button ion-item menuClose class="text-1x" (click)="gotoProblem()">\n            <ion-icon item-left name="construct" color="primary"></ion-icon>\n            <span ion-text> แจ้งปัญหา</span>\n        </button>\n        <button ion-item menuClose class="text-1x" (click)="gotoQuality()">\n            <ion-icon item-left name="checkmark-circle-outline" color="primary"></ion-icon>\n            <span ion-text> ผลการแจ้งปัญหา</span>\n        </button>\n        <button ion-item menuClose class="text-1x" (click)="gotoSetting()">\n            <ion-icon item-left name="cog" color="primary"></ion-icon>\n            <span ion-text> ตั้งค่าแจ้งเตือน</span>\n        </button>\n        <!-- <button ion-item menuClose class="text-1x">\n            <ion-icon item-left name="swap" color="primary"></ion-icon>\n            <span ion-text color="primary"> ส่งข้อมูลน้ำ</span>\n        </button>\n        <button ion-item menuClose class="text-1x">\n            <ion-icon item-left name="swap" color="primary"></ion-icon>\n            <span ion-text color="primary"> ส่งข้อมูลน้ำ</span>\n        </button>\n        <button ion-item menuClose class="text-1x">\n            <ion-icon item-left name="swap" color="primary"></ion-icon>\n            <span ion-text color="primary"> ส่งข้อมูลน้ำ</span>\n        </button>\n        <button ion-item menuClose class="text-1x">\n            <ion-icon item-left name="swap" color="primary"></ion-icon>\n            <span ion-text color="primary"> ส่งข้อมูลน้ำ</span>\n        </button> -->\n        <!-- <ion-item><ion-icon name="swap" class="green"></ion-icon> ส่งข้อมูลน้ำ</ion-item>\n        <ion-item><ion-icon name="alert" class="orange"></ion-icon> แจ้งปัญหา</ion-item>\n        <ion-item><ion-icon name="analytics" class="purple"></ion-icon> คุณภาพน้ำ</ion-item>\n        <ion-item><ion-icon name="clipboard" class="black"></ion-icon> ผลวินิจฉัย</ion-item>\n        <ion-item><ion-icon name="pin" class="red"></ion-icon> บันทึกพิกัด</ion-item>\n        <ion-item><ion-icon name="cog" class="gray"></ion-icon> ตั้งค่า</ion-item> -->\n        <button ion-item menuClose class="text-1x" (click)="logoutClicked()">\n            <ion-icon item-left name="log-out" color="primary"></ion-icon>\n            <span ion-text> ออกจากระบบ</span>\n        </button>\n      </ion-list>\n</ion-content>'/*ion-inline-end:"C:\Users\SWE-PC\Desktop\water\src\components\header-menu\header-menu.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */], __WEBPACK_IMPORTED_MODULE_2__providers_global_provider__["a" /* GlobalProvider */]])
    ], HeaderMenuComponent);
    return HeaderMenuComponent;
}());

//# sourceMappingURL=header-menu.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalPage = /** @class */ (function () {
    function ModalPage(navCtrl, navParams, params) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.current = 0;
        this.max = 100;
        this.stroke = 15;
        this.radius = 90;
        this.semicircle = false;
        this.rounded = false;
        this.responsive = true;
        this.clockwise = true;
        this.color = '#45ccce';
        this.background = '#eaeaea';
        this.duration = 800;
        this.animation = 'easeOutCubic';
        this.animationDelay = 5;
        this.animations = [];
        this.gradient = false;
        this.realCurrent = 0;
        this.result = [];
        var wqiData = params.get('wqiData');
        var result = params.get('result');
        this.result = result;
        this.current = wqiData.val;
        this.color = wqiData.color;
    }
    ModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalPage');
    };
    ModalPage.prototype.closeModal = function () {
        this.navCtrl.pop();
    };
    ModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-modal',template:/*ion-inline-start:"C:\Users\SWE-PC\Desktop\water\src\pages\modal\modal.html"*/'<!--\n  Generated template for the ModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n        <ion-title>ผลลัพธ์</ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only (click)="closeModal()">\n                <ion-icon item-right name="ios-close-outline"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n        <div class="shadow">          \n                  <div>\n                      <div class="progress-percentage-wrapper">\n                          <div class="progress-percentage-header-logo ng-cloak">\n                              <img src="./assets/img/avatar.png" class="img" />\n                          </div>\n                          <div class="progress-percentage-header ng-cloak">WQI</div>\n                          <div class="progress-percentage ng-cloak">{{current}}<small>/100</small></div>\n    \n                        <round-progress [current]="current" [max]="max" [stroke]="stroke" [radius]="radius" [semicircle]="semicircle" [rounded]="rounded"\n                        [responsive]="responsive" [clockwise]="clockwise" [color]="gradient ? \'url(#gradient)\' : color" [background]="background"\n                        [duration]="duration" [animation]="animation" [animationDelay]="animationDelay"></round-progress>\n                    \n                      </div>\n                  </div>\n            </div>\n\n        <ion-card-content class="result">\n            <div [innerHTML]=result.header></div>\n            <div [innerHTML]=result.content></div>                    \n        </ion-card-content>\n        <button ion-button full (click)="closeModal()">ปิด</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\SWE-PC\Desktop\water\src\pages\modal\modal.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _c || Object])
    ], ModalPage);
    return ModalPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=modal.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_provider__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_Http__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, navParams, http, formBuilder, global) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.formBuilder = formBuilder;
        this.global = global;
        this.provinceData = null;
        this.districtOption = [];
        this.districtData = null;
        this.subdistrictOption = [];
        this.subdistrictData = null;
        this.passwordType = 'password';
        this.passwordIcon = 'eye-off';
        this.form = this.formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            gender: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            dob: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[0-9]{2}/[0-9]{2}/[0-9]{4}')])],
            phone: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            village: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            province: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            district: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            subdistrict: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            email: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].email, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
    }
    RegisterPage.prototype.registerForm = function () {
        var _this = this;
        console.log(this.form.value);
        var formdata = this.global.setFormData(this.form.value);
        this.http.post(this.global.host + 'Register/addNewUser', formdata)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            // alert(data.message);
            if (data.result) {
                _this.global.showToast(data.message, _this.navCtrl);
            }
            else {
                _this.global.showToast(data.message, null);
            }
        });
    };
    RegisterPage.prototype.hideShowPassword = function () {
        this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
        this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
    };
    RegisterPage.prototype.clearDistrict = function () {
        this.districtOption = [];
        this.form.controls.district.setValue('');
        this.clearSubdistrict();
    };
    RegisterPage.prototype.clearSubdistrict = function () {
        this.subdistrictOption = [];
        this.form.controls.subdistrict.setValue('');
    };
    RegisterPage.prototype.setProvince = function (province) {
        var _this = this;
        this.clearDistrict();
        this.districtData.filter(function (item) {
            if (item.province_id == province) {
                _this.districtOption.push(item);
            }
        });
    };
    RegisterPage.prototype.setDistrict = function (district) {
        var _this = this;
        this.clearSubdistrict();
        this.subdistrictData.filter(function (item) {
            if (item.amphur_id == district) {
                _this.subdistrictOption.push(item);
            }
        });
    };
    RegisterPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.http.get('./assets/data/provinces.json').map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.provinceData = data;
            console.log(_this.provinceData);
        });
        this.http.get('./assets/data/amphures.json').map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.districtData = data;
            console.log(_this.districtData);
        });
        this.http.get('./assets/data/districts.json').map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.subdistrictData = data;
            console.log(_this.subdistrictData);
        });
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-register',template:/*ion-inline-start:"C:\Users\SWE-PC\Desktop\water\src\pages\register\register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>ลงทะเบียน</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form [formGroup]="form" (ngSubmit)="registerForm()">\n    <ion-list>\n\n      <ion-item>\n        <ion-label>ชื่อ-นามสกุล</ion-label>\n        <ion-input type="text" class="text-right" formControlName="name"></ion-input>\n      </ion-item>\n      <!-- <div class="error" *ngIf="form.controls.name.hasError(\'required\') && form.controls.name.dirty">กรอกชื่อ-นาสกุล</div> -->\n    \n      <ion-item>\n        <ion-label>เพศ</ion-label>\n        <ion-select formControlName="gender">\n          <ion-option value="1">หญิง</ion-option>\n          <ion-option value="2">ชาย</ion-option>\n        </ion-select>\n      </ion-item>\n      <!-- <div class="error" *ngIf="form.controls.gender.hasError(\'required\') && form.controls.gender.dirty">เลือกเพศ</div> -->\n\n      <ion-item>\n        <ion-label>วัน/เดือน/ปีเกิด</ion-label>\n        <ion-input type="text" formControlName="dob" placeholder="dd/mm/yyyy"></ion-input>\n      </ion-item>\n      <!-- <div class="error" *ngIf="form.controls.dob.hasError(\'required\') && form.controls.dob.dirty">เลือกวัน/เดือน/ปีเกิด</div> -->\n      <ion-item>\n        <ion-label>เบอร์โทรศัพท์</ion-label>\n        <ion-input type="number" formControlName="phone"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>หมู่ที่</ion-label>\n        <ion-input type="number" class="text-right" formControlName="village"></ion-input>\n      </ion-item>\n      <!-- <div class="error" *ngIf="form.controls.village.hasError(\'required\') && form.controls.village.dirty">กรอกหมู่ที่</div> -->\n\n      <ion-item>\n        <ion-label>จังหวัด</ion-label>\n        <ion-select #province formControlName="province" (ionChange)="setProvince(province.value)">\n            <ion-option *ngFor="let item of provinceData" value="{{item.province_id}}">{{item.province_name}}</ion-option>\n        </ion-select>\n      </ion-item>\n      <!-- <div class="error" *ngIf="form.controls.province.hasError(\'required\') && form.controls.province.dirty">เลือกจังหวัด</div> -->\n\n      <ion-item>\n        <ion-label>อำเภอ</ion-label>\n        <ion-select #district formControlName="district" (ionChange)="setDistrict(district.value)">\n            <ion-option *ngFor="let item of districtOption" value="{{item.amphur_id}}">{{item.amphur_name}}</ion-option>\n        </ion-select>\n      </ion-item>\n      <!-- <div class="error" *ngIf="form.controls.district.hasError(\'required\') && form.controls.district.dirty">เลือกอำเภอ</div> -->\n\n      <ion-item>\n        <ion-label>ตำบล</ion-label>\n        <ion-select #subdistrict formControlName="subdistrict">\n            <ion-option *ngFor="let item of subdistrictOption" value="{{item.district_id}}">{{item.district_name}}</ion-option>\n        </ion-select>\n      </ion-item>\n      <!-- <div class="error" *ngIf="form.controls.subdistrict.hasError(\'required\') && form.controls.subdistrict.dirty">เลือกตำบล</div> -->\n\n      <ion-item>\n        <ion-label>อีเมล์</ion-label>\n        <ion-input formControlName="email" type="email" class="text-right"></ion-input>\n      </ion-item>\n      <!-- <div class="error" *ngIf="(form.controls.email.hasError(\'required\') || form.controls.email.hasError(\'email\')) && form.controls.email.dirty">กรอกอีเมล์</div> -->\n\n      <ion-item>\n        <ion-label>รหัสผ่าน</ion-label>\n        <ion-input formControlName="password" [type]="passwordType" clearOnEdit="false"></ion-input>\n        <ion-icon item-end [name]="passwordIcon" class="passwordIcon" (click)=\'hideShowPassword()\'></ion-icon>\n      </ion-item>\n      <!-- <div class="error" *ngIf="form.controls.password.hasError(\'required\') && form.controls.password.dirty">กรอกรหัสผ่าน</div> -->\n\n      <div class="bg-white" padding>\n        <button type="submit" [disabled]="!form.valid" ion-button color="primary" block>ลงทะเบียน</button>\n      </div>\n    \n    </ion-list>\n  </form>\n</ion-content>\n'/*ion-inline-end:"C:\Users\SWE-PC\Desktop\water\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__angular_Http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_4__providers_global_provider__["a" /* GlobalProvider */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__result_result__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TabsPage = /** @class */ (function () {
    function TabsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__result_result__["a" /* ResultPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__register_register__["a" /* RegisterPage */];
    }
    TabsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TabsPage');
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tabs',template:/*ion-inline-start:"C:\Users\SWE-PC\Desktop\water\src\pages\tabs\tabs.html"*/'<!--\n  Generated template for the TabsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content padding>\n    \n</ion-content>\n\n<ion-tabs selectedIndex="0">\n    <ion-tab class="add-button" [root]="tab1Root" tabTitle="คุณภาพน้ำ" tabIcon="analytics"></ion-tab>\n    <ion-tab class="add-button" [root]="tab2Root" tabTitle="เข้าสู่ระบบ" tabIcon="home"></ion-tab>\n    <ion-tab class="add-button" [root]="tab3Root" tabTitle="ลงทะเบียน" tabIcon="person-add"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"C:\Users\SWE-PC\Desktop\water\src\pages\tabs\tabs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ })

},[217]);
//# sourceMappingURL=main.js.map