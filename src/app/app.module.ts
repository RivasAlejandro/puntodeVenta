import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {ArticulosPage}  from '../pages/articulos/articulos';
import {ConfPage} from '../pages/conf/conf';
import {RecibosPage} from '../pages/recibos/recibos';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { EditarPage } from '../pages/editar/editar';
import {NavController } from 'ionic-angular';
import {ArticulosProvider } from '../providers/articulos-servicio/articulos-servicio';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ArticulosPage,
    ConfPage,
    EditarPage,
    RecibosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ArticulosPage,EditarPage,
    ConfPage,RecibosPage

  ],
  providers: [

    StatusBar,
    SplashScreen,

    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ArticulosProvider
  ]
})
export class AppModule {}
