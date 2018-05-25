import { Injectable } from '@angular/core';
import {AlertController} from 'ionic-angular';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import {ArticulosProvider} from '../articulos-servicio/articulos-servicio'


@Injectable()
export class PrintProvider {
    total=0;
  constructor(private btSerial:BluetoothSerial,private alertCtrl:AlertController,
  private carrito:ArticulosProvider ) {
   
    
  }

  searchBt()
  {
    return this.btSerial.list();
  }


  connectBT(address)
  {
    return this.btSerial.connect(address);

  }

  testPrint(address)
  {
let printData="\u001B\u0061\u0001\ Abarrotes El Miki\n";

   for (let index = 0; index < this.carrito.tickets.length; index++) {
     var s="";
     if(this.carrito.tickets[index].precio.length<=3){
       s="....";
     }else{
       s="  ";
     }
     if(this.carrito.tickets[index].nombre.length>=3){
                       
     }
      printData=printData+"\u001D\u0021\u0000"+"\u001B\u0061\u0000"+this.carrito.trunca(this.carrito.tickets[index].nombre.toLowerCase().replace(/(^|\s)\S/g, l => l.toUpperCase()))+"  \u001B\u0061\u0002"+this.carrito.tickets[index].cantidad+" "+s+(this.carrito.tickets[index].cantidad*this.carrito.tickets[index].precio).toFixed(2)+"\n";
      
           
           
      
   }
   printData=printData+"\u000a\u001B\u0061\u0001 Total:"+this.total+"\n";
   


   

    
 
    let xyz=this.connectBT(address).subscribe(data=>{
      this.btSerial.write(printData).then(dataz=>{
        console.log("WRITE SUCCESS",dataz);

        let mno=this.alertCtrl.create({
          title:"Se Imprimio!!",
          buttons:['Aceptar']
        });
        mno.present();

        xyz.unsubscribe();
      },errx=>{
        console.log("Error",errx);
        let mno=this.alertCtrl.create({
          title:"Error "+errx,
          buttons:['OK']
        });
        mno.present();
      });
      },err=>{
        console.log("No hay Conexión",err);
        let mno=this.alertCtrl.create({
          title:"Error "+err,
          buttons:['Ok']
        });
        mno.present();
      });

  }

}
