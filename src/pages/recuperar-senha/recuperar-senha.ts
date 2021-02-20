import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClienteService } from '../../services/cliente.service';
import { HomePage } from '../home/home';

/**
 * Generated class for the RecuperarSenhaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recuperar-senha',
  templateUrl: 'recuperar-senha.html',
})
export class RecuperarSenhaPage {

  form: FormGroup;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    private clienteService: ClienteService
    ) {
      this.form = this.formBuilder.group({
        email: ['', Validators.required]
      })
  }

  ionViewDidLoad() {
    
  }

  recuperar(){

    this.clienteService.recuperarSenha(this.form.controls.email.value)
    .subscribe(
      r => {this.navCtrl.setRoot(HomePage);},
      err => { console.log('Não conseguiu recuperar a senha')}
    )

  }

}
