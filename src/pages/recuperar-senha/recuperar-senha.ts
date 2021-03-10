import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
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
    private clienteService: ClienteService,
    private toastController: ToastController
    ) {
      this.form = this.formBuilder.group({
        email: ['', Validators.required]
      })
  }

  recuperar(){

    this.clienteService.recuperarSenha(this.form.controls.email.value)
    .subscribe(
      r => {this.exibirMensagem('Uma nova senha foi gerada e enviada ao seu e-mail');this.navCtrl.setRoot(HomePage);},
      err => { this.exibirMensagem('E-mail não encontrado');}
    )
  }

  exibirMensagem(mensagem: string) {

    const toast = this.toastController.create(
      {
        message : mensagem,
        duration: 2000
      }
    ) 
    toast.present();
  }
}
