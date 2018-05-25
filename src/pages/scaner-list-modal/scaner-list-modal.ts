import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';

/**
 * Generated class for the ScanerListModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scaner-list-modal',
  templateUrl: 'scaner-list-modal.html',
})
export class ScanerListModalPage {
  scanerList:any=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl:ViewController) {
  }

  ionViewDidLoad() {
    this.scanerList=this.navParams.get('data');
  }
  select(data)
  {
    
    this.viewCtrl.dismiss(data);
  }

}
