import { Component, Injector } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Compra } from '../../models/compra.dto';
import { ClienteService } from '../../services/cliente.service';

/**
 * Generated class for the ClienteDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cliente-details',
  templateUrl: 'cliente-details.html',
})
export class ClienteDetailsPage {

  public compra: Compra;
  private clienteService: ClienteService;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    protected injector: Injector) {
      this.clienteService = new ClienteService(injector);
  }

  ionViewDidLoad() {
    this.compra = this.navParams.get('compra');
  }

  visualizar(){
    this.clienteService.visualizar(this.compra.clienteId)
    .subscribe(
    () => { },
      () => {},
    )
  }

}
