import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalleReciboPage } from './detalle-recibo';

@NgModule({
  declarations: [
    DetalleReciboPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalleReciboPage),
  ],
})
export class DetalleReciboPageModule {}
