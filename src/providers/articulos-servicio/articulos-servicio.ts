
import { Injectable } from '@angular/core';
import { Http,Response,Headers,RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {CantidadPage} from '../../pages/cantidad/cantidad';
import { ModalController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { EditarPage } from '../../pages/editar/editar';
import { ToastController } from 'ionic-angular';
import {GProvider} from '../g/g';
import { Storage } from '@ionic/storage';


/*

  Generated class for the ArticulosServicioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class  ArticulosProvider {
  public tickets=[];
  public total=0;
  public conexion:any;
public indice=1;
public codigoProducto:any; 
  public  productos={};
    public productos2=Object.keys(this.productos);
public base="http://192.168.1.29/abarrotes/api/v1/api.php";
  constructor(public http: Http,public  alert:AlertController, 
                 public t:ToastController,  public g:GProvider,
           public      strorage:Storage) {
    this.http=http;


    var datos;
this.strorage.get('datos').then((val) => {
  datos= val;
  });
  console.log(datos);
    setTimeout(() => {
      if(datos!=null){
       
      
      this.cargarProductos();}
    }, 4000);
   
    
    
      
     
     
    }


  print(){
    
    this.http.get('http://'+this.g.datos.ip+'/probarticket/index2.php')
    .map(res=> res.json())
    .subscribe(
       data=>{
         this.productos=data;
         
       },error=>{
         
       }
    )
  }
cargarProductos(){
  this.http.get('http://'+this.g.datos.ip+'/abarrotes/api/v3/productos')
.map(res=>res.json()).
subscribe(
data=>{
   this.productos=data;
},
error=>{
  console.log(error);
}
);
}
  crearPedido(){
  let  datos={"productos":[]};
   for(let i=0; i < this.tickets.length; i++) {
               datos.productos.push([ this.tickets[i].comercial,Number(this.tickets[i].cantidad)]);
            
              }
     
   


  
    let  body= JSON.stringify(datos);
    console.log(body);

    this.http.post('http://'+this.g.datos.ip+'/abarrotes/api/v3/pedidos/crear',body)
    .map(res=> res.json()).subscribe(data=>{
      console.log(data);
    });
  }
  pruebaConexion(){
   
      
        this.http.post('http://'+this.g.datos.ip+'/abarrotes/pruebaCors.php',JSON.stringify({respuesta:"ok"})).map(res => res.json()).subscribe(data => {
          this.conexion=data;
        },error=>{
          console.log(error.status);
        });
         
       
    
    
  }
  cantidad(codigo):number{
  var contador=1;
  
  let item1 =this.tickets.find(i => i.codigo === codigo);
  while(item1!=undefined){
    contador++;
  }
  alert(contador);
    return contador

  }
  vaciarTicket(){
    let alert = this.alert.create({
      title: 'Deseas eliminar el ticket?',
      
      buttons: [{
        text:'Si',
        role:'ok',
        handler:data=>{
          this.tickets=[];
          this.total=0;

        }
      },{ text:'No',role:'ok',
      handler:data=>{

      }
    }]
    });
    alert.present();
  
  }
  aGranel(code){
    this.codigoProducto= code.substring(2,7);

    var cantidad= code.substring(7,code.length-1);
 
    cantidad = cantidad/100;
 ;
  let  referencia = this.productos[this.codigoProducto];
  if(referencia!=undefined){
  this.tickets.unshift({
    codigo:code,
    comercial:this.productos[this.codigoProducto][0],
    nombre:this.productos[this.codigoProducto][1],
  precio:this.productos[this.codigoProducto][2],
  unidad:this.productos[this.codigoProducto][3],
                cantidad:cantidad
                        }); 
                      }else{
                        let toast = this.t.create({
                          message: 'Producto no encontrado con ese código!',
                          duration: 2000,
                          position:'middle',
                          cssClass:'error'
                        });
                        toast.present();

                      }

  }
  suma(p){
         this.total+=Number(p);
  }
  add(p){
   if(p.startsWith('20')){
            this.aGranel(p);
        
   }
    
   
   
    let item1 =this.tickets.find(i => i.codigo === p);
     if(item1!=undefined){
       
      for (var w = 0; w< this.tickets.length; w++) {
      
                if(item1.codigo==this.tickets[w].codigo){
                  console.log(this.tickets[w].cantidad);
                        if(this.tickets[w].unidad=="KILOGRAMO"){
                                    
                        }else{
                          
                       this.tickets[w].cantidad++;
                      }
                        
                }
        

 }
            }else{
            
           //crea el nuevo objeto 
           let peso=0;
           
                     if((!p.startsWith('20'))){
                      let  referencia = this.productos[p];
if(referencia!=undefined){
                   this.tickets.unshift({
                  codigo:p,
                  comercial:this.productos[p][0],
                  nombre:this.productos[p][1],
                precio:this.productos[p][2],
                unidad:this.productos[p][3],
                              cantidad:1}); 
                   
                            }else{
                              // No esta definido 
                              let toast = this.t.create({
                                message: 'Producto no encontrado con ese código!',
                                duration: 2000,
                                position:'middle',
                                cssClass:'error'
                              });
                              toast.present();
                              
                            }
                          }
          } 
        }



           
            
            calcular(precio,cantidad):string
            {
              return (precio*cantidad).toFixed(2);}
            trunca(cad):string{
              var str = ""+cad;;
              if(cad.length>=30){       }
              return  str.substr(0,18)+""; }
            getTotal():number{
                 return this.total; }
  

}

