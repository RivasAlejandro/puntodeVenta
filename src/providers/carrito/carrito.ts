import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {ArticulosProvider}  from '../articulos-servicio/articulos-servicio';

/*
  Generated class for the CarritoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CarritoProvider {
public  total=0;
public carrito =[];
public detalle=[];
public articulos:any[];
  constructor(public http: HttpClient, public art:ArticulosProvider) {
    console.log('Hello CarritoProvider Provider');
  // this.articulos=this.art.productos;
  }
addProductByCode(p){


  var item1; 
  /*for (var i=0; i< this.art.productos.length;i++){
           if(this.art.productos[i].codigo==p){
             
             this.addProduct(this.art.productos[i]);
           
         }
      //   alert(item1.codigo);
  }*/

  
 
}
  addProduct(p){

    let item1 =this.carrito.find(i => i.codigo === p.codigo);
    if(item1==undefined){
      
      
    this.detalle.push(p);
    }else{    
      
      p.cantidad++;
      
      
    }
    this.carrito.push(p);

  }
  cuenta(code):number{
   
  
    return 0; 
  }
  redondea(precio):number{


    var result;
    result = (precio).toFixed(2);

    return result; 
  }
  todo(){}
  sumatotal(cantidad,precio):number{
    var x= cantidad*precio;
    this.total+=x;
    return x;

    
  }
}
