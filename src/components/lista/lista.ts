import { Component, ViewChild, ElementRef } from '@angular/core';
import {ArticulosProvider} from '../../providers/articulos-servicio/articulos-servicio';
import { LoadingController } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import {ImprimirPage} from '../../pages/imprimir/imprimir';
import { getLocaleEraNames } from '@angular/common';
import { ModalController } from 'ionic-angular';
import { Keyboard } from '@ionic-native/keyboard';
import { Renderer } from '@angular/core';
import { Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';





/**
 * Generated class for the ListaComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'lista',
  templateUrl: 'lista.html'
})
export class ListaComponent {
  @ViewChild('input') myInput ;
productos:any=[];
  text: string;
  public detalle=[];
  public tickets=[];
  public venta:any;
  texto:string="";
  esconde=false;
  T="0.0";
  prueba=[
  
    "00041789901980",
 "00001",
 "00172",
"00287",
"00308",
"012388000305"
 

  ];
    hay=false;
  public activo=false;

  constructor( public servicioArticulo:ArticulosProvider,
    public loadingCtrl: LoadingController, public nav:NavController,public keyboard:Keyboard , public rendered:Renderer,private el: ElementRef
  ,public alertCtrl: AlertController, public alertCtrl2: AlertController, public alertCtrl3: AlertController,
  public toastCtrl: ToastController

  ) {
     
      
  this.tickets= servicioArticulo.tickets;
this.venta=servicioArticulo.productos;
    this.productos=Object.keys(this.servicioArticulo.productos);
   
 

   
    
  
  
  }
  ionViewLoaded() {
   
     
    

 }
 kilo(codigo,unidad,nombre,cantidad){
  let alert = this.alertCtrl.create({
    cssClass: 'custom-alert',
    title:nombre,
  
 
    subTitle:unidad,

    inputs:[{
      label:'Peso',
      name:'peso',
      id:'peso',
      type:'number',
      value:cantidad
    }
    
    ],
    buttons:[{
      text:'Eliminar',
      role:'ok',
      handler:data=>{
        var x:any;
        for(var i=0; i<this.servicioArticulo.tickets.length;i++){
      var index = this.servicioArticulo.tickets.indexOf(this.servicioArticulo.tickets[i]);
      if(index>-1){
        x= this.servicioArticulo.tickets.splice(index, 1);
      
     this.tickets=Object.assign({},x);
      
     }
      }
      }
    },{
    text:'OK',
    role:'ok',
    handler:data=>{
      if(data.peso>0){
        for(var i=0; i<this.servicioArticulo.tickets.length;i++){
          if(codigo==this.servicioArticulo.tickets[i].codigo){
          this.servicioArticulo.tickets[i].cantidad=data.peso;}
          }
      }else{
        let toast = this.toastCtrl.create({
         
          message: 'Cantidad no valida!',
          duration: 2000,
          position:'middle'
        });
        toast.present();
      }

    }
    }]
  });

  alert.present().then(v=>{
  
  
  })
  

 }

 pieza(codigo,unidad,nombre,cantidad){
  let alert2 = this.alertCtrl2.create({
    cssClass: 'custom-alert',
    title:nombre,
subTitle:unidad,
message:' <br> Introduzca  cantidad',
    inputs:[{
      
      name:'peso',
      type:'number',
      value:cantidad
    
    }
    ],
    buttons:[{
      text:'Eliminar',
    role:'ok',
    handler:data=>{
      var x:any;
      for(var i=0; i<this.servicioArticulo.tickets.length;i++){
      var index = this.servicioArticulo.tickets.indexOf(this.servicioArticulo.tickets[i]);
      if(index>-1){
        x= this.servicioArticulo.tickets.splice(index, 1);
      
     this.tickets=Object.assign({},x);
       if(x.length==0){ this.hay=true;}
     }
      }
    }
      
    },{
      text:'OK',
      role:'ok',
      handler:data=>{
if(data.peso>=1 ){
  for(var i=0; i<this.servicioArticulo.tickets.length;i++){
    if(codigo==this.servicioArticulo.tickets[i].codigo){
           this.servicioArticulo.tickets[i].cantidad=data.peso;
    }
         }
}else{
  let toast = this.toastCtrl.create({
    message: 'Cantidad no valida!',
    duration: 2000,
    position:'middle'
  });
  toast.present();

}
      }

    }]
   
    
  });

  alert2.present().then(v=>{
     
  })


 }
 modificaPeso(codigo,unidad,nombre,cantidad){

   let kilo=false; 
   let caja= false;
   let pieza= false;
   if(unidad=="KILOGRAMO"){kilo=true;}
  if(kilo){ this.kilo(codigo,unidad,nombre,cantidad);
  }
 else {pieza=true;}
  if(pieza){
    this.pieza(codigo,unidad,nombre,cantidad);
  }
  

 }
 loadData(event){

 }
  ngOnInit() {
    
  }
  
  
  addToticket():void{
    this.servicioArticulo.add(this.texto);
  }
  imprime(){
     this.nav.push(ImprimirPage,{total:this.T})
  }
  activa(){
    this.activo=!this.activo
  }
  llena(){
for(let index = 0; index < this.prueba.length; index++) {
  
      const element = this.prueba[index];
      this.servicioArticulo.add(element);
      
    }
       }
  hacerVenta(event:any){
    
    this.keyboard.close();
var valor= event.target.value;
   

   
    {if(event.keyCode==13){

      this.texto='';   
     
      

    }
    this.servicioArticulo.add(valor);
    
  }    this.hay=false;
      
      }
  
detalleProducto(){
  
}
  buscar(id:any){
    this.productos= Object.keys(this.servicioArticulo.productos);
    let val = id.target.value;
    if (val && val.trim() != '') {
   this.productos= this.productos.filter((item)=>{
    return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
    
   })
    
    }
  
    
  }
  suma():string {
 var t=0; 
 for (let index = 0; index < this.servicioArticulo.tickets.length; index++) {
   t+=(this.servicioArticulo.tickets[index].precio*this.servicioArticulo.tickets[index].cantidad);
   
 }
 this.T=t.toFixed(2);
   
 return t.toFixed(2);
   
    
  }
  redondea(n){
    return n.toFixed(2);
  }
  trunca(cad):string{
    var str = ""+cad;;
    if(cad.length>=10){       }
    return  str.substr(0,10)+"";
  }
  

  getCantidad(a):number{
    let item1 =this.tickets.find(i => i.codigo === a.codigo);
   
if(item1==undefined){return ;}
    return    item1.cantidad;
  }
  calculaTotal(p):number{
    let resultado = this.getCantidad(p)*p.precio_unitario;
return  0;
 }
}

