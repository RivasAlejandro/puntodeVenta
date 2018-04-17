import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../home/home'
import { Platform } from 'ionic-angular';
/**
 * Generated class for the ArticulosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-articulos',
  templateUrl: 'articulos.html',
})
export class ArticulosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public plataforma:Platform) {
  
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArticulosPage');
  }
 

}

