import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import {ArticulosPage} from '../articulos/articulos';
/**
 * Generated class for the EditarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editar',
  templateUrl: 'editar.html',
})
export class EditarPage {
  public unregisterBackButtonAction: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public plataforma:  Platform) {

  
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditarPage');
  }
  ionViewWillLeave() {
    // Unregister the custom back button action for this page
    this.unregisterBackButtonAction && this.unregisterBackButtonAction();
}
initializeBackButtonCustomHandler(): void {
  this.unregisterBackButtonAction = this.plataforma.registerBackButtonAction(function(event){
    console.log('Prevent Back Button Page Change');
  }, 101); // Priority 101 will override back button handling (we set in app.component.ts) as it is bigger then priority 100 configured in app.component.ts file */
  } 





}
