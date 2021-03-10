import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NgxMaskIonicModule } from 'ngx-mask-ionic';
import { ClienteFormPage } from './cliente-form';

@NgModule({
  declarations: [
    ClienteFormPage,
  ],
  imports: [
    IonicPageModule.forChild(ClienteFormPage),
    NgxMaskIonicModule.forRoot()
  ],
})
export class ClienteFormPageModule {}
