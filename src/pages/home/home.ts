import { Component,Input, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Observable} from 'rxjs/Observable';
import {GProvider} from '../../providers/g/g'

import {ListaComponent} from '../../components/lista/lista';
import {HeaderComponent} from '../../components/header/header';
import {DetalleReciboPage} from  '../detalle-recibo/detalle-recibo';
import {ImprimirPage} from '../imprimir/imprimir';
import { LoadingController } from 'ionic-angular';
import {ArticulosProvider} from '../../providers/articulos-servicio/articulos-servicio';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  
  texto="";
  total=0;
  activo=false;

  constructor(public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public a:ArticulosProvider
  
    
    
      
  
  ) {
     this.a=a;
    

    

  }
 
  bigPrint(){
    this.a.print();
  }
  pedido(){
    this.a.crearPedido();
  }
  activa(){
    this.activo=!this.activo;
  }

goToDetalleRecibo(){
  
this.navCtrl.push(DetalleReciboPage);

}
imprime(){
this.navCtrl.push(ImprimirPage);
}
funcion(event){if(event.keyCode==13){

this.texto='';       

}

}

}



