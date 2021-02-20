import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VisualizarContaPage } from './visualizar-conta';

@NgModule({
  declarations: [
    VisualizarContaPage,
  ],
  imports: [
    IonicPageModule.forChild(VisualizarContaPage),
  ],
})
export class VisualizarContaPageModule {}
