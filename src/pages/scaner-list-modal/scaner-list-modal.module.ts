import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScanerListModalPage } from './scaner-list-modal';

@NgModule({
  declarations: [
    ScanerListModalPage,
  ],
  imports: [
    IonicPageModule.forChild(ScanerListModalPage),
  ],
})
export class ScanerListModalPageModule {}
