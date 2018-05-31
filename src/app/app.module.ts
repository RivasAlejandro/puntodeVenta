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

import { CarritoProvider } from '../providers/carrito/carrito';
import { ListaComponent } from '../components/lista/lista';
import {DetalleReciboPage} from '../pages/detalle-recibo/detalle-recibo';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { PrintProvider } from '../providers/blue/blue';
import { ImprimirPage } from '../pages/imprimir/imprimir';
import {PrinterListModalPage} from '../pages/printer-list-modal/printer-list-modal';

import {HeaderComponent} from '../components/header/header';
import { GProvider } from '../providers/g/g';
import {CantidadPage} from '../pages/cantidad/cantidad';
import { Keyboard } from '@ionic-native/keyboard';
import { IonicStorageModule } from '@ionic/storage';
import { UniqueDeviceID } from '@ionic-native/unique-device-id';

import { Alert} from 'ionic-angular';
import { HttpModule } from '@angular/http'; 

@NgModule({

  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ArticulosPage,
    ConfPage,
    EditarPage,
    RecibosPage,
    ListaComponent,
    DetalleReciboPage,
    PrinterListModalPage,
    ImprimirPage,
    HeaderComponent,
    CantidadPage

  
  ],
  imports: [
    HttpModule,
    BrowserModule,
  
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ArticulosPage,EditarPage,
    ConfPage,RecibosPage,
    DetalleReciboPage,
    ImprimirPage,
    PrinterListModalPage,
    HeaderComponent,
    CantidadPage
 

  ],
  providers: [

    StatusBar,
    SplashScreen,

    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ArticulosProvider,
    BluetoothSerial,
    
    CarritoProvider,
    PrintProvider,
    
    UniqueDeviceID,
    GProvider,Keyboard
  ]
})
export class AppModule {}
