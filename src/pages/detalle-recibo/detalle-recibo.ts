import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CarritoProvider} from '../../providers/carrito/carrito';

/**
 * Generated class for the DetalleReciboPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalle-recibo',
  templateUrl: 'detalle-recibo.html',
})
export class DetalleReciboPage {
  public detalle=[];
public tickets=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,
                        public carrito:CarritoProvider) {
                          this.detalle=this.carrito.detalle;
                            this.tickets=carrito.carrito;
  
  }

  ionViewDidLoad() {

  }
  calculaTotal(p):string{
   let resultado =  this.getCantidad(p)*p.precio_unitario;
resultado=parseFloat(resultado.toFixed(2));
  
       return ""+resultado;
  }
  getCantidad(a):number{
    let item1 =this.tickets.find(i => i.codigo === a.codigo);
   

    return    item1.cantidad;
  }

}
