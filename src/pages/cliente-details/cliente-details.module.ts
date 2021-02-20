import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClienteDetailsPage } from './cliente-details';

@NgModule({
  declarations: [
    ClienteDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(ClienteDetailsPage),
  ],
})
export class ClienteDetailsPageModule {}
