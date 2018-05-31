import { Component } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UniqueDeviceID } from '@ionic-native/unique-device-id';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HomePage} from '../home/home'
import {ArticulosProvider} from '../../providers/articulos-servicio/articulos-servicio';
import {GProvider} from '../../providers/g/g';

import { Storage } from '@ionic/storage';


/**
 * Generated class for the ConfPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-conf',
  templateUrl: 'conf.html',
})
export class ConfPage {
  conectado=false;
  noconectado=false;
  id:any;
  ip:any;
  nombre:any; 
  pass:any;
  formulario: FormGroup;

  constructor( public navCtrl: NavController, public navParams: NavParams,
    private uniqueDeviceID: UniqueDeviceID, public builder:FormBuilder,public storage:Storage,
  public articulos:ArticulosProvider, public g:GProvider) {
   
  this.formulario =  this.builder.group({
    nombre:['',[Validators.required]],
    ip:['',[Validators.required]],
    pass:['',[Validators.required]],
    codigo:[this.id,[]]
  });
  
  }

  ionViewDidLoad() {
    this.uniqueDeviceID.get()
    .then((uuid: any) =>   this.id=uuid)
    .catch((error: any) => console.log(error));

 


  }
  conexion(){
    var datos;
    this.storage.get('datos').then((val) => {
      this.g.datos= val;
      });
     
     setTimeout(() => {
      if(this.g.datos==null){
        
        alert("No se han ingresado datos de conexión!");

      }else{
       
        if(this.g.datos!=null){
          console.log(this.g.datos);
        this.articulos.pruebaConexion();
        }
      }
     },4000);
     setTimeout(() => {
      console.log(this.articulos.conexion);
      if(this.articulos.conexion!=undefined){
if(this.articulos.conexion.objeto=1234){
  this.noconectado=false;
this.conectado=true; 

        alert('Se haconectado exitosamente!!');
        setTimeout(() => {
          this.navCtrl.setRoot(HomePage);
        }, 2000);
      }
    }else{
      this.noconectado=true;
      this.conectado=false
      alert("No se pudo conectar!!")
    }
       
     }, 5000);

  }

  guardar(){
    
  this.storage.set('datos',this.formulario.value);
    alert("Se ha guardado la configuración de conexión");
  }

}
