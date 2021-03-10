import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NgxMaskIonicModule } from 'ngx-mask-ionic';
import { ClienteDetailsPage } from '../cliente-details/cliente-details';
import { ClienteEditarPage } from './cliente-editar';

@NgModule({
  declarations: [
    ClienteEditarPage,
  ],
  imports: [
    IonicPageModule.forChild(ClienteEditarPage)
  ],
})
export class ClienteEditarPageModule {}
