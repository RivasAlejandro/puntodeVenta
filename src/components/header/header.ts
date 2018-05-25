import { Component } from '@angular/core';
import {CarritoProvider} from '../../providers/carrito/carrito';

/**
 * Generated class for the HeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'header',
  templateUrl: 'header.html'
})
export class HeaderComponent {

  total:any;

  constructor( public c:CarritoProvider) {
 this.total=c.total;

    
  }

  
}
