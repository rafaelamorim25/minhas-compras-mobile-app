import { Component, Injector } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClienteDTO } from '../../models/cliente.dto';
import { Compra } from '../../models/compra.dto';
import { ClienteService } from '../../services/cliente.service';

/**
 * Generated class for the ClientesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-clientes',
  templateUrl: 'clientes.html',
})
export class ClientesPage {

  private clienteService: ClienteService;
  private compras: Array<Compra>;
  private keyword: string = "";

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    protected injector: Injector
    ) {
      this.clienteService = new ClienteService(injector);
  }

  ionViewDidLoad() {

    this.findAll();

  }

  search() {
    const key: string = this.keyword;

    if (key === '') {
      this.findAll();
    } else {
      this.compras = this.compras.filter(element =>
        element.nomeFantasia.includes(key)
      );
    }
  }

  findAll(){
    this.clienteService.getCompras().subscribe(
      response => {
        this.compras = response;
        console.log(this.compras);
      },
      error => {
        console.log(error)
      }
    )
  }

  details(compra: Compra) {
    this.navCtrl.push('ClienteDetailsPage', {compra: compra});    
  }

}
