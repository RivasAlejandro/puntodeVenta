import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
/*
  Generated class for the ScanerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ScanerProvider {

  constructor(public http: HttpClient ,public bt:BluetoothSerial) {
    console.log('Hello ScanerProvider Provider');
  }
  buscaBT(){
return this.bt.list();
  }
  conectarBT(address){
   return  this.bt.connect(address);

  }
  readCode(address){
    let proceso =this.conectarBT(address).subscribe( data=>{
      this.bt.read().then(lectura=>{
             alert(lectura);
      });
    }

    )
  }

}
