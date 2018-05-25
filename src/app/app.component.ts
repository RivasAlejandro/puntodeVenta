import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {ArticulosPage} from '../pages/articulos/articulos'
import {HeaderComponent} from '../components/header/header';
import {EditarPage} from '../pages/editar/editar'
import {RecibosPage} from '../pages/recibos/recibos'; 
import {ImprimirPage} from '../pages/imprimir/imprimir';
import  {DetalleReciboPage}  from '../pages/detalle-recibo/detalle-recibo';
import { App, AlertController} from 'ionic-angular';
import { timer } from 'rxjs/observable/timer';
import { Keyboard } from '@ionic-native/keyboard';
import { Storage } from '@ionic/storage';
import {ConfPage} from '../pages/conf/conf'
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  
pages: Array<{title: string, component: any}>;
  //pages2: Array<{title: string, component: any}>;

  constructor(  public storage: Storage,public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,
  public app: App, public alertCtrl:AlertController) {
    
    this.storage.get('datos')
    .then((data)=>{
 if(data){
   this.initializeApp();
 }else{
   
   this.nav.setRoot(ConfPage);
 
 }
    });

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },

      
      
    ];
   


  }
  showSplash = true;
  initializeApp() {
    this.platform.ready().then(() => {


      



      this.statusBar.styleDefault();
      this.splashScreen.hide();
      
      this.platform.registerBackButtonAction(() => {
        let nav = this.app.getActiveNavs()[0];
        let activeView = nav.getActive();    
        if(activeView.name === "ArticulosPage") {
          if (nav.canGoBack()){ //Can we go back?
            nav.pop();
        } else {
               this.nav.setRoot(HomePage);
           }

        }
        if(activeView.name === "HomePage") {
          if (nav.canGoBack()){ //Can we go back?
            nav.pop();
        } else {
          const alert = this.alertCtrl.create({
            title: 'Salir de la aplicación',
                            message: 'Quieres Salir de la aplicación?',
                            buttons: [{
                                text: 'Cancelar',
                                role: 'cancel',
                                handler: () => {
                                    console.log('Application exit prevented!');
                                }
                            },{
                                text: 'Cerrar Aplicación',
                                handler: () => {
                                    this.platform.exitApp(); // Close this application
                                }
                            }]
                        });
                        alert.present();

        }
        }

      });
});
  }
navegaEditar(){
 this.nav.setRoot(ArticulosPage);
  this.nav.push(EditarPage);


}
imprimir(){
  this.nav.setRoot(ArticulosPage);
  this.nav.push(ImprimirPage);
}
navegaLista(){
  this.nav.setRoot(ArticulosPage);
  this.nav.push(ListPage);

  
}
navegaRecibos(){
  this.nav.setRoot(ArticulosPage);
  this.nav.push(DetalleReciboPage);

}
navegaArticulos(){
  this.nav.setRoot(ArticulosPage);
  





}
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    
    this.nav.setRoot(page.component);
    
  }
}
