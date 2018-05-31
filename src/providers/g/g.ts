
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
/*
  Generated class for the GProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GProvider {
public total;
datos:any;
  constructor(public storage:Storage) {
    storage.get('datos').then((val) => {
    this.datos= val;
    });
    setTimeout(() => {
      console.log(this.datos);
    },2000);
   // 

  
    
  }

}
